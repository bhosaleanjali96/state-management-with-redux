import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increamentCounter } from '../redux-store/counterSlice';
import { getUsers } from '../redux-store/userSlice';
import axios from 'axios';

//useSelector- reads a value from store state and subscribes to updates
//useDispatch- return the store's dispatch method to let you dispatch actions
//dipatch will take-  is dispatch action object which has type and payload. 
//here - type- "counter/increamentCounter" and payload is undefined

function Test() {

    let result= useSelector((state)=>state.myCounter.value);
    let dispatch= useDispatch();

    let usersData= useSelector((state)=>state.myUsers)
    
    let [users, setUsers]= useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{setUsers([...res.data])
            //update data to the store
            dispatch(getUsers(res.data))
        })
        .catch(err=>console.log(err))

    },[])
  return (
    <div>
       <h1>Test Component</h1>
      <h1>Count : {result}</h1>
      <button onClick={()=>{dispatch(increamentCounter(100))}}>+</button>

      <h2>{usersData.id}</h2> 
      {
        users.map((user)=>
            <h3 key={user.id}>{user.username}</h3>
        )
      }
    </div>
  )
}

export default Test
