import React, { useEffect } from 'react';
import kakao from  '../../main/_static/img/kakao_login_medium.png';



function KakaoLogin() {
  const kakaoImg = kakao;
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
      redirectUri: 'http://localhost:3000/KakaoRedirect', // 리다이렉트 URI
    });
  };

  return (
    <div className="text-center mt-4">
      <img
        src={kakaoImg}
        alt="카카오 로그인 버튼"
        style={{
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out', // 부드러운 전환 효과
          borderRadius: '10px', // 모서리를 둥글게
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // 기본 그림자
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-5px)'; // 위로 살짝 올라감
          e.target.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)'; // 그림자 강조
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)'; // 원래 위치로 돌아옴
          e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // 그림자 원래대로
        }}
        onClick={handleKakaoLogin}
      />

    </div>
  );
}

export default KakaoLogin;
