import react, { Component } from "react";
import Reactdom from "react-dom";
import { Container, Row, Col, Button, Figure, Card,Carousel } from "react-bootstrap";
import "./style.css"
import newss from './News';
import userdetails from "./userdetails";

var flightNum='UA892';
var travelDate='2021-09-28';

const axios = require('axios').default;
const user={name:""};
const https = require("https");


var status;
const options = {
  method: 'GET',
  url: 'https://aerodatabox.p.rapidapi.com/flights/number/'+ flightNum + '/' + travelDate , //'UA892/2021-09-28',
  headers: {
    'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
    'x-rapidapi-key': '0e76b53271mshd86ead006632675p1a5aa8jsn53541d530bcb',
    useQueryString: true
  }
};
var k=0;
var temp=20;
class Profile extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            news:newss,
            user:userdetails[1],
            scheduledArrTime:"-",
            baggageBelt:"-",
            flight : "-",
            airlineName : "-",
            actualArrTimeLocal : "-",
            scheduledArrTimeLocal : "-",
            lastUpdatedUtc : "-",
            terminal : "-",
            baggageBelt : "-",
            status:"-",
            temperature:temp,
            weathericon:"-"



        };

    }
  
    render(){
      var destination=this.state.user.To;
      var iconlink="https://openweathermap.org/img/w/"+this.state.weathericon+".png";
   
        return(
            <>

            <Container fluid  style={{padding:"0"}}>
            <Row>
              <Col md={4} className="mainpage-imagebackround" style={{backgroundColor:"#0093E9"}} >
              <h1 className="dutytext" style={{marginTop:"20%",padding:"20px",fontFamily:"roboto"}}>To most people sky is the limit. To those who love aviation, sky is home</h1>
                        
              </Col>
              <Col md={8} style={{marginLeft:"-15px"}}>

            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 cimage"
      src="https://csmia.adaniairports.com/images/traveller-banner05.jpg"
      alt="First slide"
    />
  <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cimage"
      src="https://static.toiimg.com/thumb/msid-77845117,width-1200,height-900,resizemode-4/.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 cimage"
      src="https://csmia.adaniairports.com/images/traveller-banner03.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Col>

</Row>

            </Container>


            <Container fluid>
              <Row style={{backgroundColor:"#FCFFA6"}}>
                <Col md={4}>
                  <h1  className="dutytext mt-5 ml-3" style={{fontSize:"1.5rem"}}>Boarding Pass</h1>
                </Col>
                <Col md={8}>
                  <h1  className="dutytext mt-5 ml-3" style={{fontSize:"1.5rem"}}>Live Flight Status</h1>
                </Col>
                
              </Row>
            </Container>


            <Row style={{backgroundColor:"#FCFFA6",paddingBottom:"30px"}}>
                <Col xs md={4}>
               
            <div className="mt-3" id="outer">
  <div id="inner">
    <img src="https://thumbs.dreamstime.com/b/art-illustration-200165197.jpg" />
  </div>
  <div id="art">
    <div id="first-dot" />
    <hr id="line-1" />
    <i className="fa fa-plane" style={{fontSize: '24px'}} />
    <hr id="line-2" />
    <div id="second-dot" />
  </div>
  <div id="pass">
    <p id="loc1">{this.state.user.Scode}</p>
    <p id="loc2">{this.state.user.Dcode}</p>
  </div>
  <div id="pass-long">
    <p id="loc1-long">{this.state.user.From}</p>
    <p id="loc2-long">{this.state.user.To}</p>
  </div>
  <div id="passenger-details">
    <p>Passenger: {this.state.user.name}</p>
    <p>Departure Time: {this.state.user.Departuretime}</p>
    <p>Gate: {this.state.user.Gate}</p>
    <p>BoardingTime: {this.state.user.Boardingtime}</p>
  </div>
  <div id="bar-code">
    <img src="https://www.thechecker.net/hubfs/images/barcode.png" alt="" />
  </div>
</div>
            
        </Col>
       
        <Col className="mt-3" style={{backgroundColor:"lightblue" ,padding:"30px",borderRadius:"30px"}} md={7}>
           
                  <div >
                      <div style={{backgroundColor:"#D4ECDD"}} id="main-flight-status-box">
                      <div id="fstatus-loc1">
                          <h1>MAA</h1>
                      </div>
                      <div id="line-flight-status-box">
                          <hr id="line-one-fs-box"/>
                          <i className="fa fa-plane" style={{fontSize:"30px"}}/>
                          <hr id="line-two-fs-box"/>
                      </div>
                      <div id="fstatus-loc2">
                          <h1>SYD</h1>
                      </div>
                      <div id="fs-loc1-desc">{this.state.user.From}</div>
                      <div id="fs-time-left-desc">2.5 hours</div>
                      <div id="fs-loc2-desc">{this.state.user.To}</div>
                      </div>
                </div>

                      

                        <Row className="mt-5">
                              <Col className="mb-5 ml-3" style={{backgroundColor:"#F9F3DF",borderRadius:"20px",padding:"10px"}} md={5}>
                              <Row>
                                <Col md={5} >
                                  Dep Time
                                  <p className="mt-1" style={{textAlign:"left"}}>{this.state.user.Departuretime}</p>
                                </Col>
                                <Col md={3}>
                                  Terminal
                                  <p className="mt-1" style={{textAlign:"left"}}>C</p>
                                </Col>
                                <Col md={4}>
                                  Gate
                                  <p  className="mt-1" style={{textAlign:"left"}}>5A</p>
                                </Col>
                              </Row>
                              </Col>
                        
                              <Col className="mb-5 ml-5" style={{backgroundColor:"#F9F3DF",borderRadius:"20px",padding:"10px"}} md={5}>
                              <Row>
                                <Col  md={5}>
                                  Arrival Time
                                  <p className="mt-1" style={{textAlign:"left"}}>{this.state.scheduledArrTimeLocal}</p>
                                </Col>
                                <Col md={3}>
                                  Terminal
                                  <p className="mt-1" style={{textAlign:"left"}}>{this.state.terminal}</p>
                                </Col>
                                <Col md={4}>
                                  Belt
                                 <p className="mt-1" style={{textAlign:"left"}}>{this.state.baggageBelt}</p>
                                </Col>
                              </Row>
                              </Col>
                        </Row>
                        
                       
                        


                        <Button size="lg" style={{width:"100%"}} onClick={async ()=>{
                          fetch('https://aerodatabox.p.rapidapi.com/flights/number/'+ flightNum + '/' + travelDate , {
                            method: 'GET',
                            headers: {
                              'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
                              'x-rapidapi-key': '0e76b53271mshd86ead006632675p1a5aa8jsn53541d530bcb',
                              useQueryString: true
                            },
                           
                        })
                        .then(function(res){
                          
                          return res.json()
                        }).then((r)=>{
                          const airlineName = r[0].airline.name;
                          const actualArrTimeLocal = r[0].arrival.scheduledTimeLocal;
                          const scheduledArrTimeLocal = r[0].arrival.actualTimeLocal;
                          const lastUpdatedUtc =r[0].lastUpdatedUtc;
                          const terminal = r[0].arrival.terminal;
                          const baggageBelt = r[0].arrival.baggageBelt;
                          status = r[0].status;
                          this.setState({flight:airlineName});
                          this.setState({actualArrTimeLocal:actualArrTimeLocal});
                          this.setState({scheduledArrTimeLocal:scheduledArrTimeLocal});
                          this.setState({lastUpdatedUtc:lastUpdatedUtc});
                          this.setState({terminal:terminal});
                          this.setState({baggageBelt});
                          
                          
                        })
                        }}>REFRESH</Button>
                         

                      
             </Col>
          
            </Row>
            <Container fluid className="weatherbody">
              <Row>
                <Col md={6}>
            <h1  className="dutytext mt-5 ml-3" style={{fontSize:"1.5rem"}}>Live Weather Forecast At {this.state.user.To}</h1>
               
            <div className="widget " >
            
            <div className="left-panel panel">
                <div className="date">
                    {this.state.user.ToDate}
                </div>
                <div className="city">
                    {destination}
                </div>
                <div className="temp">
                  
                   <img src={iconlink} alt="" width="60"/>
                   {this.state.temperature}&deg;
                </div>
            </div>
            <div className="right-panel panel">
                <img src="data:image/png;base64,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" alt="" width="160"/>
            </div>

        </div>
        

        </Col>
        
          <Col md={6}>
          <h1  className="dutytext mt-5 ml-3" style={{fontSize:"1.5rem"}}>Live Exchange Rates</h1>

          <div className="widget " >
            
            <div className="left-panel panel">
                <div className="date">
                    {this.state.user.ToDate}
                </div>
                <div  className="city" style={{fontSize:"2.6rem"}}>
                    AUD Vs INR
                </div>
                <div  className="temp mb-5" style={{fontSize:"2rem"}}>
                  1 AUD=53.71 INR
                </div>
            </div>
            <div className="right-panel panel">
            <img src="https://cdn-icons-png.flaticon.com/512/66/66634.png" alt="" width="70" />
            </div>

        </div>

           
          </Col>

        </Row>
        <Button  size="sm"  onClick={()=>{

          var cityName=this.state.user.To;
          fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=e20113c383a655c58fd64e828df4f3fd'+ "&units=metric")
          .then(response=>response.json())
          .then(data => {this.setState({temperature:Math.round(data.main.temp)})
            this.setState({weathericon:data.weather[0].icon})}

          );


}}>REFRESH</Button>

       
        
            </Container>
           
            <Container fluid>
              <Row>
                <Col md={6}>
                <div className="widget" style={{height:"70%"}}>
                <h4>Announcements</h4>
                <div className="mt-5">
                    <marquee direction="up" >
                    {this.state.news.map((n)=> {
                        return <p className="newstext"><i className="fas fa-exclamation-triangle"></i>  {n}</p>
                        })}
                    </marquee>

                </div>
                </div>
                </Col>

          <Col md={6}>
          <div  className="widget" style={{height:"70%"}}>
                          <h4 className="mb-3">Rewards</h4>
                      <i className="fa-3x fas fa-coins "></i>
                  
                      <h5 className="newstextt">Points Remaining: {this.state.user.Points}</h5>
                    {300-this.state.user.Points} points expiring this month
                    <p>Redeem your points for exciting offers and discounts
                      at the food court/Duty Free shopping</p>

                      </div>
                                  
                    
                    

                    
             </Col>
            </Row>
            </Container>

            </>
         
        
        )
    }
}
export default Profile
