
import { Nav, Navbar } from 'react-bootstrap'
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

export class Menu extends Component {
 
  menuVerification= ()=>{
    if(!localStorage.getItem('token')){
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">TodoList</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
          </Nav>
          <Nav>
              <Nav.Link href="/register">Inscirption</Nav.Link>
              <Nav.Link href="/login">Connecter</Nav.Link>
          </Nav>
        </Navbar>
      );
  
    }
    else
    return(
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">TodoList</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/tasks">Task</Nav.Link>
          </Nav>
          <Nav>
              
              <Nav.Link onClick={this.logout.bind(this)}>Deconnecter</Nav.Link>
          </Nav>
        </Navbar>
    )
  }

  logout(){
      localStorage.removeItem('token');
      
      this.props.history.push('/');
  }
  render() {
    return (
      <div>
      {this.menuVerification()}  
      </div>
    );
  }
}

export default withRouter(Menu);

