import { createSlice } from "@reduxjs/toolkit";


const userData = localStorage.getItem('userData')
const rememberUserData = localStorage.getItem('rememberData')

const initialState = {
    userList: [],
    userData: userData ? JSON.parse(userData) : '',
    rememberData: rememberUserData ? JSON.parse(rememberUserData):[]
}

const User = createSlice({

    name: "User",
    initialState,
    reducers: {
        setuserList(state, action) {
            state.userList = action.payload
        },
        updateUserData(state, action) {
            state.userData = action.payload
            state.rememberData = localStorage.getItem('rememberData')===null?[]:JSON.parse(localStorage.getItem('rememberData'))
        },

    }

})


export const ManageUserActions = User.actions

export const { setuserList, updateUserData } = User.actions;

export default User