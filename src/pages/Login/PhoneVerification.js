import React, { useState } from "react";

function PhoneVerification() {
  const [clientId, setClientId] = useState(""); // 클라이언트 ID 상태
  const [clientSecret, setClientSecret] = useState(""); // 시크릿 키 상태
  const [verificationUrl, setVerificationUrl] = useState("");
  const [status, setStatus] = useState("");

  // 본인인증 요청 함수
  const handleRequestVerification = async () => {
    try {
      const response = await fetch("/api/phone-verification/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: clientId.trim(),
          clientSecret: clientSecret.trim(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setVerificationUrl(data.verificationUrl); // Mock API에서 반환한 URL
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
      <h1>휴대폰 본인인증 (Mock API)</h1>

      {/* 클라이언트 ID 입력 */}
      <div>
        <label>클라이언트 ID:</label>
        <input
          type="text"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          placeholder="Enter Client ID"
          style={{ marginLeft: "10px", padding: "5px", width: "300px" }}
        />
      </div>

      {/* 클라이언트 시크릿 입력 */}
      <div style={{ marginTop: "10px" }}>
        <label>시크릿 키:</label>
        <input
          type="text"
          value={clientSecret}
          onChange={(e) => setClientSecret(e.target.value)}
          placeholder="Enter Client Secret"
          style={{ marginLeft: "10px", padding: "5px", width: "300px" }}
        />
      </div>

      {/* 인증 요청 버튼 */}
      <button
        onClick={handleRequestVerification}
        style={{
          marginTop: "20px",
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

      {/* 인증 URL 출력 */}
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

      {/* 상태 메시지 출력 */}
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
