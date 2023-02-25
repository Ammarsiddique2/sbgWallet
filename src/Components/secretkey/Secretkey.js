import React from 'react'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2"; 
import { Container } from 'react-dom'
const Secretkey = () => {
  chack();
  theme();
  async function chack(){
    var a = await localStorage.getItem('allow')
    if (a === "1"){
    }
    else(
      window.location.replace('/wallet')
    )
  } 

//   return;
// }else if (a !== 1){
//   return;
// }else if (a === 1){}

  async function theme(){
    
    var mode = await localStorage.getItem("Mode");

    if(mode === 'dark'){
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById('back').style.backgroundColor = "black ";
      document.getElementById('back').style.color = "white";
      document.getElementById('heading').style.backgroundColor = "black ";
      document.getElementById('heading').style.color = "white";
      document.getElementById('hb').style.backgroundColor = "black ";
      document.getElementById('hb').style.color = "white";
      document.getElementById('key12').style.backgroundColor = "black ";
      document.getElementById('key12').style.color = "white";
      document.getElementById('text2').style.backgroundColor = "black ";
      document.getElementById('text2').style.color = "white";
 
    }else if(mode === 'light'){
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById('back').style.backgroundColor = "white";
      document.getElementById('back').style.color = "black";
      document.getElementById('heading').style.backgroundColor = "white";
      document.getElementById('heading').style.color = "black";
      document.getElementById('hb').style.backgroundColor = "white";
      document.getElementById('hb').style.color = "black";
      document.getElementById('key12').style.backgroundColor = "white";
      document.getElementById('key12').style.color = "black";
      document.getElementById('text34').style.backgroundColor = "white";
      document.getElementById('text34').style.color = "black";
 
    }
  
  }
  function back() {
    window.location.replace("/wallet");
    localStorage.setItem("allow", 0);
  }

  // var pkeys = localStorage.getItem("pkey")
  var keys = [];
  getSecretkey()
    // console.log(pkey)
    // var data = document.getElementById('key12').innerHTML = pkeys;

   async function getSecretkey() {
    var pkeys = localStorage.getItem("pkey")
    
    await fetch("http://167.172.106.122:8081/decrypt?input="+pkeys)
    .then((res) => res.json())
    .then(async (data) => { 
     console.log(data.privateKey);
     keys.push( data.privateKey.privateKey);
     document.getElementById('key12').innerHTML = data.privateKey.privateKey;
    });

   }



    function copy() {
        var copyText = keys;
        var textField = document.createElement("textarea");
        textField.innerText = copyText;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
        Swal.fire({  
          icon: 'success',  
          title: 'Copy To Clipboard.', 
          showConfirmButton: false,  
          timer: 500   
        });  
      }

  return (
    <div id='back'>
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
              id='hb'
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
                <h1 id='heading' className="card-title">Secret Key</h1>
                {/* <p
                  style={{ textAlign: "left", fontSize: "11px" }}
                  className="card-text"
                >
                  Token detection is not available on this network yet. Please import token manually and make sure you trust it. Learn about scams and security risks.
                  <Link className="av"> here</Link>
                </p> */}
              </div>

              <div style={{ textAlign: "left",width:'100%' }} className="card-body">
                <div style={{ textAlign: "left", paddingBottom:'20px' }}>
                  <h6>Do Not Share Your private key With Anyone</h6>
                  <container 
                  style={{width:'100%'}}
                    className="form-control"
                    id="key12"
                    aria-describedby="pkey"
                  ><div id='key12' style={{width:'100%'}}></div></container>
                </div>

                <Link onClick={back}>
                  <a
                    style={{
                      borderRadius: "50px",
                      fontSize: "11px",
                      width: "175px",
                      marginRight:'5px'
                    }}
                   
                    className="btn btn-outline-primary"
                  >
                    Cancel
                  </a>
                </Link>
                
                <button
                onClick={copy}
                  style={{
                    borderRadius: "50px",
                    fontSize: "11px",
                    width: "175px",
                    marginLeft:'5px'
                  }}
                  className="btn btn-primary"
                >
                  Copy
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
    </div>
  )
}

export default Secretkey
