import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'; // 화살표 아이콘
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [nationCode, setNationCode] = useState("82");
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        console.log({ id, password, email, name, birthday, gender, phone, nationCode });
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* 네비게이션 바 */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Container>
                    <a className="navbar-brand" href="/">문성민의 사이트</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">홈</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">소개</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">문의</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/pricing">가격</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </nav>

            {/* 회원가입 폼 */}
            <Container className="py-5 flex-grow-1">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Card className="p-4 position-relative">
                            <Button
                                variant="light"
                                onClick={goBack}
                                className="position-absolute d-flex align-items-center justify-content-center"
                                style={{
                                    top: '10px',
                                    left: '10px',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <BsArrowLeft size={20} /> {/* 화살표 아이콘 */}
                            </Button>
                            <h2 className="text-center mb-4">회원가입</h2>
                            <Form onSubmit={handleSignup}>
                                <Form.Group controlId="formId" className="mb-3">
                                    <Form.Label>아이디</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="아이디"
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword" className="mb-3">
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="비밀번호"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="이메일 (선택사항)"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formName" className="mb-3">
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="이름"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBirthday" className="mb-3">
                                    <Form.Label>생년월일</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="생년월일 (8자리)"
                                        value={birthday}
                                        onChange={(e) => setBirthday(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formGender" className="mb-3">
                                    <Form.Label>성별</Form.Label>
                                    <Form.Check
                                        type="radio"
                                        label="남자"
                                        name="gender"
                                        value="M"
                                        checked={gender === "M"}
                                        onChange={() => setGender("M")}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="여자"
                                        name="gender"
                                        value="F"
                                        checked={gender === "F"}
                                        onChange={() => setGender("F")}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPhone" className="mb-3">
                                    <Form.Label>휴대전화</Form.Label>
                                    <Row>
                                        <Col xs={4}>
                                            <Form.Select value={nationCode} onChange={(e) => setNationCode(e.target.value)}>
                                                <option value="82">대한민국 +82</option>
                                                <option value="1">미국 +1</option>
                                                <option value="86">중국 +86</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={8}>
                                            <Form.Control
                                                type="tel"
                                                placeholder="휴대전화번호"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <Button type="submit" variant="primary" className="w-100">가입하기</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* 푸터 */}
            <footer className="bg-dark py-4 mt-auto">
                <Container>
                    <Row className="align-items-center justify-content-between flex-column flex-sm-row">
                        <Col className="col-auto">
                            <div className="small text-white">Copyright &copy; Your Website 2023</div>
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

export default Signup;
