import React, { useState, useRef, useEffect } from "react";
import { useDispatch ,useSelector  } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import "../../main/_static/css/main.css";
import ApiCall from '../Common/ApiCall';

function FloatingChatArea({ handleCloseChat }) {
    const navigate = useNavigate();
    const [addMsg, setAddMsg] = useState([]); // 메시지 리스트
    const [isSocketOpen, setIsSocketOpen] = useState(false); // 소켓 연결 상태
    const [inputMsg, setInputMsg] = useState(""); // 입력 메시지
    const chatRef = useRef(null); // 채팅창 참조
    const dragOffset = useRef({ x: 0, y: 0 }); // 드래그 시작 위치
    const socketRef = useRef(null); // WebSocket 참조
    const msgAreaRef = useRef(null); // 메시지 영역 참조
    const [nickname, setNickname] = useState(null); // 닉네임 상태
    const [nicknameInput, setNicknameInput] = useState(""); // 닉네임 입력 필드 상태
    const [isNicknameSet, setIsNicknameSet] = useState(false);
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

    const handleNicknameSave = () => {
        ApiCall({
            url: '/api/setNickName',
            method: 'POST',
            payload : {
                nickName : nicknameInput,
            },
             onSuccess: (response) => {
                if(response.success){
                    console.log("반환 값==="+JSON.stringify(response.result.nickname))
                    setNicknameInput(response.result.nickname); // 입력 필드 초기화
                    setNickname(response.result.nickname)
                    setIsNicknameSet(true);
                }else{
                    alert("설정 실패=="+response.message);
                }             
            },
            onError: (error) => {
                // API 호출 실패 시 처리
                console.error("API 호출 실패:", error);
                alert("닉네임 설정에 실패했습니다. 다시 시도해주세요.");
            }        
        });
    };

/*
    useEffect(() => {
        nickCheck();        
    }, []);

*/
    useEffect(() => {        
        if (user !== "비회원") {
            nickCheck(); 
        }
    }, [user]);


    const sendMsg = () => {
        const msg = { user: nickname , msg: inputMsg };
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

    // 닉네임 가져오기기
    const nickCheck = () => {
        ApiCall({
            url: '/api/nickCheck',
            method: 'POST',
            payload : {                
            },
             onSuccess: (response) => {
                if(response.success){
                    if(response.result!=null){
                    setNicknameInput(response.result.nickname); // 입력 필드 초기화
                    setNickname(response.result.nickname)
                    console.log("반환 값==="+JSON.stringify(response.result.nickname))
                    }else{
                    setNicknameInput('비회원'); // 입력 필드 초기화
                    setNickname('비회원')
    
                    }  
                }else{
                    alert("조회 실패=="+response.message);
                }             
            },
            onError: (error) => {
                // API 호출 실패 시 처리
                console.error("API 호출 실패:", error);
                alert("닉네임 체크에 실패했습니다. 다시 시도해주세요.");
            }        
        });
    
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
                                message.user === nickname ? "my-message" : "other-message"
                            }`}
                        >
                            <span className="chat-user">{message.user}</span>
                            <div className="chat-text">{message.msg}</div>
                        </div>
                    ))}
                </div>
                <div className="input-area">
                {(user == null || user == '비회원'  ) ? (
                        <div className="auth-prompt">
                            <button  className="login-button" onClick={() => navigate("/LoginPage")}>
                               채팅 로그인 하러 가기
                            </button>
                        </div>
                    ) : (nickname==null) ? (
                        <div className="auth-prompt">
                        <input
                            type="text"
                            value={nicknameInput}
                            onChange={(e) => setNicknameInput(e.target.value)}
                            placeholder="닉네임을 입력하세요"
                            className="nickname-input"
                        />
                        <button onClick={handleNicknameSave} className="save-button">
                            설정
                        </button>
                    </div>
                    ) : (
                        <>
                            <input
                                type="text"
                                value={inputMsg}
                                onChange={(e) => setInputMsg(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="메시지를 입력하세요"
                                className="message-input"
                            />
                            <button onClick={sendMsg} className="send-button">
                                메세지 전송
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );    
}

export default FloatingChatArea;
