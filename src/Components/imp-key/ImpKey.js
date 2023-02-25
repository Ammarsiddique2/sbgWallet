import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const ImpKey = () => {

const [message, setMessage] = useState('');
var [path, setPath] = useState('');
const handleChange = (event) => {
  setMessage(event.target.value);
};




async function importAccount(message) {
  var dataa = [];
  await fetch("http://167.172.106.122:8081/keyimport?key="+message)
  .then((res) => res.json())
  .then(async (data) => { console.log(data); 

  var storeddata = localStorage.getItem('accountAddress');
  await localStorage.removeItem("Tokens");
  if(data !== null){
  //data[0] = a;
  // console.log(data);
  dataa.push(storeddata)
  dataa.push(message);
  localStorage.setItem("accountAddress", data.address);
  localStorage.setItem("wallet_adrs", data.address);
  localStorage.setItem("pkey", data.privateKey);
}});
  // var result = localStorage.getItem("accountAddress")
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
  }else if(mode === 'light'){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById('back').style.backgroundColor = "white";
    document.getElementById('back').style.color = "black";
    document.getElementById('key').style.backgroundColor = "white";
    document.getElementById('key').style.color = "black";
  }

}
function back() {
  window.location.replace("/wallet")
}







// var key = ''
// function inkey(){
// key = document.getElementById('key').value;
// if (key == null || key == '' || key == undefined)
// {
//   alert('Please enter a key');
// }else{
//   console.log('key ' + key);
//   setData(key);
// }
// }




function go(){
let key = document.getElementById('key').value
  if(key.length >= 64)
  {
    window.location.replace('/wallet');
  }else{
    alert('Please enter valid a key');
  }

}


useEffect(() => {
  // console.log(message)
  var value = message;
  // console.log("Length "+message.length)
  if(message.length >= 64 && message !== null){
    importAccount(message)
    setPath("/wallet")
  }
  else{
    setPath("")
  }
}, [message])

useEffect(() => {
  // console.log("ye path hai "+path)
}, [path])


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
                <h1 className="card-title">Import account</h1>
                <p
                  style={{ textAlign: "left", fontSize: "11px" }}
                  className="card-text"
                >
                  Imported accounts will not be associated with your originally
                  created SBG Wallet account Secret Recovery Phrase. Learn more
                  about imported accounts
                  <Link className="av"> here</Link>
                </p>
              </div>

              <div style={{ textAlign: "left" }} className="card-body">
                <div style={{ textAlign: "left", paddingBottom:'20px' }}>
                  <h6>Enter your private key string here:</h6>
                  <input
                  style={{color:'black'}}
                    type="text"
                    className="form-control"
                    id="key"
                    aria-describedby="pkey"
                    onChange={handleChange}
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
                <Link onClick={go} state={message} >
                <button
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

export default ImpKey;
