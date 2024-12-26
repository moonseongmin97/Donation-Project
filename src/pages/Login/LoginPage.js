import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { login } from '.././Common/userSlice'; // login 액션이 정의된 경로 확인
import { useNavigate } from 'react-router-dom';
import ApiCall from '../Common/ApiCall';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kakao from './KakaoLogin';
import Naver from '../Naver/NaverLoginButton';

function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // 로그인된 사용자는 홈으로 리디렉션
    }
  }, [isAuthenticated, navigate]);




  const handleSuccess = (data) => {
    if (data.success) {
      dispatch(login(data.result)); // login 액션 디스패치
      navigate('/');
    } else {
      alert("로그인 실패");
      console.error("로그인 실패:", data);
    }
  };

  const handleError = (err) => {
    console.error("로그인 중 오류 발생:", err);
    alert("로그인 실패");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    await ApiCall({
      url: '/api/signIn',
      method: 'post',
      payload: { loginId: id, passwordHash: pw },
      onSuccess: handleSuccess,
      onError: handleError,
    });

    setLoading(false);
  };

  const goToSignup = () => {
    navigate('/Signup');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-shrink-0">
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
                  <Form onSubmit={handleSubmit}>
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
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-100 mb-3"
                      disabled={loading}
                    >
                      {loading ? '로그인 중...' : '로그인'}
                    </Button>
                    <Button variant="outline-secondary" className="w-100 mb-4" onClick={goToSignup}>
                      회원가입
                    </Button>
                  </Form>
                  {/* 소셜 로그인 버튼 그룹 */}
                  <div className="text-center">
                    <div className="d-flex justify-content-between">
                      <Kakao />
                      <Naver
                        clientId="AMRLiBWGa730vfQdSPsQ" // 네이버 개발자 센터에서 발급받은 클라이언트 ID
                        callbackUrl="http://localhost:3000/NaverRedirect" // 리다이렉트 URL
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
