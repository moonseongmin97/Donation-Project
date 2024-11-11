import React, { useState , useEffect } from 'react';
import { useDispatch ,useSelector  } from 'react-redux';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
        
         
              
        }, []);

    // 계좌 정보 (가상의 계좌 정보)
    const bankInfo = {
        bankName: '우리은행',
        accountNumber: '1002-123-456789',
        accountHolder: '기부단체 이름',
    };

    // 기부 폼 제출 시 처리
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">기부하기</h2>

            {!isSubmitted ? (
                <Card className="p-4 shadow-sm">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>기부자 이름</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="이름을 입력하세요"
                                value={donorName}
                                onChange={(e) => setDonorName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>기부 금액</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="기부할 금액을 입력하세요 (원)"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>응원 메시지 (선택)</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="기부에 대한 메시지를 남겨보세요"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            기부하기
                        </Button>
                    </Form>
                </Card>
            ) : (
                <Card className="p-4 shadow-sm text-center">
                    <h4 className="mb-3">계좌 이체 정보</h4>
                    <p>아래의 계좌로 기부 금액을 이체해 주세요.</p>
                    <p><strong>은행명:</strong> {bankInfo.bankName}</p>
                    <p><strong>계좌 번호:</strong> {bankInfo.accountNumber}</p>
                    <p><strong>예금주:</strong> {bankInfo.accountHolder}</p>

                    <Button
                        variant="success"
                        className="mt-4"
                        onClick={() => setIsSubmitted(false)}
                    >
                        기부 금액 변경하기
                    </Button>
                </Card>
            )}
        </Container>
    );
}

export default DonatePage;
