import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

var Web3 = require('web3')


var url = 'https://eth-goerli.g.alchemy.com/v2/d3XAlD6RgOfYQmBcWd59GVxLYki-b9bQ';


var web3 = new Web3(url)


// var accounts = [];


const Createacc = () => {

async function createacc(){


  let pwd = localStorage.getItem("Password");
  await fetch("http://167.172.106.122:8081/pwdecrypt?pwd="+pwd)
  .then((res) => res.json())
  .then(async (data) => { 
   var p = prompt("Please enter Password" , "");
   if(!p){
     return;
   }else if(p === data.password.password){
    localStorage.setItem("allow", 1);
    var acc = document.getElementById('accname').value
    if(acc == undefined || acc == null || acc == ''){
        alert('Please enter account name');
    }else{
    createAccount()
    }
   }else{
     alert("Password does not match");
   }
  });



    
}

const createAccount = async () => {
	// var accCreate = web3.eth.accounts.create()


  await fetch("http://167.172.106.122:8081/createnew1")
  .then((res) => res.json())
  .then(async (data) => { 
    console.log(data)
    localStorage.setItem("CreateAccount", data.address);
    localStorage.setItem("wallet_adrs", data.address);
    localStorage.setItem("CreateAccountKey", data.privateKey);
    localStorage.setItem("accountAddress", data.address);
    localStorage.setItem("pkey", data.privateKey);

    await localStorage.removeItem("Tokens");
    window.location.replace('/wallet')
  });


	// accounts.push(accCreate);
	// console.log(accounts);
    // console.log(accCreate.address);
    // console.log(accCreate.privateKey);
   
}


theme();
   
async function theme(){
  
  var mode = await localStorage.getItem("Mode");

  if(mode === 'dark'){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById('back').style.backgroundColor = "black ";
    document.getElementById('back').style.color = "white";
    document.getElementById('accname').style.backgroundColor = "black ";
    document.getElementById('accname').style.color = "white";
  }else if(mode === 'light'){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById('back').style.backgroundColor = "white";
    document.getElementById('back').style.color = "black";
    document.getElementById('accname').style.backgroundColor = "white";
    document.getElementById('accname').style.color = "black";
  }

}
function back() {
  window.location.replace("/wallet")
}




  return (
    <div className="container">
    <div className="row align-items-start">
      <div className="col"></div>
      <div style={{ height: "150px" }} className="col"></div>
      <div className="col"></div>
    </div>
    <div className="row align-items-center">
      <div className="col"></div>
      <div className="col">
        <div id="back"
          className="card card2"
          style={{ width: "25rem", alignItems: "center" }}
        >
          <div
            style={{
              width: "90%",
              textAlign: "left",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
           

          </div>

          <div style={{ textAlign: "left" }} className="card-body">
          <h4 className="card-title">Account Name</h4>
            <div style={{ textAlign: "left", paddingBottom:'20px' }}>
             
              <input
              style={{color:'black'}}
                type="text"
                className="form-control"
                id="accname"
                defaultValue='Account'
                aria-describedby="pkey"
                
              />
            </div>

            <Link onClick={back}>
              <a
                style={{
                  borderRadius: "50px",
                  fontSize: "11px",
                  width: "130px",
                  marginRight:'5px'
                }}
               
                className="btn btn-outline-primary"
              >
                Cancel
              </a>
            </Link>
           
            <button
            onClick={createacc}
              style={{
                borderRadius: "50px",
                fontSize: "11px",
                width: "130px",
                marginLeft:'5px'
              }}
              className="btn btn-primary"
            >
              Create
            </button>
           
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
    <div className="row align-items-end">
      <div className="col"></div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
  </div>
  )
}

export default Createacc