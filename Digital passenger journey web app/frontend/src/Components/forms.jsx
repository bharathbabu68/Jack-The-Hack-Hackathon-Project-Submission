import react, { Component } from "react";
import Reactdom from "react-dom";
import {  Container, Row, Col, Button, Figure, Card,DropdownButton,Form,Dropdown, NavDropdown,} from "react-bootstrap";

import "./style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Dish from "./Dish"
import Products from "./Products";

import React from 'react';

class Forms extends Component{
    constructor(props)
    {
        super(props);
        this.state={};
    }
    render(){
        return(
            <>
            <p style={{textAlign:"center",fontSize:"2rem"}}>Fill the form</p>
          <Form>
          <Form.Group style={{width:"40%",marginLeft:"30%"}} className="mb-3 mt-5" controlId="formBasicname">
          <Form.Label>Enter name</Form.Label>
            <Form.Control type="text" placeholder=" Name" />
   
            </Form.Group>

  <Form.Group style={{width:"40%",marginLeft:"30%"}} className="mb-3" controlId="formBasicname">
  <Form.Label>Enter date of birth</Form.Label>
   <Form.Control type="date" placeholder="Date of Birth" />

   </Form.Group>
  
   <DropdownButton size='sm' style={{marginLeft:"30%"}} id="dropdown-item-button" title="Gender">
  <Dropdown.ItemText>Gender</Dropdown.ItemText>
  <Dropdown.Item as="button">Male</Dropdown.Item>
  <Dropdown.Item as="button">Female</Dropdown.Item>
  <Dropdown.Item as="button">Other</Dropdown.Item>
</DropdownButton>
            <Form.Group style={{width:"40%",marginLeft:"30%"}} className="mb-3 mt-3" controlId="formBasicname">
            <Form.Label>Enter Passport no</Form.Label>
            <Form.Control type="text" placeholder="Passport No" />
            
            </Form.Group>


            <Form.Group style={{width:"40%",marginLeft:"30%"}} className="mb-3" controlId="formBasicname">
            <Form.Label>Enter Aadhar number</Form.Label>
            <Form.Control type="text" placeholder="Aadhar no" />
   
            </Form.Group>

            <DropdownButton size='sm' style={{marginLeft:"30%"}} id="dropdown-item-button" title="Type of Covid Test ">
 
  <Dropdown.Item as="button">Rapid PT-PCR</Dropdown.Item>
  <Dropdown.Item as="button">Express PT-PCR</Dropdown.Item>
  <Dropdown.Item as="button">Regular PT-PCR</Dropdown.Item>
</DropdownButton>

<Form.Group style={{width:"40%",marginLeft:"30%"}} className="mb-3 mt-3" controlId="formBasicEmail">
<Form.Label>Enter Email ID</Form.Label>
   <Form.Control type="email" placeholder="Email id" />
   
 </Form.Group>
 
  <Button className="mb-5" variant="primary" type="submit" style={{width:"40%",marginLeft:"30%"}}>
    Submit
  </Button>
</Form>

            </>
        );
    }

}
export default Forms;