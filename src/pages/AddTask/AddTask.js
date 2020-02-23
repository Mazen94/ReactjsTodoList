import React, { Component } from 'react';
import {Form , Button } from 'react-bootstrap'
import Axios from 'axios';
import {withRouter} from 'react-router-dom'
import { URL_API } from '../../constantes/passport';
export class AddTask extends Component {
    state = {
        data : '',
    }

    handleTaskChange = (e)=>{
        this.setState({data:e.target.value})
    }
    onFormSubmit = async (e)=>{
        e.preventDefault();
        const data = { task : this.state.data }
        console.log(data);
        const AuthStr = `Bearer ${localStorage.getItem('token')}`
       try {
             const response =  await Axios.post(URL_API+'tasks/',data,{ headers: { Authorization: AuthStr }});    
                console.log(response);
                this.props.history.push('/tasks')
       } catch (error) {
           
       console.log(error);
    }
}
    render() {
        return (
            <div className="card">
            <div className="card-header text-white bg-dark" > Task</div>
                 <div className="card-body container">
                <Form onSubmit ={this.onFormSubmit} className="container p-2">
                     <Form.Control type="text"  value ={this.state.data} onChange={this.handleTaskChange}/>
                     <br></br>
                     <Button variant="dark" size="sm" type="submit">Ajouter</Button>
                </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(AddTask);
