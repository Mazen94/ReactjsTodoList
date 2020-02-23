import './TaskDetail.css'
import React, { Component } from 'react';
import Axios from 'axios';
import { URL_API } from '../../constantes/passport';
import {Form,Button} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
export class TaskDetail extends Component {
   state ={
       data : ''
   }
   componentDidMount = async ()=> {
        try {
           const AuthStr = `Bearer ${localStorage.getItem('token')}`
           const response= await  Axios.get(URL_API+'tasks/'+this.props.match.params.id,{ headers: { Authorization: AuthStr } });  
           this.setState({data:response.data.data.task});
        }catch(e){
            console.log(e);
        }

   }
   handleTaskChange = (e)=>{
    this.setState({data:e.target.value})
   }

   onFormSubmit=(e)=>{
    e.preventDefault();
    const data = {
        task :  this.state.data
    }
    
    this.putData(data);
   }

   putData = async (data) =>{
    try{
        const AuthStr = `Bearer ${localStorage.getItem('token')}`
        const response = await axios.put(URL_API+'tasks/'+this.props.match.params.id, data ,{ headers: { Authorization: AuthStr } }) ;
        this.props.history.push('/tasks')
        console.log(response);
      }
      catch(err){
        console.log(`😱 Axios request failed: ${err}`);
        this.failedCnx = true;
    }
   }

    render() {
        console.log();
        return (
            <div className="card">
            <div className="card-header text-white bg-dark" > Task</div>
                 <div className="card-body container">
                <Form onSubmit ={this.onFormSubmit} className="container p-2">
                     <Form.Control type="text"  value ={this.state.data} onChange={this.handleTaskChange}/>
                     <br></br>
                     <Button variant="dark" size="sm" type="submit">Modifier</Button>
                </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(TaskDetail);
