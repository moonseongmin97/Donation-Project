import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch ,useSelector  } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { logout } from './userSlice';
import ApiCall from '../Common/ApiCall';


function NavbarComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 가져오기
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(userLoggedIn);
    }, []);

    const goBack = () => {
        navigate(-1); // 이전 페이지로 이동
    };

    const handleLoginLogout = async () => {
        if (isAuthenticated) {
            navigate('/LoginPage');
        } else {
            dispatch(logout(null)); 
            const { data, error } = await ApiCall({
                //url: '/api/signUp',
                url: '/api/logout',
                method: 'post',
                payload : {},
                //onSuccess: handleSuccess,
                //onError: handleError
            });
    
        }
    };

    // 뒤로가기 버튼 표시 여부 판단: 홈 경로이거나 이전 경로가 없는 경우 숨기기
    const shouldShowBackButton = location.pathname !== '/' && window.history.length > 1;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
            <Container>
                {/* 뒤로가기 버튼 (조건부 렌더링) */}
                {shouldShowBackButton && (
                    <Button variant="link" onClick={goBack} className="me-3 p-0">
                        <FaArrowLeft size={20} style={{ color: 'white' }} />
                    </Button>
                )}
                <Navbar.Brand href="/">공통 네비 문성민의 사이트</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">홈</Nav.Link>
                        <Nav.Link href="/about">소개</Nav.Link>
                        <Nav.Link href="/contact">문의</Nav.Link>
                        <Nav.Link href="/pricing">가격</Nav.Link>
                        <Nav.Link onClick={handleLoginLogout}>
                            {isAuthenticated ? '로그아웃' : '로그인'}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
