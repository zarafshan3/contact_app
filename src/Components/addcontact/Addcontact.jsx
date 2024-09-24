import { Component } from 'react';
import './Addcontact.css';
 
class Addcontact extends Component {
    state = {
        name: "",
        email: "",
    };

        add = (e) =>{
            e.preventDefault();
            if(this.state.name === "" && this.state.email === "") {
                alert("All the fields are mandatory!");
                return
            }
            this.props.addContactHandler(this.state);
            this.setState({ name: "", email: "" });
            // console.log(this.state);
        }
    render() {
        return(
            <div className='ui main'>
                <h1>Add Contacts</h1>
                <form action="" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder='Enter your name' value={this.state.name}
                        onChange={ (e) => this.setState({name: e.target.value})}/>  
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder='Enter your email' value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value})}/>  
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
    }
}


export default Addcontact;