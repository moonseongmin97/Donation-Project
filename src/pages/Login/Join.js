// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link , useNavigate  } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
   const [hello, setHello] = useState('변경 전')
   const [id, setId] = useState("아이디를 입력해주세요");
   const [pw, setPw] = useState("패스워드를 입력해주세요");
   const navigate = useNavigate();
/*
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);
*/

    const handleLogin = async (event) => {
        // 로그인 처리 로직을 구현합니다.
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        alert("id=="+id +"///////"+"pw=="+pw);
        const response =     axios.post('/api/login',{"id":id})


        axios(
            {
              url: '/api/Join?id=11',
              method: 'post',
              data: {"id":id}               
            }
          )

        .then(response => setHello(response.data), alert(hello) )
        .catch(error => console.log(error))

        
    }

    function goHome (){  
        navigate('/home');  
    }

    
    return (
    
        <div>
        <Container className="d-flex align-items-center justify-content-center" 
            style={{ minHeight: '100vh'}}>

            <div className="border border-warning border-3 rounded-3 p-5">
                <Button variant="dark" onClick={goHome} >
                        회원가입 페이지                        
                </Button>
                <p className="text-center"> Project. Levup </p>
                <Form >
                    <Form.Group className="mb-2" controlId="formbasicEmail" >
                        <Form.Label> ID </Form.Label>
                        <Form.Control type="text" name='id' value={id} onChange={(e) => setId(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> Password </Form.Label>
                        <Form.Control type="password" name="pw" value={pw} onChange={(e) => setPw(e.target.value)}/>
                    </Form.Group>
                    <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" onClick={handleLogin} >
                    가입하기
                    </Button>

                    <Button variant="dark">
                        뒤로가기
                    </Button>
            </div>
                
                </Form>
            </div>

        </Container>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>
    );
}

export default Login;