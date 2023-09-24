
import { useState } from 'react';
import React from 'react';
// import App from 'react';
// import './App.css';
// import App from 'react';

// function App() {
// const [color,setColor]=useState('red');

// function toBlue(){
// setColor('blue')
// }
// return(
//   <>
//   < style={{backgroundColor: color,width:'200px',}}>this color changed 
//   <button onClick={toBlue}>click here</button>
//   </
//   </>
// )

function App(){

  const [people,setPeople]=useState('data');

  function changeme(){
    setPeople(['Ahmad','ali','samad'])
    console.log(people)
  }


  return(
    <div>{people}
    <button onClick={changeme}>click me</button></div>
  )
}





  // const [count,setCount]=useState(0);

  // let handleBtn=()=>{
  //  setCount(count+1);
  // }
  // return (
  //   <>
  //  <h1>My Count is {count} Now</h1>
  //  <button id='btn'onClick={handleBtn}>click me</button>
  //  </>
  // );
// }

export default App;
