import react, { Component } from "react";
import Reactdom from "react-dom";
import {  Container, Row, Col, Button, Figure, Card,Dropdown} from "react-bootstrap";
import "./style.css"

class Dish extends Component{
    constructor(props)
    {
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <Card style={{ width: '4rem' },{maxHeight:"1%"}}>
                        <Card.Img className="null" style={{borderRadius:"0%",objectFit:"cover"}} variant="top" src={this.props.dish.img_src}/>
                        <Card.Body style={{textAlign:"center"}}>
                            <Card.Title style={{textAlign:"center"}}>{this.props.dish.name.slice(0,25)}</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>
                            {this.props.dish.desc.slice(0,100)}...
                            </Card.Text>
                            <p style={{display:"inline-block"}}>Rs {this.props.dish.price}</p>

                            <Dropdown size="sm" style={{display:"inline-block"}} className="ml-5">
                            <Dropdown.Toggle variant="primary btn-sm"  id="dropdown-basic">
                                Qty
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            <p/>
                            <Button variant="outline-secondary " onClick={()=>{this.props.clickk(3)}}  >Add to Cart</Button>{' '}
                        </Card.Body>
                        </Card>
        );
    }
}
export default  Dish;