// src/components/Common/apiCall.js
import axios from 'axios';

async function apiCall({ url, method , onSuccess, onError }) {
    try {
        console.log("Fetching data from:", url);
        const response = await axios({ url, method });       
        if (onSuccess) onSuccess(response.data); // 성공 콜백
        return { data: response.data, error: null };
    } catch (err) {
        if (onError) onError(err); // 에러 콜백
        return { data: null, error: err };
    }
}

export default apiCall;
