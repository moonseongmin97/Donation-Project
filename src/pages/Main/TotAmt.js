import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../../main/_static/css/main.css';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import ApiCall from '../Common/ApiCall';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TotAmt() {
    const [totalDonation, setTotalDonation] = useState(0);
    const [displayedDonation, setDisplayedDonation] = useState(0);

    const handleSuccess = (data) => {        
        setTotalDonation(data.result.totalAmount); //데이터 세팅
    }

    const handleError = (err) => {        
        //setTotalDonation(data.result.totalAmount);
    }

    // 최초 진입시 데이터 통신
    useEffect(() => {        
        ApiCall({
            url: '/api/donateTotal',
            method: 'post',
            payload : {

            },
            onSuccess: handleSuccess,
            onError: handleError,
        });
    },[]);

     // 총 기부 금액 세팅을 위함
    useEffect(() => {               
        const increment = Math.ceil(totalDonation / 30);         

        const interval = setInterval(() => {
            setDisplayedDonation(prev => {
                if (prev + increment >= totalDonation) {
                    clearInterval(interval);
                    return totalDonation;
                }
                return prev + increment;
            });
        }, 30);               
        return () => clearInterval(interval);
    },[totalDonation]);



    return (
        <section className="py-5 bg-light">
            <div className="container px-5 my-5 text-center">
                <h2 className="fw-bold">현재까지의 총 기부 금액</h2>
                <h1
                    className="display-3 fw-bold"
                    style={{ color: "#28a745", animation: "fadeIn 2s" }}
                >
                    {displayedDonation.toLocaleString()}원
                </h1>
                <p className="text-muted">목표 금액: {totalDonation.toLocaleString()}원</p>
            </div>
        </section>
    );
}

export default TotAmt;
