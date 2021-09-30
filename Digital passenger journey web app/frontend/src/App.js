import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {  Container, Row, Col, Button, Figure, Card,Dropdown} from "react-bootstrap";
import Test from "./Test";
import Profile from "./Components/Profile";
import Dine from "./Components/Dine";
import Order from "./Components/Order";
import Dutyfree from './Components/Duty free';
import Main from "./Components/Main"
import { BrowserRouter } from "react-router-dom";

var flightNum='UA892';
var travelDate='2021-09-28';
const axios = require('axios').default;
const user={name:""};

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main/>
     
     
 
    </div>
    </BrowserRouter>
  );
}

export default App;
