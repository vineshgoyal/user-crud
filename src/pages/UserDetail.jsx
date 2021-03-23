import React from 'react';
import UserName from './UserName';
class UserDetail extends React.Component{
    
    
    render(){
        let data= null;
        if(this.props.select != undefined && this.props.user[ this.props.select ]){
            if(this.props.select ==="name"){
                data =  <UserName user={this.props.user}/> 
            }else {
                data = <h1> {this.props.user[ this.props.select]} </h1>
            }
            
        }else{
            data = <>
                <UserName user={this.props.user}/>
                <p> 
                {this.props.user.email}
                </p>
                <p> 
                {this.props.user.website}
                </p>
                <p>{this.props.user.phone}</p>
            </>
        }
    return <div >
           {data}
        </div>
    }
}

export default UserDetail;