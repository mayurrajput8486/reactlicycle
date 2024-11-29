import { useEffect, useState } from "react"
const Fetchingdata = () =>{

    const [data,setData] = useState([])

    async function getData () {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            //console.log(response)
            const result = await response.json()
            //console.log(result)
            setData(result)
        }catch(error){
            console.log(error)
        }
        
    }
    /* CORS - Cross Origin Resource Sharing */
    useEffect(()=>{
        getData()
    },[])
    // [] - component render only one time
   
    return(
        <div>
            <h1>Learn How to Fetch Data</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Username</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((emp, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.username}</td>
                                    <td>{emp.website}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Fetchingdata;