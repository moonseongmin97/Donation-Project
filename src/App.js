
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
import BlogPost from "./pages/Main/BlogPost";
import PortfolioOverview2 from "./pages/Main/PortfolioOverview";


import Contact from "./SamplePage/Contact";
import Faq from "./SamplePage/Faq";
import PortfolioItem from "./SamplePage/PortfolioItem";
import PortfolioOverview from "./SamplePage/PortfolioOverview";
import Pricing from "./SamplePage/Pricing";

import ShortsContainer from "./pages/Main/ShortsContainer";
import NavbarComponent from './pages/Common/NavbarComponent';
import FooterComponent from './pages/Common/FooterComponent';

import Test from "./SamplePage/react-page";
import CampaignList from "./CampaignList";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {

  useEffect(() => {
    // 로컬 스토리지에서 세션 정보 불러오기
    const token = localStorage.getItem('authToken');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (token && userInfo) {
        // 로그인 상태 설정 (Redux나 Context를 통해 상태 전파 가능)
        console.log("로그인된 사용자:", userInfo);
        // setUser(userInfo);  // Redux나 Context에 사용자 정보 저장
    } else {
        console.log("로그인 세션이 없습니다.");
        // 로그아웃 상태로 설정
        // clearUser();  // 상태 초기화
    }
}, []);




    return (

      
<Provider store={Store}>


      <BrowserRouter>
        {/* 공통 네비게이터  */}
        <NavbarComponent/>  

        <Routes>
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
          <Route path="/BlogPost" element={<BlogPost />} />  
          <Route path="/PortfolioOverview2" element={<PortfolioOverview2 />} />    {/* 이건 유튜브나 올릴거 */}  
          <Route path="/Pricing" element={<Pricing />} />     {/* 이건 나중에 후원버튼으로 쓰면 될듯 */}  



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


      </Provider>
    );
  }
  
  export default App;