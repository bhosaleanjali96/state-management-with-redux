//create redux store
//configureStore internally contain -create store method 
//configureStore function returns confiure redux store
//provide store to root component of application

import { configureStore } from "@reduxjs/toolkit";

//adding counterSlice to store
import counterSlice from "./counterSlice";
import userSlice from "./userSlice";


const store= configureStore({
    reducer:{
    myCounter:counterSlice,
    myUsers:userSlice
    }
});

export default store;