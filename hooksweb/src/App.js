import logo from './logo.svg';
import './App.css';
// import { Button } from 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
 import btnModule from './Button.module.css'

function App() {
  let [count,update]=useState(1);


  // let n=11;
// let displayData=()=>{
//   n++;
//   console.log(n);
// }
let template=' ';

let[pshow,setpshow]=useState(false)

if(pshow){
  template=
  <> 
   <button type='button' className='btn btn-primary' onClick={()=>setpshow(false)}>Hide</button>
  <p>Welcome to Nandurbar...</p>
  </>
  
}
else{
  template= <button type='button' className='btn btn-primary' onClick={()=>setpshow(true)}>Show</button>
}

let displayData=()=>{
    update(count++)
   }

   let decreaseData=()=>{
   
    update(count--)
   }

   let[status,setstatus]=useState(false);

   //password 
   let [passStatus, setPasStatus]=useState(false)
   let [menustatus, setMenuStatus]=useState(false)
   let [modelstatus,seetModelstatus]=useState(false)
 
   return (

  <div className="App">
    <button className='en' onClick={()=>seetModelstatus(true)}>Enquiry Now</button>
    <div onClick={()=>seetModelstatus(false)}  className={`modelOverLay  ${modelstatus ?'modelShow' :''} ` }></div>
    <div className={`ModelDiv  ${modelstatus ?'ShowModelDiv' :''} ` }>
      <h3>Enquiry Now <span  onClick={()=>seetModelstatus(false)} >&times;</span> </h3>
      </div>




    <button type='button' className='micon' onClick={()=>setMenuStatus(!menustatus)}>
      {menustatus ?
      <span>&times;</span>
      :
      <span>  &#9776;</span>
    }
      </button>
    <div className={`menu ${menustatus ? 'activemenu' : ' ' }`}>
      <ul>
        <li>Home</li>

        <li>About</li>
        <li>Courses</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </div>

      <br></br>
      <br></br>
      <button type='button' className='btn btn-primary' onClick={()=>setstatus(!status)}>
         {(status) ? 'hide' : 'show'} 
      </button>
      {
      (status) ?
      <p style={{color:"pink", backgroundColor:"rebeccapurple"}}>Hello Guys....</p>
      :
      ' '
    }
    <br></br>
    <br></br>
      
      <input type={passStatus? 'text' : 'password'}></input>
      <button onClick={()=>setPasStatus(!passStatus)}>
        {passStatus?'Hide':'Show'}
      </button>







      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
  </header>*/}

    {/* {n} */}
    <br></br>
      {'counter : '}{count}
      <br></br>
    <button type='button' className='btn btn-primary '  onClick={displayData}>Increment</button>
    <button type='button' className='btn btn-primary' onClick={decreaseData}>Decrement</button>

   
      
      {template}

      <p>
        <button className={btnModule.error}>Minal</button>
      </p>


    </div>
  );
}

export default App;


