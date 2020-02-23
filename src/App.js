
import Menu from './components/navBar/Menu'
import { BrowserRouter,Route,Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/login/Login'
import React, { Component } from 'react';
import Tasks from './pages/Tasks/Tasks';
import TaskDetail from './pages/TaskDetail/TaskDetail';
import AddTask from './pages/AddTask/AddTask';
import {PrivateRoute} from './constantes/helper'
export class App extends Component {
  
   render() {
    
    return (
      <div>
       <BrowserRouter>
       <Menu />
       <Route exact path = "/" component={Home }/>
       <Route path = "/register" component={Register}/>
       <Route  path = "/Login" component={Login} />
       
       <PrivateRoute  path = "/tasks" component={Tasks} />
       <PrivateRoute  path = "/task/:id" component={TaskDetail} />
       <PrivateRoute  path = "/addTask" component={AddTask} />
      
       </BrowserRouter>
      </div>
    );
  }
}

export default App;

