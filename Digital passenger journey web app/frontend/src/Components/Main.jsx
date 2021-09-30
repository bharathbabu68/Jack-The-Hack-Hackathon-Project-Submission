import React, { Component } from "react";


import Navbar from './Navbar';
import {  Container, Row, Col, Button, Figure, Card,Dropdown} from "react-bootstrap";
import Test from "./Test";
import Profile from "./Profile";
import Dine from "./Dine";
import Order from "./Order";
import Dutyfree from './Duty free';
import Forms from "./forms";
import { Switch, Route, Redirect } from "react-router-dom";


class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
        qr:"nul"
      };
      this.changeqr=this.changeqr.bind(this);
    }
  
    async changeqr(msg)
    {
       
       await this.setState({qr:msg});
      
       window.location.href="/Order";
    }
  
    render() {
      return (
        <div>
          <Navbar />
  
          <Switch>
            <Route
                exact
              path="/Dashboard"
              component={() => {
                return <Profile />;
              }}
            />
            <Route
              exact
              path="/Dutyfree"
              component={() => {
                return <Dutyfree />;
              }}
            />
             <Route
              exact
              path="/Foodcourt"
              component={() => {
                return <Dine change={this.changeqr} />;
              }}
            />
            <Route
              exact
              path="/Order"
              component={() => {
                return <Order qrvalue={this.state.qr}/>;
              }}
            />
            <Route
              exact
              path="/Forms"
              component={() => {
                return <Forms/>;
              }}
            />
            <Redirect to="/Dashboard" />
          </Switch>
         
        </div>
      );
    }
  }
  
  export default Main;
  