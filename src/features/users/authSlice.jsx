import {createSlice} from "@reduxjs/toolkit" 

export const initialState = {
    userInfo: JSON.parse(localStorage.getItem("user")) || null
}

export const userSlice = createSlice({
    name: "Users",
    initialState,
    reducers:{
        logedInUsers: (state, action)=> {
            state.userInfo = action.payload
        },
        logedOutUsers: (state)=> {
            state.userInfo = null
        },
    }
});

export const {logedInUsers, logedOutUsers} = userSlice.actions;

export default userSlice.reducer