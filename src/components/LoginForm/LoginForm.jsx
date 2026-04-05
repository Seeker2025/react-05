import { Component } from 'react';
import css from './LoginForm.module.css';

export class LoginForm extends Component{
 state = {
    email: '',
    password: '',
 };

//  handleChangeEmail=(event)=>{
//     console.log(event.target.value)
//     this.setState({email: event.target.value})
//  }

//   handleChangePassword=(event)=>{
//     console.log(event.target.value)
//     this.setState({password: event.target.value})
//  }

  handleSubmit =(event)=>{
    event.preventDefault();
    console.log(this.state);
    this.setState({ email: '', password: '',})
    
  }

  handleChange =(event)=>{
    // console.log(event.target.value)
    const{name, value}=event.target
    this.setState({[name]: value});
  }

 render(){
    const{email, password}=this.state
    return(
        <form className={css.form}  onSubmit={this.handleSubmit}>


            <div className="">
                <label className="">
                    <p>Email address</p>
                    <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={this.handleChange}
                     />
                </label>
            </div>

            <div className="">
                <label className="">
                    <p>Password</p>
                    <input
                    type="text"
                    name="password"
                    value={password}
                    className="form-control"
                    onChange={this.handleChange}
                    />
                </label>
            </div>

            <button 
            className=""
            type="submit"
           
            >
                Submit
           </button>     


        </form>


    )
 }
};
