//createSlice- 1) initial state,
//             2)an object full of reducer functions, 
//             3) "slice name", and 
//             automatically generates action creators and 
//             action types that correspond to the reducers and state.

//Immer.js- allow us perform state changes in muatable way and traslate the state changes by creating copies
//action creators as separate function need to dispatch that before reduxjs/toolkit

//reducer and actions are pre-defined property of slice
import { createSlice } from "@reduxjs/toolkit";

//createSlice added in toolkit -method is doing every conversion of taking payload and adding to action object payload property
const counterSlice=createSlice({
    name:'counter',
    initialState: {value:0},
    reducers:{
        //reducer functions- req state and action object
        increamentCounter:(state,action)=>{state.value= state.value + action.payload},
        decreamentCounter:(state,action)=>{state.value= state.value - action.payload}
    }
})

export let {increamentCounter, decreamentCounter}= counterSlice.actions
export default counterSlice.reducer





