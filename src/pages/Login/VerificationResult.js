import { useEffect, useState } from "react";

function VerificationResult() {
  const [result, setResult] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    // Mock API에서 결과 요청
    fetch(`/api/phone-verification/result?token=${token}`)
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>본인인증 결과</h1>
      <p>결과 코드: {result.resultCode}</p>
      <p>메시지: {result.message}</p>
    </div>
  );
}

export default VerificationResult;
