import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TotAmt from '../Main/TotAmt';

function DonateList() {
    const [members, setMembers] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0); // 이달의 총 기부 금액
    const [displayedAmount, setDisplayedAmount] = useState(0); // 애니메이션용 표시 금액
    const navigate = useNavigate();



    
    // 페이지 로드 시 members 데이터와 총 기부 금액 가져오기
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('/api/members'); // 이 부분 금액 토탈로 바꾸기
                const topMembers = response.data.slice(0, 5);
                setMembers(topMembers);

                // 총 기부 금액 계산
                const total = 100001; //topMembers.reduce((sum, member) => sum + member.amount, 0);
                setTotalAmount(total);
            } catch (error) {
                console.log("데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchMembers();
    }, []);

    // 애니메이션으로 totalAmount까지 증가시키기
    useEffect(() => {
        let currentAmount = 0;
        const increment = Math.ceil(totalAmount / 15); // 증가 속도 조절

        const interval = setInterval(() => {
            currentAmount += increment;
            if (currentAmount >= totalAmount) {
                setDisplayedAmount(totalAmount);
                clearInterval(interval);
            } else {
                setDisplayedAmount(currentAmount);
            }
        }, 30); // 속도 조절

        return () => clearInterval(interval);
    }, [totalAmount]);

    // 이름을 첫 글자만 별표로 마스킹하는 함수
    const maskName = (name) => {
        if (name.length <= 1) return '*';
        return `*${name.slice(1)}`;
    };

    // 기부하기 버튼 클릭 시 기부 페이지로 이동
    const handleDonateClick = () => {
        navigate('/Donate'); // /donate 페이지로 이동
    };

    return (
        <div className="d-flex flex-column align-items-center bg-light min-vh-100 py-5">
            {/* 상단 기부하기 버튼 배너 */}
            <section className="w-100 bg-primary text-center py-3" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
                <Button
                    onClick={handleDonateClick}
                    variant="light"
                    className="fw-bold px-4 py-2"
                    style={{
                        fontSize: '1.2rem',
                        color: '#007bff',
                        backgroundColor: '#ffffff',
                        borderRadius: '30px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    💖 지금 기부하기
                </Button>
            </section>

            <main className="flex-shrink-0">
                {/* 총 기부 금액 표시 섹션 */}
                <TotAmt/>


                {/*
                <section className="py-4 text-center">
                    <h3 className="text-muted">이달의 총 기부 금액</h3>
                    <h1 className="display-4 fw-bold" style={{ color: "#28a745" }}>
                        ${displayedAmount.toLocaleString()}
                    </h1>
                </section>
                 */}
                
                 

                {/* 중간에 위치한 헤더 */}
                <section className="py-3 text-center">
                    <h2 className="display-5 fw-bold mb-4" style={{ color: "#007bff" }}>이달의 기부자 Top 5</h2>
                    <p className="lead text-muted mb-5">이번 달 기부에 참여해주신 상위 5명의 기부자들을 소개합니다.</p>
                </section>

                <section className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            {/* 기부자 목록을 카드 형태로 표시 */}
                            <ul className="list-group shadow-sm">
                                {members.map((member, index) => (
                                    <li
                                        key={index}
                                        className="list-group-item mb-4 p-4"
                                        style={{
                                            borderRadius: '8px',
                                            backgroundColor: '#ffffff',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    >
                                        <h5 className="mb-3" style={{ color: '#333', fontWeight: 'bold' }}>
                                            {maskName(member.username)}
                                        </h5>
                                        <p className="mb-2">
                                            <strong>기부 금액:</strong> ${member.amount}
                                        </p>
                                        <p className="mb-0">
                                            <strong>응원 메시지:</strong> "{member.message || '응원합니다!'}"
                                        </p>
                                        <footer className="blockquote-footer mt-3 text-muted">
                                            <small>{new Date(member.createdAt).toLocaleString()}</small>
                                        </footer>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default DonateList;
