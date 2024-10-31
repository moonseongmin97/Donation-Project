// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link , useNavigate  } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Pricing() {
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
      <div className="d-flex flex-column h-100">
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
                    <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                      <li><a className="dropdown-item" href="/blog-home">Blog Home</a></li>
                      <li><a className="dropdown-item" href="/blog-post">Blog Post</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                      <li><a className="dropdown-item" href="/portfolio-overview">Portfolio Overview</a></li>
                      <li><a className="dropdown-item" href="/portfolio-item">Portfolio Item</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  
          {/* Pricing Section */}
          <section className="bg-light py-5">
            <div className="container px-5 my-5">
              <div className="text-center mb-5">
                <h1 className="fw-bolder">Pay as you grow</h1>
                <p className="lead fw-normal text-muted mb-0">With our no hassle pricing plans</p>
              </div>
              <div className="row gx-5 justify-content-center">
                {/* Pricing Card Free */}
                <div className="col-lg-6 col-xl-4">
                  <div className="card mb-5 mb-xl-0">
                    <div className="card-body p-5">
                      <div className="small text-uppercase fw-bold text-muted">Free</div>
                      <div className="mb-3">
                        <span className="display-4 fw-bold">$0</span>
                        <span className="text-muted">/ mo.</span>
                      </div>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2"><i className="bi bi-check text-primary"></i><strong> 1 users</strong></li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>5GB storage</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Unlimited public projects</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Community access</li>
                        <li className="mb-2 text-muted"><i className="bi bi-x"></i>Unlimited private projects</li>
                        <li className="mb-2 text-muted"><i className="bi bi-x"></i>Dedicated support</li>
                        <li className="mb-2 text-muted"><i className="bi bi-x"></i>Free linked domain</li>
                        <li className="text-muted"><i className="bi bi-x"></i>Monthly status reports</li>
                      </ul>
                      <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                    </div>
                  </div>
                </div>
  
                {/* Pricing Card Pro */}
                <div className="col-lg-6 col-xl-4">
                  <div className="card mb-5 mb-xl-0">
                    <div className="card-body p-5">
                      <div className="small text-uppercase fw-bold">
                        <i className="bi bi-star-fill text-warning"></i> Pro
                      </div>
                      <div className="mb-3">
                        <span className="display-4 fw-bold">$9</span>
                        <span className="text-muted">/ mo.</span>
                      </div>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2"><i className="bi bi-check text-primary"></i><strong> 5 users</strong></li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>5GB storage</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Unlimited public projects</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Community access</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Unlimited private projects</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Dedicated support</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Free linked domain</li>
                        <li className="text-muted"><i className="bi bi-x"></i>Monthly status reports</li>
                      </ul>
                      <div className="d-grid"><a className="btn btn-primary" href="#!">Choose plan</a></div>
                    </div>
                  </div>
                </div>
  
                {/* Pricing Card Enterprise */}
                <div className="col-lg-6 col-xl-4">
                  <div className="card">
                    <div className="card-body p-5">
                      <div className="small text-uppercase fw-bold text-muted">Enterprise</div>
                      <div className="mb-3">
                        <span className="display-4 fw-bold">$49</span>
                        <span className="text-muted">/ mo.</span>
                      </div>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-2"><i className="bi bi-check text-primary"></i><strong> Unlimited users</strong></li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>5GB storage</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Unlimited public projects</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Community access</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Unlimited private projects</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i>Dedicated support</li>
                        <li className="mb-2"><i className="bi bi-check text-primary"></i><strong> Unlimited</strong> linked domains</li>
                        <li className="text-muted"><i className="bi bi-check text-primary"></i>Monthly status reports</li>
                      </ul>
                      <div className="d-grid"><a className="btn btn-outline-primary" href="#!">Choose plan</a></div>
                    </div>
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
              <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2023</div></div>
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

export default Pricing;