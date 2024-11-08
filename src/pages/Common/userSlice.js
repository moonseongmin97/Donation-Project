import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            //console.log("액션 시작");            
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

// 액션과 리듀서를 내보내기
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
