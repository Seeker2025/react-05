import { Component } from 'react';
import css from './LoginForm.module.css';

export class LoginForm extends Component{
 state = {};

 render(){
    return(
        <form className={css.form}>


            <div className="">
                <label className="">
                    <p>Email address</p>
                    <input type="text" className="form-control"/>
                </label>
            </div>

            <div className="">
                <label className="">
                    <p>Password</p>
                    <input type="text" className="form-control"/>
                </label>
            </div>

            <button className="" type="submit">
                Submit
           </button>     


        </form>


    )
 }
};
