const Employee = () =>{

    const getData = async() =>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            console.log(response)
    
            const result = await response.json()
            console.table(result)
        }
        catch(error){
            console.log(error)
        }
       
    }
    getData()

        /* const fetchData = () =>{
            //const response = fetch('https://jsonplaceholder.typicode.com/users')
            //console.log(response)

            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                return response.json()
            })
            .then((x)=>{
                console.table(x)
            })
            .catch((error)=>{
                console.log(error, 'Network Error')
            })
        }
        fetchData() */

    return (
        <div>
            <h2>Learn Promise in React </h2>
        </div>
    )
}
export default Employee;