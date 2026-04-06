import { Component } from 'react';
import css from './Users.module.css'
export class UsersSearch extends Component{
    render() {
        return(
<div className="input-group">
    <input type="text" className={css.control} placeholder="Search username"/>
    <button className={css.primary} type="button">Search</button>

</div>
        )


    }
 
}