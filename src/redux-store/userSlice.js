import { createSlice } from "@reduxjs/toolkit";

//actions and reducer are pre-defined property available to createSlice
const userSlice = createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        getUsers:(state,action)=>{state.users= action.payload}
    }
})

//exports actions
export let {getUsers} = userSlice.actions;
//exports reducer
export default userSlice.reducer;