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

function App(){

  const [user,setUser]=useState([]);

  useEffect(()=>{
    const fetchFunc=async()=>{
      const response=await fetch('url');
      const user=await response.json();
      setUser(user);

    }
    fetchFunc();
  },[user])
return(
  <>
  <ul>
    {user.map((item)=>{
      return(
        <li>{item}</li>
      )
    })}
  </ul>
  </>
)

}

export default App;
