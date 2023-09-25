
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

// function App(){

//   const[task,setTask]=useState('inputtask')

// function inputFunc(e){
//   setTask(e.target.value)
// }
// const [taskList,setTaskList]=useState([])

// function submitVal(e){
//   e.preventDefault();
//   setTaskList([...taskList,task])
// }
//   return(
//     <>
//     <form onSubmit={submitVal}>
//       <input value={task} onChange={inputFunc}></input>
//       <button type='submit'>submit</button>
//     </form>
//     <ul>
//       {
//       taskList.map((item,index)=>(
//         <li key={index}>{item}</li>)

//       )
//       }
//     </ul>
//     {/* <ul>
//         {taskList.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul> */}
    
//     </>
//   );
  
// }





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


//................ cOUNTER VALUE INCREMENT DECREMENT RESET....................

// function App(){

//   const[incV,setIncV]=useState(0)

//   function Increment(){
//     let increVal=incV+1;
//     setIncV(increVal)
//   }
//   function decrement(){
//     if(incV>0){
//     let decreVal=incV-1;
//     setIncV(decreVal)
//     }
    
   
//   }
//   function reset(){
//     let resetVal=0;
//     setIncV(resetVal)
//   }

//   return(
//     <>
//     <h1>{incV}</h1>
//     <button name='btn' onClick={Increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     <button onClick={reset}>Reset</button>
//     </>
//   )
// }
//---------------------------------------------------------------------------------------

function App(){

  const[fInput,sFinput]=useState('');
  function addFinput(e){
    sFinput(e.target.value)

  }
  const[pinput,sPinput]=useState('');
  function addSinput(s){
    sPinput(s.target.value)

  }
  const[items,setItems]=useState([{}]);
  function addItems(e){
    e.preventDefault();
    // const nItems={Description:fInput, Amout: sPinput}
    
    // setItems([...items,nItems])
    // sPinput('');
    // sFinput('');

    const nItems = { description: fInput, amount: sPinput };
setItems([...items, nItems]);
sPinput(''); // Clear the 'pInput' state
sFinput(''); // Clear the 'fInput' stat
  }


  return(
    <>
    {/* <form onSubmit={addItems}>
    <input value={fInput} onChange={addFinput}></input>
    <input onChange={addSinput} value={pinput}></input>
    <button type='submit'>Add Expense</button>
    </form> */}


    <form onSubmit={addItems}>
        <input
          value={fInput}
          onChange={addFinput}
          placeholder="Description"
        />
        <input
          value={pinput}
          onChange={addSinput}
          placeholder="Amount"
        />
        <button type="submit">Add Expense</button>
      </form>

    
    {/* <ul>
      {items.map((m,index)=>
        <li key={index}>{m}</li>
      )}
    </ul> */}
     <ul>
        {items.map((item, index) => (
          <li key={index}>
            Description: {item.description}, Amount: {item.amount}
          </li>
        ))}
      </ul>
    
    </>
  )
}
// function App() {
//   const [fInput, setFInput] = useState('');
//   const [pInput, setPInput] = useState('');
//   const [items, setItems] = useState([]);

//   function addFInput(e) {
//     setFInput(e.target.value);
//   }

//   function addPInput(e) {
//     setPInput(e.target.value);
//   }

//   function addItems(e) {
//     e.preventDefault();
//     const nItems = { description: fInput, amount: pInput };
//     setItems([...items, nItems]);
//     setPInput(''); // Clear the 'pInput' state
//     setFInput(''); // Clear the 'fInput' state
//   }

//   return (
//     <>
//       <form onSubmit={addItems}>
//         <input
//           value={fInput}
//           onChange={addFInput}
//           placeholder="Description"
//         />
//         <input
//           value={pInput}
//           onChange={addPInput}
//           placeholder="Amount"
//         />
//         <button type="submit">Add Expense</button>
//       </form>

//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             Description: {item.description}, Amount: {item.amount}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }


export default App;
