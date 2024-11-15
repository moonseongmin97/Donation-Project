import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../../main/_static/css/main.css';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import ApiCall from '../Common/ApiCall';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotAmt from './TotAmt';

function Home() {
    


// 테스트용 슬라이드 이미지 데이터
const images = [
  { src: "https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "함께 만드는 행복" },
  { src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "나누는 기쁨" },
  { src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "당신의 기부가 세상을 바꿉니다" },
  { src: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", caption: "따뜻한 마음을 나누세요" }
];


    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">

                {/* Header Section with Carousel */}
                <header className="banner-first-1" >
                    <Carousel fade interval={2500}>
                        {images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={image.src}
                                    alt={`Slide ${index + 1}`}
                                    style={{ height: '60vh', objectFit: 'cover' }}
                                />
                                <Carousel.Caption>
                                    <h3 className="display-4 fw-bold">{image.caption}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </header>

                <TotAmt/>

                {/* Sections with Animation */}
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="row gx-5">
                            {/* Donation Status */}
                            <div className="col-lg-4 mb-5 card-hover">
                                <div className="p-4 rounded bg-white shadow-sm text-center">
                                    <h3 className="fw-bold">기부 현황</h3>
                                    <p>기부금 사용 내역을 확인하세요.</p>
                                    <Link to="/status" className="btn btn-outline-primary animated-button">기부 현황 보기</Link>
                                </div>
                            </div>
                            {/* Video Gallery */}
                            <div className="col-lg-4 mb-5 card-hover">
                                <div className="p-4 rounded bg-white shadow-sm text-center">
                                    <h3 className="fw-bold">영상 갤러리</h3>
                                    <p>감동적인 기부 이야기를 영상으로 만나보세요.</p>
                                    <Link to="/gallery" className="btn btn-outline-primary animated-button">영상 보러 가기</Link>
                                </div>
                            </div>
                            {/* Donor List */}
                            <div className="col-lg-4 mb-5 card-hover">
                                <div className="p-4 rounded bg-white shadow-sm text-center">
                                    <h3 className="fw-bold">기부자 명단</h3>
                                    <p>최근 기부자들을 소개합니다.</p>
                                    <Link to="/donor-list" className="btn btn-outline-primary animated-button">기부자 명단 보기</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Inspiring Quote Section */}
                <section className="py-5 bg-secondary text-white text-center">
                    <div className="container px-5">
                        <h2 className="display-6 fw-bold mb-4">"함께라면 더 밝은 내일을 만들 수 있습니다"</h2>
                        <p className="lead">여러분의 따뜻한 마음이 세상을 더 환하게 합니다.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
