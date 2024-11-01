// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link , useNavigate  } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Faq() {
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
            {/* <NavbarComponent/>   */}
    
            {/* Page Content */}
            <section className="py-5">
              <div className="container px-5 my-5">
                <div className="text-center mb-5">
                  <h1 className="fw-bolder">Frequently Asked Questions</h1>
                  <p className="lead fw-normal text-muted mb-0">How can we help you?</p>
                </div>
    
                <div className="row gx-5">
                  <div className="col-xl-8">
                    <h2 className="fw-bolder mb-3">Account & Billing</h2>
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                          </button>
                        </h3>
                        <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default...
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                          </button>
                        </h3>
                        <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default...
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                          </button>
                        </h3>
                        <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default...
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <h2 className="fw-bolder mb-3">Website Issues</h2>
                    <div className="accordion mb-5 mb-xl-0" id="accordionExample2">
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingOne2">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                            Accordion Item #1
                          </button>
                        </h3>
                        <div className="accordion-collapse collapse show" id="collapseOne2" aria-labelledby="headingOne2" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default...
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingTwo2">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                            Accordion Item #2
                          </button>
                        </h3>
                        <div className="accordion-collapse collapse" id="collapseTwo2" aria-labelledby="headingTwo2" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default...
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h3 className="accordion-header" id="headingThree2">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                            Accordion Item #3
                          </button>
                        </h3>
                        <div className="accordion-collapse collapse" id="collapseThree2" aria-labelledby="headingThree2" data-bs-parent="#accordionExample2">
                          <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="col-xl-4">
                    <div className="card border-0 bg-light mt-xl-5">
                      <div className="card-body p-4 py-lg-5">
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="text-center">
                            <div className="h6 fw-bolder">Have more questions?</div>
                            <p className="text-muted mb-4">
                              Contact us at <a href="#!">support@domain.com</a>
                            </p>
                            <div className="h6 fw-bolder">Follow us</div>
                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
    
          {/* Footer */}
          {/* <FooterComponent/> */}
        </div>
      );
}

export default Faq;