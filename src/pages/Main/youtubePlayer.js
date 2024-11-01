import React, { useEffect, useRef, useState } from 'react';

function YouTubePlayer({ videoId, thumbnail, title, isActive, onReady }) {
    const playerRef = useRef(null);
    const [isReady, setIsReady] = useState(false); // 플레이어 준비 상태 확인

    useEffect(() => {
        if (!window.YT) {
            const scriptTag = document.createElement('script');
            scriptTag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(scriptTag);
        }
    }, []);

    useEffect(() => {
        if (!playerRef.current && window.YT) {
            playerRef.current = new window.YT.Player(`player-${videoId}`, {
                videoId,
                playerVars: {
                    controls: 1,
                    rel: 0,
                    modestbranding: 1,
                    autoplay: 0
                },
                events: {
                    onReady: (event) => {
                        setIsReady(true); // 플레이어 준비 상태 설정
                        onReady(videoId, event.target); // 재생 가능한 상태로 유지
                    }
                }
            });
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
        <div style={{ width: '100%', height: '100%' }}>
            <div id={`player-${videoId}`} style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
}

export default YouTubePlayer;
