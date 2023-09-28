// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

import { useEffect, useState } from "react";

// function App() {
// const[name,setName]=useState('ali');
// const[age,setAge]=useState(88);
// const[hobby,setHobby]=useState("Bok");
// const[values,setValues]=useState([{}]);

// // function addName(){
 
// // }
// // function addAge(){
 
// // }
// // function addHobby(){
// //   setHobby('soccer')
// // }
// function addValues(){
//   // const nvalues={Name:name, age:age, Hobby:hobby}
//   // setValues([...values,nvalues]);
//   setName('Tamana');
//   setAge(20);
//   setHobby('soccer')
//   // console.log(values);

// }


// return(
//   <>
//   <h1>Name:{name}</h1>
//   <h2>Age:{age}</h2>
//   <h3>Hobby: {hobby}</h3>
//   <button onClick={addValues}>check here</button>
//   <ul>
// {values.map((item)=>(
//   <li>{item.Name}</li>)

// )}
//   </ul>
  
//   </>
// )




// }
//::::::::::::::::::::::::::::::::::::::::::::UseEffect Usage::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::



// function App(){
//   const[value,setValue]=useState(0);
//   function sayHello(){
//     // setValue()
//     console.log('hello there');
//   }
//   function btnFunc(){
//     setValue((value)=>value+1)
//   }
//   sayHello();

//   useEffect(()=>{
//     console.log('hello from useEffect')
//   },[])

//   return(
//     <>
//     <h1>{value}</h1>
//     <button onClick={btnFunc}>click here</button>
//     </>
//   )
// }

// function App(){

//   const [user,setUser]=useState([]);

//   useEffect(()=>{
//     const fetchFunc=async()=>{
//       const response=await fetch('url');
//       const user=await response.json();
//       setUser(user);

//     }
//     fetchFunc();
//   },[user])
// return(
//   <>
//   <ul>
//     {user.map((item)=>{
//       return(
//         <li>{item}</li>
//       )
//     })}
//   </ul>
//   </>
// )

// }
// function RandomNumber(){
//   const [number,setNumber]=useState(1);

//   useEffect(()=>{
//     let result=function randFunc(){Math.floor(Math.random()*99);
//     }
//     result();
//     setNumber(result)

//   },[number])
// }
function App(){

//   const [user,setUser]=useState('d ');
//   const [name,setName]=useState(" ");

//   // useEffect(()=>{
//   //   const data=function funcName(){
//   //     // const response=await fetch('url')
//   //     console.log('taken');
//   //   }
//   //   data();
//   //   setUser(data);
//   // },[])

// return(
//   <div>{user && "hello"}</div>
// )

const[name,setName]=useState(true);
// function checState(){
  // function set(){
  //   setName('False');
  // }

  
  return(
    <>
    <div>
      <button style={{color:'green', fontSize:'2rem'}} onClick={()=>{setName(!name)}} type="button">click me</button>
      {/* {name? name:<Newcomp/>} */}
      {name?<Alert></Alert>:"Not true"}
    </div>
    </>
  )
};

const Alert=()=>{
  return(
    <div style={{backgroun:'red'}}>"Hello dear</div>
  )
}
// }

export default App;
