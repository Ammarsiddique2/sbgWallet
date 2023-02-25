import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; 
import withReactContent from 'sweetalert2-react-content'

const Web3 = require("web3");
const web3 = new Web3(
  "https://eth-goerli.g.alchemy.com/v2/d3XAlD6RgOfYQmBcWd59GVxLYki-b9bQ"
);



const ImportToken = () => {

const [tocknadrs, settocknadrs] = useState('');
const [path, setPath] = useState('');
const handleChange = (event) => {
  settocknadrs(event.target.value);
};

async function importAccount(tocknadrs) {
var API_URL = await localStorage.getItem("rpcUri");
var TokensDataOld = JSON.parse(localStorage.getItem("Tokens") || "[]");
var tocken = []; 
// '0xAd4294E7BBA282dc7F4115032EF1e394c7317324'
const tokenAddress = tocknadrs;
const accountAddress = localStorage.getItem('wallet_adrs');

await fetch("http://167.172.106.122:8081/imptoken?rpc="+API_URL+"&wallet="+accountAddress+"&token="+tokenAddress)
.then((res) => res.json())
.then(async (data) => { 
  if(data.symbol == undefined){
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong!',
    }); 
  }else if(data !== undefined || data !== ''){
  document.getElementById('symbol').innerHTML = data.symbol;

  const tdata = {balance : data.balance , tokenAddress : data.token_address , accountAddress : data.wallet_address , symbol : data.symbol , API_URL : data.rpc};

  getTokendata(tdata)
  }
});

      function getTokendata(tdata){
      for (var i = 0; i < TokensDataOld.length; i++) {
          settocknadrs((tocknadrs) => [...tocknadrs, TokensDataOld[i]]);
        }
        var dataNet = tdata;
        if (dataNet === null || dataNet === "" || dataNet <= 0) {
  
        } else {
          settocknadrs([]);
  
          TokensDataOld.forEach(function (user, index) {
          });
          var user = {
            balance: dataNet.balance,
            tokenAddress: dataNet.tokenAddress,
            accountAddress: dataNet.accountAddress,
            symbol: dataNet.symbol,
            API_URL: dataNet.API_URL,
          };
          TokensDataOld.push(user);
          // console.log("Added user #" + user.network);
    
          localStorage.setItem("Tokens", JSON.stringify(TokensDataOld));
          localStorage.setItem("OldTokens", JSON.stringify(TokensDataOld))
      }

        if(TokensDataOld == null || TokensDataOld == undefined || TokensDataOld == ''){    
        }else {
          console.log(tdata)
          tocken.push(TokensDataOld);
        }
        // tocken.push(tdata);
        // localStorage.setItem("Tokens", JSON.stringify(tocken));
      }

  // var result = localStorage.getItem("impoeracc") 
}


theme();
   
async function theme(){
  
  var mode = await localStorage.getItem("Mode");

  if(mode === 'dark'){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById('back').style.backgroundColor = "black ";
    document.getElementById('back').style.color = "white";
    document.getElementById('key').style.backgroundColor = "black ";
    document.getElementById('key').style.color = "white";
    document.getElementById('symbol').style.backgroundColor = "black ";
    document.getElementById('symbol').style.color = "white";
  }else if(mode === 'light'){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById('back').style.backgroundColor = "white";
    document.getElementById('back').style.color = "black";
    document.getElementById('key').style.backgroundColor = "white";
    document.getElementById('key').style.color = "black";
    document.getElementById('symbol').style.backgroundColor = "white";
    document.getElementById('symbol').style.color = "black";
  }

}
function back() {
  window.location.replace("/wallet")
}






useEffect(() => {
  console.clear();
  var value = tocknadrs;
  if(tocknadrs.length > 6 && tocknadrs !== null){
    importAccount(tocknadrs)
    setPath("/wallet")
    
  }
  else{
    setPath("")
  }
}, [tocknadrs])

useEffect(() => {
}, [path])
console.clear();

  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col"></div>
          <div style={{ height: "150px" }} className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row align-items-center">
          <div className="col"></div>
          <div className="col">
            <div 
            id="back" 
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
                <h1 className="card-title">Import Token</h1>
                <p
                  style={{ textAlign: "left", fontSize: "11px" }}
                  className="card-text"
                >
                  Token detection is not available on this network yet. Please import token manually and make sure you trust it. Learn about scams and security risks.
                  <Link className="av"> here</Link>
                </p>
              </div>

              <div style={{ textAlign: "left" }} className="card-body">
                <div style={{ textAlign: "left", paddingBottom:'20px' }}>
                  <h6>Token contract address</h6>
                  <input
                  style={{color :'black'}}
                    type="text"
                    className="form-control"
                    id="key"
                    aria-describedby="pkey"
                    onChange={handleChange}
                  />
                </div>
                <div style={{ textAlign: "left", paddingBottom:'20px' }}>
                  <h6>Token symbol</h6>
                  <p
                    type="text"
                    className="form-control"
                    id="symbol"
                  ></p>
                
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
                <Link state={tocknadrs}>
                <button
                onClick={back}
                  style={{
                    borderRadius: "50px",
                    fontSize: "11px",
                    width: "130px",
                    marginLeft:'5px'
                  }}
                  className="btn btn-primary"
                >
                  Import
                </button>
                </Link> 
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
    </>
  );
};

export default ImportToken;
