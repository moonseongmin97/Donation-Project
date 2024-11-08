import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // 나중에 정의할 리듀서

const Store = configureStore({
    reducer: {
        user: userReducer,
        //player : payelrReu
        // 다른 리듀서도 여기에 추가 가능
    },
});

export default Store;