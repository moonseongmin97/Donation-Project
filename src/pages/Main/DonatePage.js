import React, { useState , useEffect } from 'react';
import { useDispatch ,useSelector  } from 'react-redux';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DonateDetail from './DonateDetail';
import DonateSendDetail from './DonateSendDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function DonatePage() {
    const [amount, setAmount] = useState('');
    const [donorName, setDonorName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);


        // 로그인 상태 확인
        useEffect(() => {             
                    if (!isAuthenticated) {
                        navigate('/loginPage'); // 로그인 안 되어있으면 로그인 페이지로 리다이렉션
                        alert("로그인 필요합니다.")
                    }             
        }, [isAuthenticated, navigate]);


    // 기부 금액 수정 시 처리
    const handleEdit = () => {
        setIsSubmitted(false); // 수정 화면으로 돌아감     
    };
    

    // 기부 결정 시 처리
    const handleConfirm = () => {
        alert("기부가 최종적으로 완료되었습니다!");
        // 여기에서 최종 기부 결정을 처리하는 로직 추가 (예: 서버에 데이터 전송)
    };


    // 기부 폼 제출 시 처리
    const handleSubmit = ({donorName, amount, message}) => {
        setDonorName(donorName);
        setAmount(amount);
        setMessage(message);
        setIsSubmitted(true);
    };

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">기부하기</h2>

            {!isSubmitted ? 
            <DonateDetail            
            donorName={donorName}
            amount={amount}
            message={message}
            setDonorName={setDonorName}
            setAmount={setAmount}
            setMessage={setMessage}
            onSubmit={handleSubmit} />   
            : 
            <DonateSendDetail            
            donorName={donorName}
            amount={amount}
            message={message}
            onEdit={handleEdit}
            onConfirm={handleConfirm}
            />}
        </Container>
    );
}

export default DonatePage;
