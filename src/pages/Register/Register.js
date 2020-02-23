
import { Form,Col,Button } from 'react-bootstrap';
import './register.css'
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {URL_API} from  '../../constantes/passport'
export class Register extends Component {  
    
    state = {
        email:'',
        password : '',
        c_password:'',
        nom : ''
    }
    //function to handle  the emails when is changed
    handleEmailChange = (e) =>{
        this.setState({email:e.target.value})
    }

    //function to handle the nom when is changed
    handleNomChange = (e) =>{
        this.setState({nom:e.target.value})
    }
    //function to handle  the password when is changed
    handlePasswordChange = (e) =>{
        this.setState({password:e.target.value})
    }
    //function to handle  the password when is changed
    handleCpasswordChange = (e) =>{
        this.setState({c_password:e.target.value})
    }

    //Function to get a data from the form
    onFromSubmit = (e)=>{
            e.preventDefault();
            const user ={
                name : this.state.nom,
                password : this.state.password,
                c_password:this.state.c_password,
                email: this.state.email

          }
            this.postData(user);
   }

   //send data to a server to create user
   postData = async (data)=>{
    try{
        const response = await axios.post(URL_API+`register`, data ) ;
         localStorage.setItem('token',response.data.data)
         this.props.history.push('/')
      }
      catch(err){
        console.log(`😱 Axios request failed: ${err}`);
        this.failedCnx = true;
    }
   }
   /**
     * function to treat two cases
     * 1- case the user connect 
     * 2- case the user is not connect
     */
   toRender = () =>{
            if(localStorage.getItem('token')){
                this.props.history.push('/')
            }else
            {
                return (
                    <div className="card">
                        <div className="card-header text-white bg-dark" > Inscription</div>
                     <div className="card-body container">
                        <Form onSubmit = {this.onFromSubmit}className="container">
                            <Form.Row className="p-2">
                            <Col>
                                <Form.Control type="email"  value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                            </Col>
                            <Col>
                                <Form.Control type="text"   value={this.state.nom} onChange={this.handleNomChange} placeholder="Nom" />
                            </Col>
                            </Form.Row>
                            <Form.Row className="p-2">
                            <Col>
                                <Form.Control type="password"  value={this.state.password} onChange={this.handlePasswordChange} placeholder="Mot de passe" />
                            </Col>
                            <Col>
                                <Form.Control type="password"  value={this.state.cpassword} onChange={this.handleCpasswordChange} placeholder="mot de passe" />
                            </Col>
                            </Form.Row><br></br>
                            <Button className="btn btn-primary btn-sm text-white bg-dark" variant="primary" type="submit"> Inscrire </Button>
                        </Form>
                    </div>
                    </div>
                );
            }
   }
    render() {
        return (<div>{this.toRender()}</div>)

    }
}

export default withRouter(Register);
