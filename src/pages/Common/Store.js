import { configureStore } from '@reduxjs/toolkit';
import userReducer, { login, logout } from './userSlice';
import ApiCall from '../Common/ApiCall';
import { useDispatch ,useSelector  } from 'react-redux';
import { Alert } from 'react-bootstrap';


const store = configureStore({
    reducer: {
        user: userReducer,
        // 다른 리듀서를 추가할 수 있습니다
    },
});

const handleSuccess = (data) => {
    console.log("성공~~");
    if (data.success) {
        if(data.result.loginYn){
            store.dispatch(login(data.result.username)); // 추후 널 대신에 사용할 거 추가 ex 사용장 이름? 등등 리턴 받자
        }else{
            console.log("message==" +data.message);
            store.dispatch(logout(null)); // 여기서도 store.dispatch 사용
        }
    } else {
        console.log("message==" +data.message);
        console.log(JSON.stringify(data));
        //store.dispatch(logout(null)); // 여기서도 store.dispatch 사용
    }
};

const handleError = (err) => {
    console.error("로그인 체크 중 오류 발생:", err);
    alert("로그인 실패" );
    
};

const apiCall = () => {
    const loginYn = store.getState().user.isAuthenticated
    ApiCall({
        url: '/api/loginCheck',
        method: 'post',
        payload : {loginYn :loginYn },
        onSuccess: handleSuccess,
        onError: handleError,
    });
};

apiCall();

export default store;
