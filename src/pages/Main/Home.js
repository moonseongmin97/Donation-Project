import React from "react";
import { Link } from 'react-router-dom';
import '../../main/_static/css/main.css';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';

function Home() {

return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0">
        {/* navigate영역 */}
        {/* <NavbarComponent/>   */}

        {/* <header className="bg-dark py-5"> */}
        <header className="banner-first-1">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
              <div className="col-lg-8 col-xl-7 col-xxl-6">
                <div className="my-5 text-center text-xl-start">
                  <h1 className="display-5 fw-bolder text-white mb-2">메인 문구 생각해보자</h1>
                  <p className="lead fw-normal text-white-50 mb-4">사이드 문구</p>
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <a className="btn btn-primary btn-lg px-4 me-sm-3" ><Link className="nav-link" to="/about">여기버튼 1</Link></a>
                    <a className="btn btn-outline-light btn-lg px-4" href="#!">여긴 버튼 2</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <h2 className="fw-bolder mb-0">A better way to start building.</h2>
              </div>
              <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                  <div className="col mb-5 h-100">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                    <h2 className="h5">Featured title</h2>
                    <p className="mb-0">Paragraph of text beneath the heading to explain the heading.</p>
                  </div>
                  {/* 나머지 카드 컴포넌트들도 여기에 추가 */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        {/* footer */}
      {/* <FooterComponent/> */}
    </div>
  );
};


export default Home;