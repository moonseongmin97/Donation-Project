import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    nickName: null, // 닉네임 추가
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            console.log("액션 시작==");            
            console.log("액션 종료=="+JSON.stringify(action.payload)); 
            console.log("액션 종료=="+JSON.stringify(action.payload.username));
            console.log("액션 종료=="+JSON.stringify(action.payload.nickName));
            state.isAuthenticated = true;
            state.user = action.payload.username;        
            state.nickName = action.payload.nickName;        

            console.log("액션 종료=="+state.user );
            
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.nickName = null;
        },
        updateNickName(state, action) { // 닉네임 업데이트
            state.nickName = action.payload;
        },
    },
});

// 액션과 리듀서를 내보내기
export const { login, logout ,updateNickName  } = userSlice.actions;
export default userSlice.reducer;
