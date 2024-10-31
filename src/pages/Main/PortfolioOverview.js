import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

function PortfolioOverview() {
    const videoRefs = useRef({});  // 각 비디오에 대한 useRef 저장용
    const [activeVideo, setActiveVideo] = useState(null);
    const [apiReady, setApiReady] = useState(false);
    const [errorVideo, setErrorVideo] = useState({});

    const videoLinks = [
        { title: "예시 영상 1", videoId: "ScMzIvxBSi4", thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg" },
        { title: "예시 영상 2", videoId: "LXb3EKWsInQ", thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/hqdefault.jpg" },
        { title: "예시 영상 3", videoId: "hY7m5jjJ9mM", thumbnail: "https://img.youtube.com/vi/hY7m5jjJ9mM/hqdefault.jpg" },
        { title: "예시 영상 4", videoId: "dQw4w9WgXcQ", thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }
    ];

    useEffect(() => {
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            tag.onload = () => setApiReady(true);
            document.body.appendChild(tag);
        } else {
            setApiReady(true);
        }

        window.onYouTubeIframeAPIReady = () => {
            videoLinks.forEach((video) => {
                const element = document.getElementById(video.videoId);
                if (element && !videoRefs.current[video.videoId]) {
                    videoRefs.current[video.videoId] = new window.YT.Player(video.videoId, {
                        videoId: video.videoId,
                        playerVars: {
                            controls: 1,
                            rel: 0,
                            modestbranding: 1
                        },
                        events: {
                            onError: () => {
                                setErrorVideo((prev) => ({ ...prev, [video.videoId]: true }));
                            }
                        }
                    });
                }
            });
        };
    }, [apiReady]);

    const handleMouseEnter = (videoId) => {
        setActiveVideo(videoId);
        const player = videoRefs.current[videoId];
        if (apiReady && player && typeof player.playVideo === 'function') {
            player.playVideo();
        } else {
            setErrorVideo((prev) => ({ ...prev, [videoId]: true }));
        }
    };

    const handleMouseLeave = (videoId) => {
        const player = videoRefs.current[videoId];
        if (player && typeof player.pauseVideo === 'function') {
            player.pauseVideo();
        }
    };

    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container px-5">
                        <a className="navbar-brand" href="/">문성민의 사이트</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="/">홈</a></li>
                                <li className="nav-item"><a className="nav-link" href="/about">소개</a></li>
                                <li className="nav-item"><a className="nav-link" href="/contact">문의</a></li>
                                <li className="nav-item"><a className="nav-link" href="/pricing">가격</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

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
                                        style={{ width: "100%", height: "300px" }}
                                        onMouseEnter={() => handleMouseEnter(video.videoId)}
                                        onMouseLeave={() => handleMouseLeave(video.videoId)}
                                    >
                                        {(activeVideo !== video.videoId || errorVideo[video.videoId]) && (
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
                                        <div id={video.videoId} style={{ width: '100%', height: '100%' }}></div>
                                        <h3 className="h3 fw-bolder mt-2 text-center">{video.title}</h3>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <section className="py-5 bg-light">
                    <Container className="px-5 my-5">
                        <h2 className="display-4 fw-bolder mb-4">함께 멋진 작업을 만들어보세요</h2>
                        <Button href="#!" className="btn btn-lg btn-primary">문의하기</Button>
                    </Container>
                </section>
            </main>

            <footer className="bg-dark py-4 mt-auto">
                <Container>
                    <Row className="align-items-center justify-content-between flex-column flex-sm-row">
                        <Col className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2023</div></Col>
                        <Col className="col-auto">
                            <a className="link-light small" href="#!">개인정보 처리방침</a>
                            <span className="text-white mx-1">&middot;</span>
                            <a className="link-light small" href="#!">이용 약관</a>
                            <span className="text-white mx-1">&middot;</span>
                            <a className="link-light small" href="#!">연락처</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default PortfolioOverview;
