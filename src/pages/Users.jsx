import React from 'react';
import UserDetail from './UserDetail';

class Users extends React.Component{
    getUsers(){
        return this.props.users.map((singleUser)=>{
            return <UserDetail key={singleUser.name} select={"name"} user={singleUser} />
        })
    }
    render(){
        return <div>
            {this.getUsers()}
        </div>
    }
}

export default Users;