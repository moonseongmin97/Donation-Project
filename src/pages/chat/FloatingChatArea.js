import React, { useState, useRef, useEffect } from "react";
import { useDispatch ,useSelector  } from 'react-redux';
import "../../main/_static/css/main.css";

function FloatingChatArea({ handleCloseChat }) {
    const [addMsg, setAddMsg] = useState([]); // 메시지 리스트
    const [isSocketOpen, setIsSocketOpen] = useState(false); // 소켓 연결 상태
    const [inputMsg, setInputMsg] = useState(""); // 입력 메시지
    const chatRef = useRef(null); // 채팅창 참조
    const dragOffset = useRef({ x: 0, y: 0 }); // 드래그 시작 위치
    const socketRef = useRef(null); // WebSocket 참조
    const msgAreaRef = useRef(null); // 메시지 영역 참조
    const user = useSelector((state) => state.user.user) || "비회원";


    useEffect(() => {
        const address = "ws://localhost:8082/chat?roomId=123";
        socketRef.current = new WebSocket(address, [], { withCredentials: true });
        
        socketRef.current.onopen = () => {
            setIsSocketOpen(true);        
        };
        socketRef.current.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                if (Array.isArray(data)) {  //채팅창 새로 열때 (기존 메세지 통으로 가져옴)
                    setAddMsg(data);
                }else{                                                        //채팅창 열려있을때
                    setAddMsg((prevMessages) => [...prevMessages, data]);
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


        document.addEventListener("keydown", handleEscKey);
        return () => {
            if (socketRef.current) socketRef.current.close();
            document.removeEventListener("keydown", handleEscKey);
        };
    }, []);

    const handleEscKey = (e) => {
        if (e.key === "Escape") {
            handleCloseChat();
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [addMsg]);


    const scrollToBottom = () => {
        if (msgAreaRef.current) {
            msgAreaRef.current.scrollTop = msgAreaRef.current.scrollHeight;
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // 기본 Enter 키 동작 방지
            if (inputMsg.trim()) sendMsg();
        }
    };

    const sendMsg = () => {
        const msg = { user: user , msg: inputMsg };
        if (socketRef.current && isSocketOpen) {
            socketRef.current.send(JSON.stringify(msg));
            //메세지 동기화는 onmessage event에서 한다.
            setInputMsg("");
        } else {
            console.error("WebSocket이 연결되지 않았습니다.");
        }
    };

    // 드래그 시작
    const handleDragStart = (e) => {
        dragOffset.current = {
            x: e.clientX - chatRef.current.offsetLeft,
            y: e.clientY - chatRef.current.offsetTop,
        };
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", handleDragEnd);
    };

    // 드래그 이동
    const handleDrag = (e) => {
        const chatModal = chatRef.current;
        chatModal.style.left = `${e.clientX - dragOffset.current.x}px`;
        chatModal.style.top = `${e.clientY - dragOffset.current.y}px`;
    };

    // 드래그 종료
    const handleDragEnd = () => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", handleDragEnd);
    };

    return (
        <div
            className="chat-modal"
            ref={chatRef}
            onMouseDown={handleDragStart} // 드래그 시작 이벤트
        >
            <div className="modal-content">
                {/* 오른쪽 상단 닫기 버튼 */}
                <button className="close-button-top" onClick={handleCloseChat}>
                    ✕
                </button>
                <div className="msg-area" ref={msgAreaRef}>
                    {addMsg.map((message, index) => (
                        <div
                            key={index}
                            className={`chat-message ${
                                message.user === user ? "my-message" : "other-message"
                            }`}
                        >
                            <span className="chat-user">{message.user}</span>
                            <div className="chat-text">{message.msg}</div>
                        </div>
                    ))}
                </div>
                <div className="input-area">
                    <input
                        type="text"
                        value={inputMsg}
                        onChange={(e) => setInputMsg(e.target.value)}
                        onKeyDown={handleKeyPress} // Enter 키 이벤트 추가
                        placeholder="메시지를 입력하세요"
                        className="message-input"
                    />
                    <button onClick={sendMsg} className="send-button">
                        메세지 전송
                    </button>
                </div>
            </div>
        </div>
    );    
}

export default FloatingChatArea;
