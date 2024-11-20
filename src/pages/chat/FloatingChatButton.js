import React, { useState, useRef  } from 'react';
import '../../main/_static/css/main.css';

function FloatingChatButton() {
    const [position, setPosition] = useState(() => {
        const savedPosition = localStorage.getItem('chatButtonPosition');
        return savedPosition ? JSON.parse(savedPosition) : { top: 50, left: 10 };
    });

    const [isChatOpen, setIsChatOpen] = useState(false); // 채팅창 상태 관리
    const buttonRef = useRef(null);
    const isDragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
        const rect = buttonRef.current.getBoundingClientRect();
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (isDragging.current) {
            const newPosition = {
                top: e.clientY - offset.current.y,
                left: e.clientX - offset.current.x,
            };
            setPosition(newPosition);
            localStorage.setItem('chatButtonPosition', JSON.stringify(newPosition));
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleClick = () => {
        if (!isDragging.current) {
            setIsChatOpen(!isChatOpen); // 드래그 중이 아닐 때만 채팅창 열기/닫기
        }
    };

    return (
        <div>
            {/* 드래그 가능한 원형 버튼 */}
            <div
                ref={buttonRef}
                className="floating-button"
                style={{ top: `${position.top}px`, left: `${position.left}px` }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={handleClick} // 클릭 이벤트 추가
            >
                💬
            </div>

            {/* 채팅창 모달 */}
            {isChatOpen && (
                <div className="chat-modal">
                    <div className="modal-content">
                        <p>여기에 채팅창 컴포넌트를 추가하세요!</p>
                        <button onClick={() => setIsChatOpen(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FloatingChatButton;
