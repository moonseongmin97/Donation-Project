import React, { useState } from "react";

function PhoneVerification() {
  const [verificationUrl, setVerificationUrl] = useState("");
  const [status, setStatus] = useState("");

  // 본인인증 요청 함수
  const handleRequestVerification = async () => {
    try {
      const response = await fetch("/api/phone-verification/request", {
        method: "POST", // POST 요청으로 백엔드에 전달
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: "YOUR_CLIENT_ID_HERE", // 하드코딩된 클라이언트 ID
          clientSecret: "YOUR_CLIENT_SECRET_HERE", // 하드코딩된 시크릿
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setVerificationUrl(data.verificationUrl); // 백엔드에서 받은 인증 URL 설정
        setStatus("인증 요청 성공");
      } else {
        setStatus("인증 요청 실패");
      }
    } catch (error) {
      console.error("본인인증 요청 에러:", error);
      setStatus("인증 요청 중 문제가 발생했습니다.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>휴대폰 본인인증</h1>
      <button
        onClick={handleRequestVerification}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        본인인증 요청
      </button>

      {verificationUrl && (
        <div style={{ marginTop: "20px" }}>
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            인증 페이지로 이동
          </a>
        </div>
      )}

      {status && (
        <p
          style={{
            marginTop: "20px",
            color: status.includes("성공") ? "green" : "red",
          }}
        >
          {status}
        </p>
      )}
    </div>
  );
}

export default PhoneVerification;
