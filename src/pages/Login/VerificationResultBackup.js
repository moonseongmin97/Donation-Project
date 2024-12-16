import { useEffect } from "react";

function VerificationResult() {
  useEffect(() => {
    // NICE 인증 결과를 처리
    const queryParams = new URLSearchParams(window.location.search);
    const resultCode = queryParams.get("resultCode");
    const message = queryParams.get("message");

    if (resultCode === "success") {
      alert("본인인증 성공: " + message);
    } else {
      alert("본인인증 실패: " + message);
    }
  }, []);

  return (
    <div>
      <h1>인증 결과</h1>
    </div>
  );
}

export default VerificationResult;
