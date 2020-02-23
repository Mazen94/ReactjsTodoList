import React, { Component } from 'react'; 
import {Form , Button} from 'react-bootstrap'
import axios from 'axios';
import {AUTHORIZATION,LOGIN} from '../../constantes/passport'
import './login.css';
import {withRouter} from 'react-router-dom'

export class Login extends Component {
    state = {
      username:'',
      password : '',
    }
    failedCnx = false ;
    // Arow function to manipulate the value of email when it changes
    handleEmailChange= (e) =>{
        this.setState({username: e.target.value});
    }

    // Arow function to manipulate the value of Password when it changes
    handlePasswordChange =  (e) => {
        this.setState({password: e.target.value});
    }

    // Arow function when the user click submit or enter 
    onClickButtom = (e)=>{
      //preventDefault method cancels the event if it is cancelable
      e.preventDefault();
      const user ={
            ...AUTHORIZATION,
            username : this.state.username,
            password : this.state.password
      }
      this.postLogin(user);
    }
    // Asynchrone function to send the information entered by the user to the API 
    async postLogin(user){
      try{
        const response = await axios.post(LOGIN, user ) ;
       
       // this.props.onCheckLogin(true)
         localStorage.setItem('token',response.data['access_token'])
        this.props.history.push('/')
      }
      catch(e){
        console.log(`😱 Axios request failed: ${e}`);
        this.failedCnx = true;
      }
     
  }
    
    render() {
        return (
            <Form onSubmit= {this.onClickButtom}>
            <Form.Group  controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}/>
            </Form.Group>
          
            <Form.Group  controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"value={this.state.password} onChange={this.handlePasswordChange}  />
            </Form.Group>
            <Button className="btn btn-primary btn-sm text-white bg-dark" variant="primary" type="submit"> Connecter </Button>

          </Form>
         
        );
    }
}

export default withRouter(Login);
