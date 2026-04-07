import { UsersList      } from './components/UsersList';
import { UsersSearch    } from './components/UsersSearch';
import { UsersStats     } from './components/UsersStats';
import { Modal          } from '../Modal/Modal';
import { NewUserForm } from './components/NewUserForm/NewUserForm';

import css from './components/Users.module.css';


import usersJson          from '../../assets/users.json';
import { Component      } from 'react';

export class Users extends Component{
    state = {
        users: usersJson,
        isModalOpen: false,
    }

    handleToggle = () => {
        this.setState(prevState=>({isModalOpen: !prevState.isModalOpen}))
    }

    handleDelete = id =>{
        this.setState(prevState =>{
        const newUsersList = prevState.users.filter(user=>user.id !== id);
        return { users: newUsersList };
        });
    }
    render() {
    const { users, isModalOpen } = this.state   
        return (
    <>

            {/* <Modal>
                <NewUserForm/>
            </Modal> */}

             {isModalOpen && (<Modal
             onClose={this.handleToggle}
             >
                    <NewUserForm/> 
             </Modal>
            )}

            <button
                className={css.btn} type="button"
                onClick={this.handleToggle}
            >
                Create new user
            </button>

            <UsersSearch />
            <UsersStats users = {users}/>
            <UsersList users = {users} onDelete={this.handleDelete}/>
    
    
    </>
    )
}
}