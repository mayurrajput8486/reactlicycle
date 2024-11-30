
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Lifecycle from './Comp/Lifecycle';
//import { useState } from 'react';
//import Employee from './Comp/Employee';
//import Fetchingdata from './Comp/Fetchingdata';
//import Classdata from './Comp/Classdata'
import KeyApi from './Comp/KeyApi';
function App() {

  //const [show, setShow] = useState(true)

  return (
    <div className="App">
        {/* <h1>Learn Lifecycle of React Comp</h1>
        <button className='btn btn-primary mt-2 mb-2' onClick={()=>setShow(!show)}>Unmount Comp</button>
        {
          show ?   <Lifecycle/> : <div>Comp Unmouted</div>
        } */}
        {/* <Employee/> */}
        {/* <Fetchingdata/> */}
        {/* <Classdata/> */}
        <h1>Fetch API using key</h1>
        <KeyApi/>
    </div>
  );
}

export default App;
