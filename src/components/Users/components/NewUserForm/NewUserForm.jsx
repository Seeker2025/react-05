import { Component } from "react";

import { GeneralInfo } from './components/GeneralInfo';
import { Availability } from './components/Availability';
import { Skills } from "./components/Skills";

// {
//         "id": 1,
//         "name": "Leanne Graham",
//         "email": "Sincere@april.biz",
//         "bio": "Assumenda harum mollitia neque, officiil veniam repellat sapiente",
//         "skils": ["react", "vue"],
//         "isOpenToWork": false
//  },

export class NewUserForm extends Component{

    state = {
         name:  '',
         email: '',
         bio:   '',
         skils: [],
         isOpenToWork: false
    };

    handleChangeGeneralInfo = event => {
        const { name, value } = event.target;
        console.log(name, value);
        this.setState({[name]: value})
        
    }

    render(){

        const { name, email, bio } = this.state;

        return(
            <form>      

                     <GeneralInfo
                      onChange={this.handleChangeGeneralInfo}
                      name = {name}
                      email = {email}
                      bio = {bio}
                      />

                     <Availability/>

                     <Skills/>  

                    <div className="d-flex">

                        <button type="button" className="btn">Cancel</button>

                        <button type="submit" className="btn">Create user</button>

                    </div>
            </form>
        )
       
    }
}