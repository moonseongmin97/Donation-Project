import React, { useState, useRef, useEffect } from 'react';
import '../../main/_static/css/main.css';

function FloatingChatArea({ handleCloseChat }) {
    const [addMsg, setAddMsg] = useState([]); // 메시지 리스트
    const [isSocketOpen, setIsSocketOpen] = useState(false); // 소켓 연결 상태
    const socketRef = useRef(null); // WebSocket 참조

    useEffect(() => {
        const address = "ws://localhost:8082/chat?roomId=123";

        // WebSocket 연결
        socketRef.current = new WebSocket(address);

        socketRef.current.onopen = (event) => {
            console.log("WebSocket 연결 성공", event);
            setIsSocketOpen(true);
        };

        socketRef.current.onmessage = (event) => {
            console.log("서버로부터 수신된 데이터:", event.data); // 수신 데이터 확인
            try {
                const data = JSON.parse(event.data);
                console.log("파싱된 데이터:", data);
        
                // 데이터가 배열인지 확인
                if (Array.isArray(data)) {
                    setAddMsg(data); // 초기 데이터 설정
                }
            } catch (error) {
                console.error("JSON 파싱 오류:", error);
            }
        };
        

        socketRef.current.onerror = (error) => {
            console.error("WebSocket 오류:", error);
        };

        socketRef.current.onclose = () => {
            console.log("WebSocket 연결 종료");
            setIsSocketOpen(false);
        };

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, []);

    const sendMsg = () => {
        const msg22 = { "user": "문성민22", "msg": "테스트22" };

        if (socketRef.current && isSocketOpen) {
            // WebSocket을 통해 메시지 전송
            socketRef.current.send(JSON.stringify(msg22));

            // 전송한 메시지를 UI에 반영
            setAddMsg((prevMessages) => [...prevMessages, msg22]);
        } else {
            console.error("WebSocket이 연결되지 않았습니다.");
        }
    };

    return (
        <div className="chat-modal">
            <div className="modal-content">
                <div className="msg-area">
                    {addMsg.map((message, index) => (
                        <div key={index} className="chat-message">
                            <strong>{message.user}</strong>: {message.msg} 
                        </div>
                    ))}
                </div>
                <button onClick={sendMsg}>메세지 전송</button>
                <button onClick={handleCloseChat}>닫기</button>
            </div>
        </div>
    );
}

export default FloatingChatArea;
