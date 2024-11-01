import React, { useState, useRef } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import YouTubePlayer from './youtubePlayer';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            {/* 네비게이션 바 */}
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
                <Container>
                    <Navbar.Brand href="/">문성민의 사이트</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">홈</Nav.Link>
                            <Nav.Link href="/about">소개</Nav.Link>
                            <Nav.Link href="/contact">문의</Nav.Link>
                            <Nav.Link href="/pricing">가격</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="flex-shrink-0">
                <section className="py-5">
                    <Container className="px-5 my-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">작업물 미리보기</h1>
                            <p className="lead fw-normal text-muted mb-0">포트폴리오 동영상 모음</p>
                        </div>
                        <Row className="gx-5">
                            {videoLinks.map((video, index) => (
                                <Col lg={6} key={index}>
                                    <div
                                        className="position-relative mb-5"
                                        style={{ width: "100%", height: "300px", cursor: "pointer" }}
                                        onMouseEnter={() => handleMouseEnter(video.videoId)}
                                        onMouseLeave={handleMouseLeave}
                                    >
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
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </main>

            {/* 푸터 */}
            <footer className="bg-dark py-4 mt-auto">
                <Container>
                    <Row className="align-items-center justify-content-between flex-column flex-sm-row">
                        <Col className="col-auto">
                            <div className="small m-0 text-white">Copyright &copy; Your Website 2023</div>
                        </Col>
                        <Col className="col-auto">
                            <Nav className="justify-content-end">
                                <Nav.Link href="#!" className="link-light small">개인정보 처리방침</Nav.Link>
                                <Nav.Link href="#!" className="link-light small">이용 약관</Nav.Link>
                                <Nav.Link href="#!" className="link-light small">연락처</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default PortfolioOverview;
