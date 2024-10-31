// src/main/frontend/src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const [hello, setHello] = useState('변경 전');
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/login', { id, pw });
            setHello(response.data.message || "로그인 성공");
        } catch (error) {
            console.error("로그인 중 오류 발생:", error);
        }
    };

    const goToSignup = () => {
        navigate('/Signup'); // 회원가입 페이지로 이동
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <main className="flex-shrink-0">
                {/* 네비게이션 */}
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

                {/* 로그인 폼 */}
                <section className="py-5">
                    <Container className="px-5">
                        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                            <div className="text-center mb-5">
                                <h1 className="fw-bolder">로그인</h1>
                                <p className="lead fw-normal text-muted mb-0">계정에 로그인하세요</p>
                            </div>
                            <Row className="justify-content-center">
                                <Col lg={8} xl={6}>
                                    <Form onSubmit={handleLogin}>
                                        <Form.Group controlId="formId" className="mb-3">
                                            <Form.Label>아이디</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="아이디를 입력하세요"
                                                value={id}
                                                onChange={(e) => setId(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formPassword" className="mb-3">
                                            <Form.Label>비밀번호</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="비밀번호를 입력하세요"
                                                value={pw}
                                                onChange={(e) => setPw(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Button type="submit" variant="primary" className="w-100 mb-2">로그인</Button>
                                        
                                        {/* 회원가입 버튼 */}
                                        <Button variant="outline-secondary" className="w-100" onClick={goToSignup}>회원가입</Button>
                                    </Form>
                                    {hello && <p className="text-center mt-3">{hello}</p>}
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </main>

            {/* 푸터 */}
            <footer className="bg-dark py-4 mt-auto">
                <Container className="px-5">
                    <Row className="align-items-center justify-content-between flex-column flex-sm-row">
                        <Col className="col-auto">
                            <div className="small m-0 text-white">Copyright &copy; Your Website 2023</div>
                        </Col>
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

export default Login;
