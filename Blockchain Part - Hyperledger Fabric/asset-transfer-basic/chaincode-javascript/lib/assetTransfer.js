'use strict';

const { Contract } = require('fabric-contract-api');
const crypto = require('crypto');

// Org1MSP is basically the aiport peer and Org2MSP is the government peer

class DigitalOneIdentity extends Contract{
    async InitLedger(ctx){
        const passenger_details = [
            {
                passenger_num: '1540',
                passenger_name: "James",
                passport_number: "XFGH983",
                aadhar_number: "456287529630",
                rtpcr_result: "negative",
                vaccine_status: 2,
                id_verified_status: "false",
                airport_current_stage: 1,
                destination_country: "United Kingdom",
                current_forms_filled: 3,
                allowed_to_board: "nil",
                date_of_journey: "09/29/2021",
                check_in_status: "nil",
                security_check_status: "nil",
                entered_gate: "nil",
                dangerous_items: "false",
                board_plane: "nil",
            },
        ];
        for(const passenger of passenger_details){
            passenger.doctype='passenger';
            await ctx.stub.putState(passenger.passenger_num, Buffer.from(JSON.stringify(passenger)));
            console.info(`Request ${passenger.passenger_num} has been submitted`);  
        }
    }

    async RegisterPassenger(ctx, name_of_pass, pass_num, aadhar_num, rtpcr_res, vaccine_stat, date_of_journ, dest_country){
        let resval = ctx.clientIdentity.getMSPID();
        if(resval==="Org1MSP"){
            console.log("You are a verified member of the airport authority, hence beginning registration process of passenger. ")
            const passenger = {
                passenger_name:name_of_pass,
                passport_number: pass_num,
                aadhar_number: aadhar_num, 
                rtpcr_result: rtpcr_res,
                vaccine_status: vaccine_stat,
                id_verified_status: "false",
                airport_current_stage:1,
                destination_country: dest_country,
                current_forms_filled:3,
                allowed_to_board: "nil",
                date_of_journey: date_of_journ,
                check_in_status: "nil",
                security_check_status: "nil",
                entered_gate: "nil",
                dangerous_items: "false",
                board_plane: "nil",
            }
            console.log("Passenger has been registered successfully");
            await ctx.stub.putState(pass_num, Buffer.from(JSON.stringify(passenger)));
            return JSON.stringify(passenger);
        }
        else{
            console.log("You are not a verified member of the airport authority, hence please contact airport staff to register this customer. ")
        }
    }

    async GetAllPassengers(ctx) {
        const allResults = [];
        const iterator = await ctx.stub.getStateByRange('', '');
        let result = await iterator.next();
        while (!result.done) {
            const strValue = Buffer.from(result.value.value.toString()).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: result.value.key, Record: record });
            result = await iterator.next();
        }
        return JSON.stringify(allResults);
    }

    async VerifyPassengerDetails(ctx, passenger_no){
        let resval = ctx.clientIdentity.getMSPID(); 
        if(resval==="Org2MSP"){
            console.log("You have been signed in as a member of the government body, proceeding to verify passenger details");
            const request = await ctx.stub.getState(passenger_no);
            const res = JSON.parse(request);
            let cnt=0;
            if(res.passenger_num!=0)
                cnt++;
            if(res.passenger_name!="nil")
                cnt++;
            if(cnt!=0)
                res.id_verified_status="true";
            console.log("Number of validations passed: " + cnt);
            await ctx.stub.putState(passenger_no, Buffer.from(JSON.stringify(res)));
        }
        else{
            console.log("You dont have access permissions to verify passenger details");
        }
    }

    async CheckInPassenger(ctx, passenger_no){
        let resval = ctx.clientIdentity.getMSPID(); 
        if(resval==="Org1MSP"){
            console.log("Beginning check-in procedure for passenger " + passenger_no);
            const request = await ctx.stub.getState(passenger_no);
            const res = JSON.parse(request);
            if(res.airport_current_stage>1){
                console.log("Passenger has already checked in");
            }
            else{
                let cnt=0;
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); 
                var yyyy = today.getFullYear();
                today = mm + '/' + dd + '/' + yyyy;
                today=String(today);
                if(res.date_of_journey===today)
                    cnt++;
                if(res.rtpcr_result==="negative")
                    cnt++;
                if(res.vaccine_status==2)
                    cnt++;
                if(res.id_verified_status==="true")
                    cnt++;
                if(cnt==4){
                    console.log("Passenger has been successfully checked-in");
                    res.airport_current_stage++;
                    res.check_in_status="true";
                }
                else{
                    console.log("Passenger is not allowed to check-in due to incomplete requirements");
                    res.check_in_status="false";
                }
                await ctx.stub.putState(passenger_no, Buffer.from(JSON.stringify(res)));
            }
        }
        else{
            console.log("You dont have access permissions to check-in a passenger");
        }
    }

    async SecurityCheck(ctx, passenger_no){
        let resval = ctx.clientIdentity.getMSPID(); 
        if(resval==="Org1MSP"){
            console.log("Proceeding to conduct security check on passenger");
            const request = await ctx.stub.getState(passenger_no);
            const res = JSON.parse(request);
            if(res.airport_current_stage<2){
                console.log("please complete other procedures first");
            }
            else if(res.airport_current_stage>2){
                console.log("Security check has already been conducted");
            }
            else{
                let cnt=0;
                if(res.dangerous_items==="true")
                    cnt++;
                if(cnt==1){
                    res.security_check_status="Failed";
                    console.log("passenger prevented from security check due to carrying prohibited items");
                }
                else{
                    console.log("passenger has passed all security checks");
                    res.security_check_status="Passed";
                    res.airport_current_stage++;
                }
                await ctx.stub.putState(passenger_no, Buffer.from(JSON.stringify(res)));
            }
        }
        else{
            console.log("You dont have access permissions to conduct security checks");
        }
    }

    async EnterGate(ctx, passenger_no){
        let resval = ctx.clientIdentity.getMSPID(); 
        if(resval==="Org1MSP"){
            console.log("Proceeding to enter passenger through gate");
            const request = await ctx.stub.getState(passenger_no);
            const res = JSON.parse(request);
            if(res.airport_current_stage>3){
                console.log("passenger has already entered gate");
            }
            else if(res.airport_current_stage<3){
                console.log("please complete other procedures first");
            }
            else{
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); 
                var yyyy = today.getFullYear();
                today = mm + '/' + dd + '/' + yyyy;
                today=String(today);
                let cnt=0;
                if(today===res.date_of_journey)
                    cnt++;
                if(res.current_forms_filled>=3)
                    cnt++;
                if(cnt==2){
                    console.log("passenger has been allowed to enter gate");
                    res.airport_current_stage++;
                    res.entered_gate="yes";
                }
                else{
                    console.log("Please fill the required forms");
                    res.entered_gate="false";
                }
                await ctx.stub.putState(passenger_no, Buffer.from(JSON.stringify(res)));
            }
        }
        else{
            console.log("You dont have access permissions to allow passenger through the gate");
        }
    }

    async BoardPlane(ctx, passenger_no){
        let resval = ctx.clientIdentity.getMSPID(); 
        if(resval==="Org1MSP"){
            const request = await ctx.stub.getState(passenger_no);
            const res = JSON.parse(request);
            if(res.airport_current_stage==4){
                console.log("Passenger has successfully boarded the plane");
                res.airport_current_stage++;
                res.BoardPlane="True";
            }
            else{
                console.log("Passenger not allowed to board plane");
            }
            await ctx.stub.putState(passenger_no, Buffer.from(JSON.stringify(res)));
        }
        else{
            console.log("You dont have access permissions to allow passenger to board the plane");
        }
    }
}

module.exports = DigitalOneIdentity;