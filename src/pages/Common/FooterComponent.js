// components/FooterComponent.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function FooterComponent() {
    return (
        <footer className="bg-dark py-4 mt-auto">
            <Container>
                <Row className="align-items-center justify-content-between flex-column flex-sm-row">
                    <Col className="col-auto">
                        <div className="small m-0 text-white">Copyright &copy; Your Website 2023</div>
                    </Col>
                    <Col className="col-auto">
                        <Nav className="justify-content-end">
                            <Nav.Link href="#!" className="link-light small">개인정보 처리방침</Nav.Link>
                            <Nav.Link href="#!" className="link-light small">이용 약관</Nav.Link>
                            <Nav.Link href="#!" className="link-light small">연락처</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent;
