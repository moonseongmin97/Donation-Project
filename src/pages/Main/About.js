// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link , useNavigate  } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
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
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Portfolio
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                        <li><a className="dropdown-item" href="/portfolio-overview">Portfolio Overview</a></li>
                        <li><a className="dropdown-item" href="/portfolio-item">Portfolio Item</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    
            {/* Header */}
            <header className="py-5">
              <div className="container px-5">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-xxl-6">
                    <div className="text-center my-5">
                      <h1 className="fw-bolder mb-3">Our mission is to make building websites easier for everyone.</h1>
                      <p className="lead fw-normal text-muted mb-4">
                        Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone.
                      </p>
                      <a className="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
    
            {/* About section one */}
            <section className="py-5 bg-light" id="scroll-target">
              <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                  <div className="col-lg-6">
                    <img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                  </div>
                  <div className="col-lg-6">
                    <h2 className="fw-bolder">Our founding</h2>
                    <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </section>
    
            {/* About section two */}
            <section className="py-5">
              <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                  <div className="col-lg-6 order-first order-lg-last">
                    <img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." />
                  </div>
                  <div className="col-lg-6">
                    <h2 className="fw-bolder">Growth &amp; beyond</h2>
                    <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </section>
    
            {/* Team members section */}
            <section className="py-5 bg-light">
              <div className="container px-5 my-5">
                <div className="text-center">
                  <h2 className="fw-bolder">Our team</h2>
                  <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                </div>
                <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                  <div className="col mb-5">
                    <div className="text-center">
                      <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                      <h5 className="fw-bolder">Ibbie Eckart</h5>
                      <div className="fst-italic text-muted">Founder &amp; CEO</div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="text-center">
                      <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                      <h5 className="fw-bolder">Arden Vasek</h5>
                      <div className="fst-italic text-muted">CFO</div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="text-center">
                      <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                      <h5 className="fw-bolder">Toribio Nerthus</h5>
                      <div className="fst-italic text-muted">Operations Manager</div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="text-center">
                      <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                      <h5 className="fw-bolder">Malvina Cilla</h5>
                      <div className="fst-italic text-muted">CTO</div>
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

export default About;