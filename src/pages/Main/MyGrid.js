import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyGrid = () => {
    const [rowData, setRowData] = useState([]);

    // 서버에서 데이터 가져오는 함수
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/members');
            setRowData(response.data);
        } catch (error) {
            console.error("데이터를 가져오는 중 오류 발생:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-md-8">
                <h2 className="text-center mb-4">Member List</h2>

                <ul className="list-group shadow-sm">
                    {rowData.map((item, index) => (
                        <li key={index} className="list-group-item mb-3" style={{ padding: '1.5rem' }}>
                            <h5>{item.username}</h5>
                            <p className="mb-1"><strong>Email:</strong> {item.email}</p>
                            <p className="mb-0"><strong>Created At:</strong> {new Date(item.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default null;
