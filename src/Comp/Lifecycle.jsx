import { useEffect, useState } from "react"

const Lifecycle = () =>{

    const [count,setCount] =useState(0)

    useEffect(()=>{
        console.log('Comp Mounted')

        //cleanup function 
        return ()=>{
            console.log('Comp Unmounted')
        }
    },[])

    useEffect(()=>{
        console.log('Comp Updating')
        //alert('Count is 5')
    },[count])

    return(
        <div>
            <h2>Lifecycle Comp</h2>
            <h1>{count}</h1>
            <button className="btn btn-success me-3" onClick={()=>setCount(count + 1)}>+</button>
            <button className="btn btn-danger me-3" onClick={()=>setCount(count - 1)}>-</button>
            <button className="btn btn-warning" onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
export default Lifecycle