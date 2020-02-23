import  './tasks.css'
import React, { Component } from 'react';
import Axios from 'axios';
import { URL_API } from '../../constantes/passport';
import Task from '../../components/Task/Task';
import {withRouter} from 'react-router-dom'
import {Table} from 'react-bootstrap'
export class Tasks extends Component {
   state = {
       data : [],
  }

   /**
    * Function lifecycle
    */
   async componentDidMount(){
        const AuthStr = `Bearer ${localStorage.getItem('token')}`; //Prepare the authorization with the token
        const response = await Axios.get(URL_API+`tasks`,{ headers: { Authorization: AuthStr } });
        this.setState({data:response.data.data})
    }
    onAjouterClick = ()=>{
            this.props.history.push('/addTask')
    }
    render() {
        return (
            <div>
            <div className="button">
              <button type="button" onClick = {this.onAjouterClick} className="btn btn-outline-dark">Ajouter</button>
            </div>
              <Table striped bordered hover variant="dark" className="container" >
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Created_at</th>
                            <th>Updated_at</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody> 
                        { this.state.data.map(res =><Task key={res.id} t= {res} />)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default withRouter(Tasks);
