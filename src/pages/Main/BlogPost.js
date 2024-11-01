import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarComponent from '../Common/NavbarComponent';
import FooterComponent from '../Common/FooterComponent';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogPost() {
    const [members, setMembers] = useState([]); // 멤버 데이터를 저장할 상태
    const [hello, setHello] = useState('변경 전');
    const navigate = useNavigate();

    // 페이지 로드 시 members 데이터 가져오기
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('/api/members');
                setMembers(response.data); // members 데이터 상태 업데이트
            } catch (error) {
                console.log("데이터를 가져오는 중 오류 발생:", error);
            }
        };
        fetchMembers();
    }, []); // 빈 배열을 사용해 페이지 로드 시 한 번만 실행

    // 로그인 버튼을 눌렀을 때 hello 데이터 업데이트
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('/api/members');
            setHello(JSON.stringify(response.data)); // hello 데이터 상태 업데이트
        } catch (error) {
            console.log("데이터를 가져오는 중 오류 발생:", error);
        }
    };

    return (
        <div className="d-flex flex-column">          
            <main className="flex-shrink-0">
                {/* Navigation */}
                {/* {/* <NavbarComponent/>   */} 

                {/* Page Content */}
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="row gx-5">
                            <div className="col-lg-3">
                                {/* Sidebar or additional content */}
                            </div>
                            <div className="col-lg-9">
                                {/* Post content */}
                                <article>
                                    <header className="mb-4">
                                        <Button variant="dark" onClick={handleLogin}>로그인</Button>
                                        <h1 className="fw-bolder mb-1">{hello}</h1>
                                    </header>

                                    {/* List Group을 사용하여 중앙에 리스트 배치 */}
                                    <div className="container d-flex justify-content-center">
                                        <div className="col-md-8">
                                            <h2 className="text-center mb-4">Member List</h2>
                                            
                                            <ul className="list-group shadow-sm">
                                                {members.map((member, index) => (
                                                    <li key={index} className="list-group-item mb-3" style={{ padding: '1.5rem' }}>
                                                        <h5>{member.username}</h5>
                                                        <p className="mb-1"><strong>Email:</strong> {member.email}</p>
                                                        <p className="mb-0"><strong>Created At:</strong> {new Date(member.createdAt).toLocaleString()}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* 나머지 콘텐츠 */}
                                    <section className="mb-5">
                                        <p className="fs-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </section>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                {/* footer  컴포넌트 영역  */}
                {/* <FooterComponent/> */}
            </main>
        </div>
    );
}

export default BlogPost;
