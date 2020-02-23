import './login.css'
import LoginComponent from '../../components/LoginComponent/Login'
import {withRouter} from 'react-router-dom'
import React, { Component } from 'react';

export class Login extends Component {
    
    /**
     * function to treat two cases
     * 1- case the user connect 
     * 2- case the user is not connect
     */
    toRender = ()=>{
        if(localStorage.getItem('token')){
                this.props.history.push('/')
        }else
        return (
            <div className="card">
            <div className="card-header text-white bg-dark" >Connecter</div>
            <div className="card-body container">
               < LoginComponent/>
               </div>
            </div>
        );
    }
    render() {
        return (
            <div>
              {this.toRender()}  
            </div>
        );
    }
}

export default withRouter(Login) ;
