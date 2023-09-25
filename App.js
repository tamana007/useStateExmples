
import { clear } from '@testing-library/user-event/dist/clear';
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

// function App(){

//   const [people,setPeople]=useState('data');

//   function changeme(){
//     setPeople(['Ahmad','ali','samad'])
//     console.log(people)
//   }


//   return(
//     <div>{people}
//     <button onClick={changeme}>click me</button></div>
//   )
// }

// function App(){
  
//   const[color,setColor]=useState('red');

//   const colors=['blue','green']

//   let changeColor=(e)=>{
//     setColor(e.target.value)
//   }

//   return(
//     <div className='section' style={{background:color}}>{color}

//     <select onChange={changeColor}>
// {colors.map((col)=>{
//   return(
    
// <option value={col}>{col}</option>
    
//   )

// })}
//     </select></div>
//   )

// }

//...................Practicd Again..................................

// function App (){
//   const [color, chngeColor]=useState('red');
//   const Colors=['green','Blue','purple'];
//   function change(e){
//     chngeColor(e.target.value);
//   }
  

//   return(
//     <div style={{background:color}}>
//       <select onChange={change}>
//        { Colors.map((c)=>{
//        return (
//         <option>{c}</option>
//         // <Option value={c}>{c}</Option>
//        )
//         })}
        
//       </select>
//     </div>
//   )
// }
//.......................To do List practice......................................
// function App(){
//   let list=[];

//   const[task,addTask]=useState('working');

//   function updateVal(e){
//     addTask(e.target.value);
   
//   };
//   function pushVal(e){
// e.preventDefault();
//     list.push(task)
//     console.log(task);
  
//   }



//   return (
//     <>
// <form type='submit' onSubmit={pushVal}>
//   <input type='text' value={task} name='List of INputs' onChange={updateVal}></input>
//   <button type='submit'>Submit</button>
// </form>
// <ul>
//         {list.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   )
// }






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


//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Correct.......................

function App(){

  const[task,setTask]=useState('inputtask')

function inputFunc(e){
  setTask(e.target.value)
}
const [taskList,setTaskList]=useState([])

function submitVal(e){
  e.preventDefault();
  setTaskList([...taskList,task])
}
  return(
    <>
    <form onSubmit={submitVal}>
      <input value={task} onChange={inputFunc}></input>
      <button type='submit'>submit</button>
    </form>
    <ul>
      {
      taskList.map((item,index)=>(
        <li key={index}>{item}</li>)

      )
      }
    </ul>
    {/* <ul>
        {taskList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    
    </>
  );
  
}





// function App() {
//   const [task, setTask] = useState(''); // Initialize task as an empty string
//   const [taskList, setTaskList] = useState([]); // Initialize taskList as an empty array

//   function updateVal(e) {
//     setTask(e.target.value);
//   }

//   function pushVal(e) {
//     e.preventDefault(); // Prevent the default form submission behavior
//     setTaskList([...taskList, task]); // Add the task to the taskList
//     setTask(''); // Clear the input field
//   }

//   return (
//     <>
//       <form onSubmit={pushVal}>
//         <input
//           type='text'
//           value={task} // Bind the input value to the task state
//           name='List of Inputs'
//           onChange={updateVal}
//         />
//         <button type='submit'>Submit</button>
//       </form>
//       <ul>
//         {taskList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


export default App;
