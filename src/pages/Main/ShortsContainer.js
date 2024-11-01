import React, { useState, useRef } from 'react';
import { useDrag } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';
import ShortsPlayer from './ShortsPlayer';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const videoLinks = [
    { videoId: "ScMzIvxBSi4" },
    { videoId: "LXb3EKWsInQ" },
    { videoId: "hY7m5jjJ9mM" },
    { videoId: "dQw4w9WgXcQ" }
];

function ShortsContainer() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const playerPool = useRef({});

    const bind = useDrag(({ direction: [_, yDir], distance, cancel }) => {
        if (distance > 50) {
            cancel();
            const newIndex = Math.min(
                Math.max(currentIndex - yDir, 0),
                videoLinks.length - 1
            );
            setCurrentIndex(newIndex);
        }
    });

    const handlePlayerReady = (videoId, playerInstance) => {
        playerPool.current[videoId] = playerInstance;
    };

    return (
        <div className="d-flex flex-column h-100">
            {/* 공통 네비게이션 컴포넌트 */}
            {/* <NavbarComponent /> */}
            <div {...bind()} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
                {videoLinks.map((video, index) => (
                    <animated.div
                        key={video.videoId}
                        style={{
                            transform: `translateY(${(index - currentIndex) * 100}%)`,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'transform 0.5s ease',
                            backgroundColor: 'white' // 공백을 흰색으로 설정
                        }}
                    >
                        <ShortsPlayer
                            videoId={video.videoId}
                            isActive={index === currentIndex}
                            onReady={handlePlayerReady}
                        />
                    </animated.div>
                ))}
            </div>

            {/* 공통 푸터 컴포넌트 */}
            <FooterComponent />
        </div>
    );
}

export default ShortsContainer;
