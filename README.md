# Jack-The-Hack Hackathon Project Submission

## About the Project
- Our project involves the implementation of a seamless platform for the passenger to improve his digital experience at the airport. 
- The platform is in the form of a web app which displays all the essential information pertaining to the travel of the passenger, and with features such as QR code based contactless dining and e-commerce based duty free platform to improve his airport experience.
- It also involves the implementation of a digital one identity using private permissioned blockchain technology - Hyperledger Fabric to develop a highly secure and efficient identity verification system with smart contract based checks conducted at each stage of the airport journey to improve the efficiency of airport operations.

## Demo Videos
- The demo videos of the web app and the blockchain based digital identity platform are present in the given link. Link: https://drive.google.com/drive/folders/1KH3-sauyhEmMxCWLtVOKc3gQ4Dg-mJd0
- The powerpoint presentation involved with our idea submission is present in the given link. Link: https://docs.google.com/presentation/d/1GaDAuqKW3Ug3l-3lKf32xjz2vVJyw5qQ/edit?usp=sharing&ouid=106847231569991502067&rtpof=true&sd=true

## Web App Screenshots
### Dashboard Page
#### Dashboard Home Page
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/dashboard-1.jpeg)

#### Flight API to get live status of flight
![Dashboard-2](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/dashboard-2.jpeg)

#### Weather and Currency API to get live status of destination for the user
![Dashboard-3](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/dashboard-3.jpeg)

#### Announcements and Rewards
![Dashboard-3](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/dashboard-4.jpeg)

### QR Code Based Dining Platform

#### QR Engine Page
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/qrcode-1.jpeg)
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/qrcode-2.jpeg)
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/qrcode-3.jpeg)

### Food Court Page

#### FoodCourt First Page
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/foodcourt-1.jpeg)

#### Carousel to choose cuisine
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/foodcourt-2.jpeg)

#### Receipt of Purchase
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/food-court-3.jpeg)

### Duty Free Page

#### DutyFree First Page
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/duty-free-1.jpeg)

#### Carousel to choose category of product
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/duty-free-2.jpeg)

#### Receipt of purchase from duty free store
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/duty-free-3.jpeg)

### Forms Page
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/forms-1.jpeg)
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Web%20App/forms-2.jpeg)

## Blockchain Based Digital Identity Platform Screenshots
#### Creating and joining an airport channel
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Hyperledger%20Fabric/airport-channel.png)
#### Registering a passenger onto the blockchain
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Hyperledger%20Fabric/registering_passenger.png)
#### Verifying the passenger from government peer
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Hyperledger%20Fabric/verifying_passenger.png)
#### Check-in stage of passenger
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Hyperledger%20Fabric/checkin.png)
#### Security Check stage of passenger
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Hyperledger%20Fabric/security-check.png)
#### Entering gate 
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Hyperledger%20Fabric/enter-gate.png)
#### Boarding Plane
![Dashboard-1](https://github.com/suriyaa333/Jack-The-Hack-Hackathon-Project-Submission/blob/master/Screenshots/Hyperledger%20Fabric/boarded_plane.png)


## Required Tools and Technologies
Frontend: 
- HTML, CSS, Javscript
- ReactJS

Backend
- Node JS, Express
- APIs – OpenWeather, AeroDataBox, CurrencyExchange

Blockchain
- Hyperledger Fabric
- Node JS
- Docker

## Steps to Run the Web Application
1. Install NodeJs, CreateReactApp
2. Install React-Router-DOM
3. Install ReactBootstrap
4. Install Router-DOM
5. Go to the QR/qrcode folder and use command 'npm-start'

##
##
# Digital One Identity Application Using Hyperledger Fabric Blockchain
## Steps to Run the Hyperledger Fabric Application
1. Download and install the latest release of hyperledger fabric
2. Go to the asset-transfer-basic folder -> chaincode-javascript -> lib -> asset-transfer.js. Replace the asset-transfer.js file with the one in the current repository.
3. Now follow the below listed commands. 

## Commands
#### Start Network
./network.sh up
./network.sh createChannel -c airport-channel

#### Deploy Chaincode
./network.sh deployCC -c airport-channel -ccn basic -ccp ../asset-transfer-basic/chaincode-javascript -ccl javascript

#### Point to Org1 MSP:
export PATH=${PWD}/../bin:$PATH
export FABRIC_CFG_PATH=$PWD/../config/
export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
export CORE_PEER_ADDRESS=localhost:7051

#### Invoke chaincode to initialize ledger with assets:
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C airport-channel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"InitLedger","Args":[]}'

#### View all assets in the ledger:
peer chaincode query -C airport-channel -n basic -c '{"Args":["GetAllPassengers"]}'

#### Point to Org2MSP:
export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org2MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp
export CORE_PEER_ADDRESS=localhost:9051

#### Register Passenger onto network
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C airport-channel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"RegisterPassenger","Args":["Eisenhower", "5850","848560224578","negative","2","09/29/2021","London"]}'

#### Verify Passenger Details from Government Side
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C airport-channel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"VerifyPassengerDetails","Args":["5850"]}'

#### Check in Passenger 
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C airport-channel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"CheckInPassenger","Args":["5850"]}'

#### Security Check
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C airport-channel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"SecurityCheck","Args":["5850"]}'

#### Enter Gate
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C airport-channel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"EnterGate","Args":["5850"]}'

#### Board Plane
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C airport-channel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"BoardPlane","Args":["5850"]}'
