import React, {Component} from 'react';
import { userContext } from '../UserContext';
class UserName extends Component {
    
    render(){
        return <userContext.Consumer>
            {
                (value)=>{ 
                    return <h1 className="userName" onClick={ ()=> { value.onClick(this.props.user) } }>
                            {this.props.user.name}
                        </h1>
                }
            }
        </userContext.Consumer> 
        
    }
}

export default UserName;