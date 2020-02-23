import React, { Component,Fragment } from 'react';
import {withRouter} from 'react-router-dom'
import Axios from 'axios';
import { URL_API } from '../../constantes/passport';


export class Task extends Component {
   /**
    * Function to get user to the update page
    */
    onButtonModifierClick(){
        
        this.props.history.push(`/task/${this.props.t.id}`)
    }
   async onButtonSupprimerClick(){
        try {
            const AuthStr = `Bearer ${localStorage.getItem('token')}`;
            const response = await Axios.delete(URL_API+`tasks/${this.props.t.id}`,{ headers: { Authorization: AuthStr } });
            window.location.reload();
        }catch(e){
            console.log(e);
        }

        
    }
    render() {
        return (
            <Fragment>
            <tr>
                <td>{this.props.t.task}</td>
                <td>{this.props.t.created_at}</td>
                <td>{this.props.t.updated_at}</td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm mr-2" onClick={this.onButtonModifierClick.bind(this)}>Modifier</button>
                    <button type="button" className="btn btn-danger btn-sm mr-2" onClick={this.onButtonSupprimerClick.bind(this)}>Supprimer</button>
                  
                </td>
            </tr>
        </Fragment>
        );
    }
}

export default withRouter(Task);
