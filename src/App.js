
import React, { useEffect } from 'react';
import Store from './pages/Common/Store'; // store를 불러옵니다.
import { Provider } from 'react-redux';
import LogIn from "./pages/Login/Login";
import Join from "./pages/Login/Join";
import Signup from "./pages/Login/Signup";
import LoginPage from "./pages/Login/LoginPage";


import Welcome from "./pages/Main/Home";
import Home from "./pages/Main/Home";
import About from "./pages/Main/About";
import BlogHome from "./pages/Main/BlogHome";
// import 구문에서 대소문자가 정확히 맞는지 확인
import DonateList from './pages/Donate/DonateList';

import DisplayVod from "./pages/Main/DisplayVod";
import Donate from "./pages/Donate/DonatePage";


import Contact from "./SamplePage/Contact";
import Faq from "./SamplePage/Faq";
import PortfolioItem from "./SamplePage/PortfolioItem";
import PortfolioOverview from "./SamplePage/PortfolioOverview";
import Pricing from "./SamplePage/Pricing";

import ShortsContainer from "./pages/Main/ShortsContainer";
import NavbarComponent from './pages/Common/NavbarComponent';
import FooterComponent from './pages/Common/FooterComponent';

import FloatingChatButton from "./pages/chat/FloatingChatButton";

import Test from "./SamplePage/react-page";
import CampaignList from "./CampaignList";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {





    return (



      <BrowserRouter>
        {/* 공통 네비게이터  */}
        <NavbarComponent/>          
        {/* 공통 버튼 */}
        <FloatingChatButton /> 
        
        <Routes>
          {/* 웰컴 페이지 */}
          <Route path="*" element={<Welcome/>} />  {/* 경로가 없을 때 웰컴 페이지 */}


          {/* 로그인 관련 */}          
          {/* <LogIn /> */}
          <Route path="/logIn" element={<LogIn />} />                   
          <Route path="/join" element={<Join />} />  
          <Route path="/LoginPage" element={<LoginPage />} />  
          <Route path="/Signup" element={<Signup />} />     {/* 회원가입*/}  
          {/* 전시 화면 관련 */}  
          {/* < /> */}
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          {/* </CampaignList /> */}
          <Route path="/CampaignList" element={<CampaignList />} />
          <Route path="/About" element={<About />} />  
          <Route path="/BlogHome" element={<BlogHome />} />  
          <Route path="/DonateList" element={<DonateList />} />    {/* 기부자 목록 */}  
          <Route path="/DisplayVod" element={<DisplayVod />} />    {/* 이건 유튜브나 올릴거 */}  
          <Route path="/Pricing" element={<Pricing />} />     {/* 이건 나중에 후원버튼으로 쓰면 될듯 */}  
          <Route path="/Donate" element={<Donate />} />     {/* 기부페이지 */}  



          <Route path="/Contact" element={<Contact />} />  {/* 로그인 창 흡사 */}  
          <Route path="/Faq" element={<Faq />} /> {/* 설명, 질문 창 */}  
          <Route path="/PortfolioItem" element={<PortfolioItem />} />   {/* 사진 창 */} 
          <Route path="/PortfolioOverview" element={<PortfolioOverview />} />    {/* 이건 유튜브나 올릴거 */}  
          <Route path="/ShortsContainer" element={<ShortsContainer />} />     {/* 이건 나중에 후원버튼으로 쓰면 될듯 */}  


    


          {/* <TestUrl /> */}
          <Route path="/Test" element={<Test />} /> 
        
        </Routes>
        {/* 공통 푸터 footer  */}
        <FooterComponent/> 
      </BrowserRouter> 

    );
  }
  
  export default App;