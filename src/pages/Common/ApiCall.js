// src/components/Common/apiCall.js
import axios from 'axios';
import { login, logout } from './userSlice';
import store from './Store'
import { json } from 'react-router-dom';


async function apiCall({ url, method , payload , onSuccess, onError }) {    
    try {
        console.log("Fetching data from:", url);
        const response = await axios({ 
                                       url, 
                                       method ,  
                                       headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json'
                                    },                              
                                    withCredentials: true, // 쿠키를 자동으로 전송하도록 설정 (다른도메인 보안 위험성 확인 필요)
                                       ...(method === 'get' ? {} : { data: payload }) 
                                    });                                               
        if (onSuccess) onSuccess(response.data); // 성공 콜백  
        return { data: response.data, error: null };
    } catch (err) {
        console.log("세션 만료...")  ;
        if (err.response && err.response.status === 401) {
            //리덕스에 로그인 상태값  false 주고
            // 페이지 로그인페이지로 변경 
                             
            store.dispatch(logout(null)); // login 액션을 디스패치합니다.
            //window.location.href = '/loginPage';        이거 잘써야겠네 무한 루프도네..


            return { data: null, error: err };
        }
        if (onError) onError(err); // 에러 콜백
        return { data: null, error: err };
    }
}

export default apiCall;
