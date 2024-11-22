import React, { useState, useRef } from 'react';
import '../../main/_static/css/main.css';
import FloatingChatArea from './FloatingChatArea';

function FloatingChatButton() {
    const [position, setPosition] = useState(() => {
        const savedPosition = localStorage.getItem('chatButtonPosition');
        return savedPosition ? JSON.parse(savedPosition) : { top: 50, left: 10 };
    });

    const [isChatOpen, setIsChatOpen] = useState(false); // 채팅창 상태 관리
    const buttonRef = useRef(null);
    const isDragging = useRef(false); // 드래그 여부 판단
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = false; // 드래그 초기화
        const rect = buttonRef.current.getBoundingClientRect();
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        isDragging.current = true; // 이동 중이면 드래그 상태로 설정
        const newPosition = {
            top: e.clientY - offset.current.y,
            left: e.clientX - offset.current.x,
        };
        setPosition(newPosition);
        localStorage.setItem('chatButtonPosition', JSON.stringify(newPosition));
    };

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);

        // 드래그 상태가 아닌 경우에만 채팅창 열기/닫기
        if (!isDragging.current) {
            setIsChatOpen(!isChatOpen);
        }
    };

    const handleCloseChat = () => {
        setIsChatOpen(false);
    };

    return (
        <div>
            {/* 드래그 가능한 원형 버튼 */}
            <div
                ref={buttonRef}
                className="floating-button"
                style={{ top: `${position.top}px`, left: `${position.left}px` }}
                onMouseDown={handleMouseDown}
                onClick={(e) => e.preventDefault()} // 클릭 이벤트 무시
            >
                💬
            </div>

            {/* 채팅창 모달 */}
            {isChatOpen && (
                <FloatingChatArea handleCloseChat={handleCloseChat} />
            )}
        </div>
    );
}

export default FloatingChatButton;
