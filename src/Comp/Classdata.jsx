import { Component } from "react";

class Classdata extends Component{
    constructor () {
        super()
        this.state = {
            data : []
        }
    }

    //fetch data using async and await
    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //console.log(response)

        const result = await response.json()
        console.log(result)

        //update data hold by result variable
        this.setState({data : result})
    }
    render(){
        const {data} = this.state;

        return(
            <div>
                <h2>Fetch API in class based comp using async and await</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
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
}
export default Classdata