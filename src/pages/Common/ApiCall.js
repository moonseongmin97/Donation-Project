// src/components/Common/apiCall.js
import axios from 'axios';

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
                        console.log(response.data);                 
        //if (onSuccess) onSuccess(response.data); // 성공 콜백  
        return { data: response.data, error: null };
    } catch (err) {
        if (onError) onError(err); // 에러 콜백
        return { data: null, error: err };
    }
}

export default apiCall;
