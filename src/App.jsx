import UserDetail from './pages/UserDetail';
import Users from './pages/Users';
import './App.css';
import React from 'react';
import axios from 'axios';
import { userContext } from './UserContext'


console.log('userContext:', userContext)

class App extends React.Component {
  state = {
    selectedUser: {
      name: "unknown"
    },
    users: []
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        this.state.users =res.data;
        this.setState(this.state);
    });
}

  onSelectUserFunc = (user) => {
    // console.log("Clicked ", this)
    this.state.selectedUser = user;
    this.setState(this.state);
    // return "ok"
  }

  render() {
    return (
      <userContext.Provider  value={{ onClick: this.onSelectUserFunc, user: this.state.selectedUser }}>
        <div className="App">
          <div className='left' >
            <Users users={this.state.users} />
          </div>
          <div className="right" >
            <UserDetail user={this.state.selectedUser} />
          </div>
        </div>
      </userContext.Provider>
    );
  }
}

export default App;
