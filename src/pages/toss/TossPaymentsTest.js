// TossPaymentsTest.js
/* global TossPayments */
import React from "react";
import "../../main/_static/css/TossPaymentsTest.css";
import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";

const TossPaymentsTest = () => {
  const handlePayment = () => {
    const tossPayments = TossPayments("test_ck_ex6BJGQOVDWyvngBOJkO3W4w2zNb"); // Replace with your test client key

    tossPayments
      .requestPayment("카드", {
        amount: 1000, // 테스트 결제 금액
        orderId: "ORDER-12345", // 고유 주문 번호
        orderName: "기부금 테스트 결제",
        successUrl: "http://localhost:3000/Signup", // 성공 리디렉션 URL
        failUrl: "http://localhost:3000/fail", // 실패 리디렉션 URL
      })
      .catch((error) => {
        if (error.code === "USER_CANCEL") {
          console.error("사용자가 결제를 취소했습니다.");
        } else {
          console.error("결제 요청 실패:", error.message);
        }
      });
  };

  return (
    <div className="payment-container">
      <button onClick={handlePayment} className="payment-button">
        결제하기
      </button>
    </div>
  );
};

export default TossPaymentsTest;
