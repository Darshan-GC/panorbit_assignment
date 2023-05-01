import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../reducers/userSlice"

const store = configureStore({
    reducer: {
        userDetails: userSlice.reducer
    },
});

export default store;