import React, { useEffect } from "react";

const NaverLoginButton = ({ clientId, callbackUrl, onSuccess, onFailure }) => {
  useEffect(() => {
    // 네이버 로그인 초기화
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: clientId, // 네이버 개발자 센터에서 발급받은 클라이언트 ID
      callbackUrl: callbackUrl, // 리다이렉트 URL (ex: "http://localhost:3000/naver-callback")
      isPopup: false, // 팝업창으로 로그인을 처리할지 여부
      loginButton: { color: "green", type: 3, height: "50" }, // 버튼 스타일
    });

    naverLogin.init();

    // 로그인 성공 여부 확인
    if (window.location.href.includes("access_token")) {
      naverLogin.getLoginStatus((status) => {
        if (status) {
          // 로그인 성공 시 사용자 정보 가져오기
          const userInfo = {
            id: naverLogin.user.getId(),
            email: naverLogin.user.getEmail(),
            name: naverLogin.user.getName(),
            profileImage: naverLogin.user.getProfileImage(),
          };
          onSuccess(userInfo); // 성공 콜백 실행
        } else {
          onFailure("로그인 상태를 확인할 수 없습니다."); // 실패 콜백 실행
        }
      });
    }
  }, [clientId, callbackUrl, onSuccess, onFailure]);

  return (
    <div>
      <div id="naverIdLogin" />
    </div>
  );
};

export default NaverLoginButton;
