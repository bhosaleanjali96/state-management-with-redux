import React from 'react'

function Test2() {


    let prObj= new Promise((resolve, reject)=>{

        let a=10;
        if(a>8){
            resolve("resolved")
        }
        else{
            reject("reject")
        }

    })

    prObj
    .then((data)=>{
        console.log(data);

    })
    .catch((err)=>{
        console.log(err);

    })

   fetch("https://jsonplaceholder.typicode.com/users")
   .then((res)=>{
    return res.json()
   })
   .then((data)=>{
    console.log(data);
   })
   .catch()

 //async and await

 async function fetchData(){
    let res= await fetch("https://jsonplaceholder.typicode.com/users")
    let data= await res.json();
    console.log(data,"from async and await");
 }

 fetchData()





















  return (
    <div>
      
    </div>
  )
}

export default Test2
