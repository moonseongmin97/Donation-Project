// YouTubeProfileCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import hini from  '../../main/_static/img/hani.jpg';
function YouTubeProfileCard() {
    const [channelInfo, setChannelInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const DEFAULT_IMAGE_URL = hini; 
    // YouTube API 설정
    const API_KEY = ''; // API 키를 여기에 넣으세요.
    const CHANNEL_ID = 'null'//  'http://localhost:3000/src/main/_static/img/hini.jpg'; // Google Developers 채널 ID

    useEffect(() => {
        const fetchChannelInfo = async () => {
            if (!API_KEY) {
                setLoading(false);
                setError("API 키가 없습니다.");
                setChannelInfo({
                    title: "Default Channel",
                    description: "YouTube API 키를 설정하여 채널 정보를 확인하세요.",
                    profileImage: DEFAULT_IMAGE_URL , // 기본 이미지 URL
                    subscriberCount: 0,
                });
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
                    params: {
                        part: 'snippet,statistics',
                        id: CHANNEL_ID,
                        key: API_KEY,
                    },
                });

                const data = response.data.items[0];
                if (!data) {
                    throw new Error("API 응답에 채널 정보가 없습니다.");
                }

                setChannelInfo({
                    title: data.snippet.title,
                    description: data.snippet.description,
                    profileImage: data.snippet.thumbnails.default.url,
                    subscriberCount: data.statistics.subscriberCount,
                });
            } catch (error) {
                console.error("YouTube API 요청 중 오류 발생:", error);
                setError("채널 정보를 불러오는 중 오류가 발생했습니다.");
                setChannelInfo({
                    title: "Error Channel",
                    description: "API 요청 오류로 인해 채널 정보를 표시할 수 없습니다.",
                    profileImage: "https://via.placeholder.com/150x100", // 오류 시 표시할 기본 이미지
                    subscriberCount: 0,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchChannelInfo();
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner animation="border" className="me-4" />
            ) : (
                channelInfo && (
                    <Card className="shadow-sm p-3 bg-white rounded" style={{ maxWidth: '500px' }}>
                        <Row className="align-items-center">
                            <Col xs={4} className="text-center">
                                <Card.Img
                                    src={channelInfo.profileImage}
                                    alt="Channel Profile"
                                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                                />
                            </Col>
                            <Col xs={8}>
                                <Card.Body className="p-2">
                                    <Card.Title className="mb-2">{channelInfo.title}</Card.Title>
                                    <Card.Text className="text-muted mb-1">
                                        {channelInfo.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>구독자 수:</strong> {parseInt(channelInfo.subscriberCount).toLocaleString()}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                        {error && <p className="text-danger mt-2">{error}</p>}
                    </Card>
                )
            )}
        </div>
    );
}

export default YouTubeProfileCard;
