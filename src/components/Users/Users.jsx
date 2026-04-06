import { UsersList      } from './components/UsersList';
import { UsersSearch    } from './components/UsersSearch';
import { UsersStats     } from './components/UsersStats';
import { Modal          } from '../Modal/Modal';


import usersJson          from '../../assets/users.json';
import { Component      } from 'react';

export class Users extends Component{
    state = {
        users: usersJson,
    }

    handleDelete = id =>{
        this.setState(prevState =>{
        const newUsersList = prevState.users.filter(user=>user.id !== id);
        return { users: newUsersList };
        });
    }
    render() {
    const { users } = this.state   
        return (
    <>

            {/* <Modal>
                <NewUserForm/>
            </Modal> */}

            {/* <Modal/> */}

            <button
                className="btn" type="button"
            >
                Open modal_p
            </button>

            <UsersSearch />
            <UsersStats users = {users}/>
            <UsersList users = {users} onDelete={this.handleDelete}/>
    
    
    </>
    )
}
}