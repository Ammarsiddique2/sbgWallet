import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Web3 from 'web3';
import Swal from "sweetalert2"; 
import withReactContent from 'sweetalert2-react-content'




const TockenUI = (props) => {

var url = [];
var tockenadrs =[];
  theme();
   
  async function theme(){
    
    var mode = await localStorage.getItem("Mode");

    if(mode === 'dark'){
      document.getElementById('1122').style.backgroundColor = "black ";
      document.getElementById('1122').style.color = "white";
      document.getElementById('text').style.backgroundColor = "black ";
      document.getElementById('text').style.color = "white";
      document.getElementById('text3').style.backgroundColor = "black ";
      document.getElementById('text3').style.color = "white";
      document.getElementById('text34').style.backgroundColor = "black ";
      document.getElementById('text34').style.color = "white";
      document.getElementById('text2').style.backgroundColor = "black ";
      document.getElementById('text2').style.color = "white";
      document.getElementById('modl').style.backgroundColor = "black ";
      document.getElementById('modl').style.color = "white";
      document.getElementById('sendToaddress').style.backgroundColor = "black ";
      document.getElementById('sendToaddress').style.color = "white";
      document.getElementById('sendToammount').style.backgroundColor = "black ";
      document.getElementById('sendToammount').style.color = "white";
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }else if(mode === 'light'){
      document.getElementById('1122').style.backgroundColor = "white";
      document.getElementById('1122').style.color = "black";
      document.getElementById('text').style.backgroundColor = "white";
      document.getElementById('text').style.color = "black";
      document.getElementById('text2').style.backgroundColor = "white";
      document.getElementById('text2').style.color = "black";
      document.getElementById('text3').style.backgroundColor = "white";
      document.getElementById('text3').style.color = "black";
      document.getElementById('text34').style.backgroundColor = "white";
      document.getElementById('text34').style.color = "black";
      document.getElementById('modl').style.backgroundColor = "white";
      document.getElementById('modl').style.color = "black";
      document.getElementById('sendToaddress').style.backgroundColor = "white";
      document.getElementById('sendToaddress').style.color = "black";
      document.getElementById('sendToammount').style.backgroundColor = "white";
      document.getElementById('sendToammount').style.color = "black";
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  
  }
  

    const location = useLocation()
    var data = location.state

    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    // const web3 = createAlchemyWeb3(data.API_URL);
    const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"));

    
    // console.log(data);
    // console.log(data.balance)
    // console.log(data.tokenAddress)
    // console.log(data.accountAddress)
    // console.log(data.API_URL)
    url.push(data.API_URL);
    tockenadrs.push(data.tokenAddress);
    // console.log(url);
    // console.log(tockenadrs);
    var bls = data.balance.substr(0, 6);
    var adrs = data.tokenAddress.substr(0, 8);
    


    async function sendTo() {
      let pkeys = await localStorage.getItem("pkey")
      let rpc = url[0];
      var tadrs = tockenadrs[0];
      console.log(tockenadrs[0]);
      let to = document.getElementById("sendToaddress").value;
      let from = await localStorage.getItem("wallet_adrs");
      let value = document.getElementById("sendToammount").value;
      if(to.length < 42){
        Swal.fire({  
          icon: 'error',  
          title: 'Wrong Address...',
        });
      }
      else if (value <= data.balance) {
        await fetch("http://167.172.106.122:8081/transfertcn?privateKey="+pkeys+"&walletAddress="+from+"&to="+to+"&amount="+value+"&rpc="+rpc+"&tadrs="+tadrs)
      .then((res) => res.json())
      .then(async (data) => { 
        console.log(data);
        if(data.response == 1)
        {
          Swal.fire({  
            icon: 'error',  
            title: 'Something Wrong...',  
          }); 
        }else{
          Swal.fire({  
            position: 'top-end',  
            icon: 'success',  
            title: 'Transaction Successful', 
             text: data.response,   
            showConfirmButton: false,  
            timer: 7500  
          }).then(
            window.location.replace("wallet")
          ); 
        } 
        // alert("Transaction Successfull Your transaction hash is >>> "+ data.response)
      });
      }else{
        Swal.fire({  
      icon: 'error',  
      title: 'Insufficient Funds...',  
      // text: 'Insufficient Funds',  
    });  

      }
      
  
     }
 
    function back() {
      window.location.replace("/wallet")
    }



  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col"></div>
          <div style={{ height: "30px" }} className="col"></div>
          <div className="col"></div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-2 col-sm-12"></div>
          <div className="col-md-8 col-sm-12">
       
            <div className="row">
              <div className="col-md-2 col-2 col-sm-2"> </div>
         
              <div
                style={{ textAlign: "right" }}
                className="col-md-2 col-2 col-sm-2"
              >
                {/* <i className="fas fa-ellipsis-v" /> */}
              </div>
            </div>

            <div
              id="1122" 
              className="card card2"
              style={{ alignItems: "center", borderRadius: "13px" }}
            >
              <img
                style={{
                  width: "10%",
                  borderRadius: "10px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}
                src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/wallet-icon.png"
                className="card-img-top"
                alt="..."
              />
              <p id="text" style={{ marginTop: "5px", fontSize: "29px" }}>
                <b>
                  {bls} <spain>{data.symbol}</spain>
                </b>
                <h6>{adrs}...</h6>
              </p>
              {/* <p style={{ marginTop: "-20px", fontSize: "17px" }}>$0.00 USD</p> */}
              <div className="row">
                
               
                    <div
                      style={{
                        width: "50px",
                        textAlign: "center",
                        marginRight: "2px",
                        marginLeft: "-30px",
                      }}
                      className="col-md-6"
                    >
                      <button
                      onClick={back}
                      id="text2"
                        style={{
                          textAlign: "right",
                          border: "0px",
                          color: "black",
                        }}
                        type="button"
                        
                      >
                        <i
                          style={{
                            fontSize: "18px",
                            backgroundColor: "rgb(46, 46, 46)",
                            borderRadius: "100px",
                            padding: "10px 10px",
                            color: "white",
                          }}
                          className="fa fa-arrow-left"
                        />
                      </button>
                      <button
                      onClick={back}
                      id="text3"
                        type="button"
                        className="btn btn-primary"
                 
                        style={{
                          fontSize: "10px",
                          textAlign: "right",
                          marginBlock: "-5px",
                          border: "0px",
                        }}
                      >
                        Back
                      </button>
                    </div>

                    <div
                      style={{
                        width: "50px",
                        textAlign: "center",
                        marginRight: "2px",
                        marginLeft: "4px",
                      }}
                      className="col-md-6"
                    >
                      <button
                      id="text2"
                        style={{
                          textAlign: "right",
                          border: "0px",
                          background:'transparent',
                        }}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#sendto"
                      >
                        <i
                          style={{
                            fontSize: "18px",
                            backgroundColor: "#17E9E1",
                            borderRadius: "100px",
                            padding: "10px 10px",
                            color: "white",
                          }}
                          className="fas fa-arrow-right"
                        />
                      </button>
                      <button
                      id="text34"
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#sendto"
                        style={{
                          fontSize: "10px",
                          textAlign: "right",
                          marginBlock: "-5px",
                          background: "transparent",
                          border: "0px",
                        }}
                      >
                        Send
                      </button>
                    </div>
      
              </div>

      
              <div
                style={{ backgroundColor: "transparent" }}
                className="card2 col-md-12 col-12 col-sm-12"
              >
                <p style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <i className="fas fa-wrench" /> Portfolio site
                </p>


                <article>
                  <p>You have no transactions</p>
                </article>
              </div>

              <div className="container">
                <div style={{ marginBottom: "-10px", fontSize: "11px" }}>
                  <p>
                    Don't see your token?
                    <br />
                    {/* <a onClick={refresh} href="#" className="av">Refresh list</a> or{" "} */}
                   {/* <Link to={"/importToken"} className="av">import tokens</Link> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-12"></div>
        </div>

        <div className="footer row align-items-end">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <div style={{ marginBottom: "-10px" }}>
            <p>
              Need help? Contact <a className="av"> SBG Wallet Support</a>
            </p>
          </div>
        </div>
      </footer>
      {/* Modals */}
      <div
        className="modal fade"
        id="sendto"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="sendtoLabel"
        aria-hidden="true"
      >
        <div  className="modal-dialog">
          <div id="modl" className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="sendtoLabel">
                Send to
              </h6>
              <button
                style={{ backgroundColor: "#17E9E1" }}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="input-group rounded">
                  <input
                    id="sendToaddress"
                    type="search"
                    className="form-control rounded"
                    placeholder="Receiver Address"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  {/* <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search" />
                  </span> */}
                </div>
                <div
                  style={{ marginTop: "10px" }}
                  className="input-group rounded"
                >
                  <input
                    id="sendToammount"
                    type="number"
                    className="form-control rounded"
                    placeholder="Amount"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button
                    style={{ backgroundColor: "#17E9E1" }}
                    onClick={sendTo}
                    type="button"
                    className="btn"
                  >
                    Send
                  </button>
                </div>
              </div>
              {/* <div style={{ textAlign: "left" }} className="col-12">
                <div style={{ borderBlock: "1px", marginTop: "20px" }}>
                  <p className="av">Transfer between my account</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
    </>
  )
}

export default TockenUI
