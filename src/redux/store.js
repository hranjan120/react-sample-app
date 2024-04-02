import { configureStore } from "@reduxjs/toolkit";
import userObjReducer from "./userSlice";

export default configureStore({
    reducer: {
        userObj: userObjReducer,
    }
});