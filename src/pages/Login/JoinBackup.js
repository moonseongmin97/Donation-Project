// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link , useNavigate  } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function JoinBackup() {
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container px-5">
                <a className="navbar-brand" href="/">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                    <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="/faq">FAQ</a></li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                        <li><a className="dropdown-item" href="/blog-home">Blog Home</a></li>
                        <li><a className="dropdown-item" href="/blog-post">Blog Post</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    
            {/* Contact Form */}
            <section className="py-5">
              <div className="container px-5">
                <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                  <div className="text-center mb-5">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <h1 className="fw-bolder">Get in touch</h1>
                    <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                  </div>
                  <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8 col-xl-6">
                      <form id="contactForm">
                        <div className="form-floating mb-3">
                          <input className="form-control" id="name" type="text" placeholder="Enter your name..." />
                          <label htmlFor="name">Full name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="email" type="email" placeholder="name@example.com" />
                          <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" />
                          <label htmlFor="phone">Phone number</label>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: '10rem' }}></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                        <div className="d-grid">
                          <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
    
          {/* Footer */}
          <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
              <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                <div className="col-auto">
                  <div className="small m-0 text-white">Copyright &copy; Your Website 2023</div>
                </div>
                <div className="col-auto">
                  <a className="link-light small" href="#!">Privacy</a>
                  <span className="text-white mx-1">&middot;</span>
                  <a className="link-light small" href="#!">Terms</a>
                  <span className="text-white mx-1">&middot;</span>
                  <a className="link-light small" href="#!">Contact</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
}

export default JoinBackup;