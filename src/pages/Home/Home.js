import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';
import {
  withRouter
} from 'react-router-dom'
import './home.css'
export class Home extends Component {
  /**
   * function to treat two cases
   * 1- case the user connect 
   * 2- case the user is not connect
   */
   toRender(){
      if(localStorage.getItem('token')){
        return (
          <Card className="text-center container text-white bg-dark ">
              
          <Card.Body>
            <Card.Title>Todo List</Card.Title>
            <Card.Text>
            Une todo list, ou liste de tâches, est un procédé qui se veut simple et efficace pour gérer les tâches d'un projet.<br></br> Ces tâches peuvent être indépendantes ou devoir, 
            au contraire, être accomplies dans un certain ordre.
            </Card.Text>
    
          </Card.Body>
        </Card>
          )
      }else{
        return (
          <Card className="text-center container text-white bg-dark ">
              
          <Card.Body>
            <Card.Title>Todo List</Card.Title>
            <Card.Text>
            Une todo list, ou liste de tâches, est un procédé qui se veut simple et efficace pour gérer les tâches d'un projet.<br></br> Ces tâches peuvent être indépendantes ou devoir, 
            au contraire, être accomplies dans un certain ordre.
            </Card.Text>
            
            <Button className="btn btn-primary btn-sm text-white bg-dark mr-2" href = "/register" variant="primary">Inscrire</Button>
            <Button className="btn btn-primary btn-sm text-white bg-dark" href = "/login" variant="primary">Connecter</Button>
          </Card.Body>
        </Card>
          )
      }
    }
    render() {
        return (
            <div className="pding">
              {this.toRender()}
          </div>
        );
    }
}

export default withRouter(Home);
