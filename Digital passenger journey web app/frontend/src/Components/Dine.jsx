import react, { Component } from "react";
import Reactdom from "react-dom";
import {  Container, Row, Col, Button, Figure, Card } from "react-bootstrap";
import "./style.css"

import { Switch, Route, Redirect } from "react-router-dom";
import Test from "./Test"
class Dine extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            click:0,
            qrvalue:"null"
        };
        this.changeqrvalue=this.changeqrvalue.bind(this);
    }

  changeqrvalue(msg)
    {
        
        this.props.change(msg);
        
        window.location.href="/Order";
        
    }
    
    renderqrscan()
    {
        if(this.state.click===1)
        {
            return (
            <div className="qrdivdine">
                <Test clickk={this.changeqrvalue}/>
            </div>
            )
        }
        else
        return <div></div>
    }

    render(){
        return(
            <>
            <Container fluid className="Dinecontainer">
            <img src="https://csmia.adaniairports.com/images/innerpage-banners/shop-and-dine.jpg" className="Dineimg"/>
            <div className="Dinetextright">Enable QR based Dining</div>
            <div className="Dinetextleft1">Dine in style,</div>
            <div className="Dinetextleft2">with safety</div>
            
            </Container>
            <div className="Dineexpdiv">
            <h3>Introducing QR-Based Dining</h3>
            <p>Enabling you to order food from the food court at your ease, just by scanning a QR-code on your table, and having your food delivered to you.  Thus making it more safer, efficient and a more fun experience.</p>
            </div>
          <Container>
              <Row>
                  <Col md={4}>
                 <i className="fas fa-3x fa-users-slash"></i>
                  
                  <p className="cicon">No more Long queues</p>
                  </Col>
                  <Col md={4}>
                  <i className="fa-3x fas fa-utensils"></i>
                  <p className="cicon">Your food delivered fresh to you</p>
                  </Col>
                  <Col md={4}>
                  <i className="fa-3x fas fa-qrcode"></i>
                  <p className="cicon">No more Long queues</p>
                  </Col>
                  
                  
              </Row>
              <Row style={{marginTop:"30px"}}>
                  <Col md={4}>
                 <i className=" fa-3x fas fa-people-arrows"></i>
                  
                  <p className="cicon">Ensure Social Distancing Guidlines</p>
                  </Col>
                  <Col md={4}>
                  <i className="fa-3x far fa-credit-card"></i>
                  <p className="cicon">Digital Payment Friendly</p>
                  </Col>
                  <Col md={4}>
                  <i className="fa-3x fas fa-leaf"></i>
                  <p className="cicon">Eco Friendly Menus</p>
                  </Col>
                  
                  
              </Row>

              
          </Container>
          <div className="dinebutton" >
          <Button  variant="primary" onClick={async ()=>{ await this.setState({click:1})}}>Order Now</Button>{' '}
                 </div>
              
               {this.renderqrscan()}
              
            </>
        )
    }
    
}
export default Dine;