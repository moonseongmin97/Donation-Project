import React, { useState } from 'react';
import { useDispatch ,useSelector  } from 'react-redux';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { login } from '.././Common/userSlice'; // login 액션이 정의된 경로를 확인하세요
import { useNavigate } from 'react-router-dom';
import ApiCall from '../Common/ApiCall';
import 'bootstrap/dist/css/bootstrap.min.css';






function LoginPage() {
    const [hello, setHello] = useState('변경 전');
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);



    // 리덕스
    const handleLogin = () => {
        alert("리덕스 시작");
        console.log("권한 값==1"+JSON.stringify(user));
        const fakeUser = { username: 'testUser', email: 'test@example.com' };
        dispatch(login(fakeUser)); // login 액션을 디스패치합니다.
        console.log("권한 값2=="+JSON.stringify(user));
    };

    // 리덕스
    const handleLogin22 = () => {
        console.log("권한 값3=="+JSON.stringify(user));
        const fakeUser = { username: '문성민', email: '문성민@example.com' };
        dispatch(login(fakeUser)); // login 액션을 디스패치합니다.
        console.log("권한 값4=="+JSON.stringify(user));
    };



    const handleSuccess = (data) => {
        //setId(data.result.username);
        //setId(data[0].username);
        console.log(JSON.stringify(data.success));

        if(data.success){
            alert("로그인 성공");
            alert(JSON.stringify(data));
            if(!document.referrer){
                navigate('/');
            }else{
                window.history.go(-1)
            }
        }else{
            alert("로그인 실패=="+data.message);
            alert(JSON.stringify(data));

        } 
        //navigate('/Signup');
        //console.log("2222222222222222===="+JSON.stringify(data.data));
    };
    
    const handleError = (data) => {
        console.error("로그인 중 오류 발생:", data);
        alert("로그인 실패"+data);
        setHello("로그인 실패");
    };

    const handleSubmit = async (event) => {
        console.log("handleSubmit 실행");
        event.preventDefault();
        setLoading(true);

        const { data, error } = await ApiCall({
            //url: '/api/signUp',
            url: '/api/signIn',
            method: 'post',
            payload : {loginId:id , passwordHash : pw , email : 'h22234'},
             //payload : {id:111111 , username : 2222},
            onSuccess: handleSuccess,
            onError: handleError
        });

        setLoading(false);
    };

    // 로그인 성공 시 세션 스토리지에 세션 정보 저장
    const saveLoginSession  = (token, userInfo) => {
    sessionStorage.setItem('authToken', token);
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('authToken', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

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
                                            className="w-100 mb-2" 
                                            disabled={loading}
                                        >
                                            {loading ? '로그인 중...' : '로그인'}
                                        </Button>
                                        <Button variant="outline-secondary" className="w-100" onClick={goToSignup}>회원가입</Button>
                                        <Button variant="outline-secondary" className="w-100" onClick={handleLogin}>테스트 버튼</Button> 
                                        <Button variant="outline-secondary" className="w-100" onClick={handleLogin22}>값 변경 버튼</Button> 
                                    </Form>
                                    {hello && <p className="text-center mt-3">{hello}</p>}
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
