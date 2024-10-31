// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
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
                      <a className="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Blog
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                        <li><a className="dropdown-item" href="/blog-home">Blog Home</a></li>
                        <li><a className="dropdown-item" href="/blog-post">Blog Post</a></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
          </main>
        </div>
      );
}

export default BlogHome;