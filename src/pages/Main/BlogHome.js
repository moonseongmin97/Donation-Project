// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link , useNavigate  } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function BlogHome() {
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
        <div className="d-flex flex-column">
          <main className="flex-shrink-0">
            {/* Navigation */}
            {/* <NavbarComponent/>   */}  
            {/* Page Content */}
            <section className="py-5">
              <div className="container px-5">
                <h1 className="fw-bolder fs-5 mb-4">Company Blog</h1>
                <div className="card border-0 shadow rounded-3 overflow-hidden">
                  <div className="card-body p-0">
                    <div className="row gx-0">
                      <div className="col-lg-6 col-xl-5 py-lg-5">
                        <div className="p-4 p-md-5">
                          <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                          <div className="h2 fw-bolder">Article heading goes here</div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                          <a className="stretched-link text-decoration-none" href="#!">Read more <i className="bi bi-arrow-right"></i></a>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-7">
                        <div className="bg-featured-blog" style={{ backgroundImage: "url('https://dummyimage.com/700x350/343a40/6c757d')" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            {/* Footer */}
            {/* <FooterComponent/> */}
          </main>
        </div>
      );
}

export default BlogHome;