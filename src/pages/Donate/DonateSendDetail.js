import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TossPaymentsTest from '../toss/TossPaymentsTest';


function DonateSendDetail({ donorName, amount, message, onEdit, onConfirm }) {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    // 로그인 상태 확인
    if (!isAuthenticated) {
        alert("로그인 필요합니다.");
        navigate('/loginPage');
    }

        
    // 기부 폼 제출 시 처리
    const handleSubmit = (event) => {
        event.preventDefault();
            onEdit({
                donorName,
                amount,
                message
            });       
    };

    // 계좌 정보 선택 가능하게 만들어볼까? (가상의 계좌 정보)
    const bankInfo = {
        bankName: '우리은행',
        accountNumber: '1002-123-456789',
        accountHolder: '기부단체 이름',
    };

    return (
        <Container className="py-5">
            <Card className="p-4 shadow-sm text-center">
                <h4 className="mb-3">계좌 이체 정보</h4>
                <p>아래의 계좌로 기부 금액을 이체해 주세요.</p>
                <p><strong>은행명:</strong> {bankInfo.bankName}</p>
                <p><strong>계좌 번호:</strong> {bankInfo.accountNumber}</p>
                <p><strong>예금주:</strong> {bankInfo.accountHolder}</p>

                <hr className="my-4" />

                <h4 className="mb-3">기부자 정보</h4>
                <p><strong>기부자 이름:</strong> {donorName}</p>
                <p><strong>기부 금액:</strong> {amount} 원</p>
                <p><strong>응원 메시지:</strong> {message || '메시지 없음'}</p>

                <div className="mt-4 d-flex justify-content-center">
                    <Button variant="secondary" onClick={handleSubmit} className="me-3">
                        기부 정보 수정하기
                    </Button>
                    <Button variant="primary" onClick={onConfirm}>
                        기부 확정
                    </Button>
                    <TossPaymentsTest/>
                    
                </div>
            </Card>
        </Container>
    );
}

export default DonateSendDetail;
