import React, { useEffect } from 'react';

function KakaoLogin() {
  useEffect(() => {
    // Kakao SDK 초기화
    if (!window.Kakao) {
      console.error('Kakao SDK가 로드되지 않았습니다. public/index.html에 스크립트를 추가하세요.');
      return;
    }
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init('159481a41647f26c678ff4e6ebe2acd8'); // 카카오 JavaScript 키
      console.log('Kakao SDK initialized:', window.Kakao.isInitialized());
    }
  }, []);

  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      alert('Kakao SDK가 로드되지 않았습니다.');
      return;
    }

    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/home', // 리다이렉트 URI
    });
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleKakaoLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#FEE500',
          color: '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        카카오로 로그인
      </button>
    </div>
  );
}

export default KakaoLogin;
