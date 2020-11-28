import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('user/signUp', async({credentials}) =>{
    return credentials
})
const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:null,
        status:''
    },
    reducers:{
        signIn: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
        }
    },
    extraReducers:{
        [signUp.pending]:(state, action) => {
            state.status = 'loading';
        },
        [signUp.fulfilled]:(state, action) => {
            state.user = action.payload;
            state.status = 'exito';
        },
        [signUp.rejected]:(state, action) => {
            state.status = 'fallo';
        },
    }
});
export const {signIn, logOut} = userSlice.actions;
export default userSlice.reducer