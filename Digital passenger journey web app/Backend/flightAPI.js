const request = require('request');
var flightNum='UA892';
var travelDate='2021-09-28';

const express=require("express");
const bodyparser=require("body-parser");
var cors = require('cors')

const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
var status;

app.post("/",async function(req,res){

 
  const options = {
    method: 'GET',
    url: 'https://aerodatabox.p.rapidapi.com/flights/number/'+ flightNum + '/' + travelDate , //'UA892/2021-09-28',
    headers: {
      'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
      'x-rapidapi-key': '0e76b53271mshd86ead006632675p1a5aa8jsn53541d530bcb',
      useQueryString: true
    }
  };
  
  await request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
      const flight = JSON.parse(body);
      const airlineName = flight[0].airline.name;
      const actualArrTimeLocal = flight[0].arrival.scheduledTimeLocal;
      const scheduledArrTimeLocal = flight[0].arrival.actualTimeLocal;
      const lastUpdatedUtc = flight[0].lastUpdatedUtc;
      const terminal = flight[0].arrival.terminal;
      const baggageBelt = flight[0].arrival.baggageBelt;
       status = flight[0].status;
      console.log(airlineName);
      console.log(actualArrTimeLocal);
      console.log(scheduledArrTimeLocal);
      console.log(lastUpdatedUtc);
      console.log(terminal);
      console.log(baggageBelt);
      console.log(status);
      console.log(body);
      
  });
  res.send(status);
});



app.get("/",async function(req,res){

  
  const options = {
    method: 'GET',
    url: 'https://aerodatabox.p.rapidapi.com/flights/number/'+ flightNum + '/' + travelDate , //'UA892/2021-09-28',
    headers: {
      'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
      'x-rapidapi-key': '0e76b53271mshd86ead006632675p1a5aa8jsn53541d530bcb',
      useQueryString: true
    }
  };
  
  await request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
      const flight = JSON.parse(body);
      const airlineName = flight[0].airline.name;
      const actualArrTimeLocal = flight[0].arrival.scheduledTimeLocal;
      const scheduledArrTimeLocal = flight[0].arrival.actualTimeLocal;
      const lastUpdatedUtc = flight[0].lastUpdatedUtc;
      const terminal = flight[0].arrival.terminal;
      const baggageBelt = flight[0].arrival.baggageBelt;
       status = flight[0].status;
      console.log(airlineName);
      console.log(actualArrTimeLocal);
      console.log(scheduledArrTimeLocal);
      console.log(lastUpdatedUtc);
      console.log(terminal);
      console.log(baggageBelt);
      console.log(status);
      console.log(body);
      
  });
  res.send(status);
});

app.listen(8000,function(){
  console.log("listening");
  });

