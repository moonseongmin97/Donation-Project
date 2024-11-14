import React, { useState , useEffect } from 'react';
import { useDispatch ,useSelector  } from 'react-redux';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function DonateDetail({ donorName, amount, message, setDonorName, setAmount, setMessage, onSubmit }) {  
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);


    // 기부 폼 제출 시 처리
    const handleSubmit = (event) => {
        event.preventDefault();
            onSubmit({
                donorName,
                amount,
                message
            });       
    };

    return (
        <Container className="py-5">
            {
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
                            다음
                        </Button>
                    </Form>
                </Card>
           }
        </Container>
    );
}

export default DonateDetail;
