import { Component } from "react";

class KeyApi extends Component{
    constructor () {
        super();
        this.state = {
            holdData : []
        }
    }
    async componentDidMount() {
        try{
            const response = await fetch('https://reqres.in/api/users?page')
            console.log(response)
    
            const result = await response.json()
            console.log(result.data)
    
            this.setState({holdData : result.data})
        }
        catch (error) {
            console.log(error)
        }   
    }
    render(){
        const {holdData} = this.state
        return(
            <div>
                <h2>API with Key</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Full Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            holdData.map((x, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{x.id}</td>
                                        <td>{x.email}</td>
                                        <td>{x.first_name} {x.last_name}</td>
                                        <td><img src={x.avatar} alt={x.first_name}/></td>
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
export default KeyApi;