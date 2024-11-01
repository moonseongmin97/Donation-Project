import React, { useEffect, useRef, useState } from 'react';

function ShortsPlayer({ videoId, isActive, onReady }) {
    const playerRef = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadYouTubeAPI = () => {
            if (!window.YT) {
                const scriptTag = document.createElement('script');
                scriptTag.src = "https://www.youtube.com/iframe_api";
                document.body.appendChild(scriptTag);
            }
        };

        const initializePlayer = () => {
            if (window.YT && !playerRef.current) {
                playerRef.current = new window.YT.Player(`shorts-player-${videoId}`, {
                    videoId,
                    playerVars: {
                        controls: 0,
                        autoplay: 0,
                        modestbranding: 1,
                        playsinline: 1,
                        loop: 1,
                    },
                    events: {
                        onReady: (event) => {
                            setIsReady(true);
                            setLoading(false);
                            onReady(videoId, event.target);
                        }
                    }
                });
            }
        };

        loadYouTubeAPI();

        if (window.YT) {
            initializePlayer();
        } else {
            window.onYouTubeIframeAPIReady = initializePlayer;
        }
    }, [videoId, onReady]);

    useEffect(() => {
        if (isReady && playerRef.current) {
            if (isActive) {
                playerRef.current.playVideo();
            } else {
                playerRef.current.pauseVideo();
            }
        }
    }, [isActive, isReady]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* 썸네일이 보이는 부분 */}
            {loading && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
                        backgroundSize: 'cover',
                        zIndex: 1,
                        borderRadius: '8px',
                    }}
                ></div>
            )}
            {/* 세로 긴 비디오 형태로 조정 */}
            <div
                id={`shorts-player-${videoId}`}
                style={{
                    width: '360px', // 세로형 비디오를 위한 너비 조정
                    height: '640px', // 세로형 비디오를 위한 높이 조정
                    borderRadius: '8px', // 모서리를 살짝 둥글게
                    overflow: 'hidden',
                }}
            />
        </div>
    );
}

export default ShortsPlayer;
