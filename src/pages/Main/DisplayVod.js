// PortfolioOverview.js
import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import YouTubePlayer from './youtubePlayer';
//import YouTubeProfileCard from './YouTubeProfileCard'; // 새로운 컴포넌트 추가
import YouTubeProfileCard  from './YouTubeProfileCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../main/_static/css/main.css';

function PortfolioOverview() {
    const [activeVideo, setActiveVideo] = useState(null); // 현재 활성화된 비디오 ID
    const playerPool = useRef({}); // YouTubePlayer 인스턴스를 재활용하기 위한 풀


    const videoLinks = [
        { title: "예시 영상 1", videoId: "ScMzIvxBSi4", thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg" },
        { title: "예시 영상 2", videoId: "LXb3EKWsInQ", thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/hqdefault.jpg" },
        { title: "예시 영상 3", videoId: "hY7m5jjJ9mM", thumbnail: "https://img.youtube.com/vi/hY7m5jjJ9mM/hqdefault.jpg" },
        { title: "예시 영상 4", videoId: "dQw4w9WgXcQ", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }
    ];

    const handleMouseEnter = (videoId) => {
        setActiveVideo(videoId); // 마우스를 올린 비디오 ID를 활성화
    };

    const handleMouseLeave = () => {
        setActiveVideo(null); // 마우스를 떼면 활성화 해제
    };

    const handlePlayerReady = (videoId, playerInstance) => {
        playerPool.current[videoId] = playerInstance; // 플레이어를 풀에 저장하여 재활용 가능하도록
    };

    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <section className="py-5 bg-light">
                    <Container className="px-5 my-5">
                        <div className="d-flex align-items-start mb-5">
                            {/* YouTube 프로필 카드 컴포넌트 */}
                            
                            <YouTubeProfileCard  /> 
                            
                            <div className="ms-4">
                                <h1 className="fw-bolder text-primary">기부 영상 모음</h1>
                                <p className="lead fw-normal text-muted mb-0">다양한 기부 영상을 확인하세요!</p>
                            </div>
                        </div>
                        <Row className="gx-4 gy-5">
                            {videoLinks.map((video, index) => (
                                <Col lg={6} key={index}>
                                    <Card
                                        className="shadow-sm border-0"
                                        onMouseEnter={() => handleMouseEnter(video.videoId)}
                                        onMouseLeave={handleMouseLeave}
                                        style={{
                                            overflow: "hidden",
                                            borderRadius: "10px",
                                            transition: "transform 0.3s",
                                            transform: activeVideo === video.videoId ? "scale(1.02)" : "scale(1)"
                                        }}
                                    >
                                        <div className="position-relative" style={{ width: "100%", height: "300px" }}>
                                            <YouTubePlayer
                                                videoId={video.videoId}
                                                thumbnail={video.thumbnail}
                                                title={video.title}
                                                isActive={activeVideo === video.videoId}
                                                onReady={handlePlayerReady}
                                            />
                                            {activeVideo !== video.videoId && (
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundImage: `url(${video.thumbnail})`,
                                                        backgroundSize: 'cover',
                                                        zIndex: 1,
                                                        transition: 'opacity 0.3s',
                                                        opacity: activeVideo === video.videoId ? 0 : 1,
                                                    }}
                                                ></div>
                                            )}
                                        </div>
                                        <Card.Body className="text-center">
                                            <Card.Title className="fw-bold">{video.title}</Card.Title>
                                            <Button
                                                style={{
                                                    backgroundColor: "#007bff",
                                                    border: "none",
                                                    color: "#fff",
                                                    padding: "8px 16px",
                                                    fontSize: "0.9rem",
                                                    fontWeight: "bold",
                                                    borderRadius: "20px",
                                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                                    transition: "background-color 0.3s ease",
                                                }}
                                                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                                                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
                                            >
                                                🎥 영상 보기
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </main>
        </div>
    );
}

export default PortfolioOverview;
