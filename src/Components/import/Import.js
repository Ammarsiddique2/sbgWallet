import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../sbglogo.png";

import { useEffect, useState } from "react";

const Import = () => {
  const [value, setValue] = useState(0);
  const alt = () => {
    // console.log('import');
    document.getElementById('alt').style.display = "block";
  }
  
function imp() {

  var obj1 = document.getElementById('obj1').value
  var obj2 = document.getElementById('obj2').value
  var obj3 = document.getElementById('obj3').value
  var obj4 = document.getElementById('obj4').value
  var obj5 = document.getElementById('obj5').value
  var obj6 = document.getElementById('obj6').value
  var obj7 = document.getElementById('obj7').value
  var obj8 = document.getElementById('obj8').value
  var obj9 = document.getElementById('obj9').value
  var obj10 = document.getElementById('obj10').value
  var obj11 = document.getElementById('obj11').value
  var obj12 = document.getElementById('obj12').value
  
  var obj = (obj1+' '+obj2+' '+obj3+' '+obj4+' '+obj5+' '+obj6+' '+obj7+' '+obj8+' '+obj9+' '+obj10+' '+obj11+' '+obj12+' ')

  // console.log(obj);


  if (obj == '' || obj == null || obj == undefined) 
  {
      alert("Please fill the fields");
  } else {
// fetch("http://167.172.106.122:8081/machimp?input="+obj)
//   .then(function(res) {
//       return res.json();
//   })
//   .then(function(data) {
//       // console.log(data, "data");
//       if (data.length == 1) {
//           // console.log(data)
//           data.forEach(element => {
//             //  console.log(element)
         
//             Pwdupdate(element)
//             //  console.log(element.username);
//           localStorage.setItem("allow",1);
//           // localStorage.setItem("username",element.username);
//           // console.log(localStorage.getItem("username"));
            
//           // alert("Successfully import");
//         // window.location = 'Admin/index.html';
//           })
//       //  localStorage.getItem(data.email);
//       // Session["user"] = (data.email);
//       // console.log(localStorage.getItem(data.email));
//       } else {
//           alt()
//           localStorage.setItem("allow",false);
//         return 0;
//     }
  
//  });

 fetch("http://167.172.106.122:8081/machimp?input="+obj)
  .then((res) => res.json())
  .then(async (data) => { 
    Pwdupdate(data,obj)
    if (data.length == 1) {
      data.forEach(element => {
      
      localStorage.setItem("allow",1); 
      })

  } else {
      alt()
      localStorage.setItem("allow",false);
    return 0;
}
  });


}

async function Pwdupdate(data,obj) {
// const id = element.Wallet_id
const key = data.privateKey;
const address = data.address.address;
const phrace = obj;

var password = document.getElementById('password').value
var cpassword = document.getElementById('cpassword').value

console.log(password, cpassword);


if (password != cpassword) {
  alert("Passwords do not match");
} else if (password === "" || password === undefined || password === null) {
  alert("Fill in the password field");
} else {
  // const url = "http://167.172.106.122:8081/addimp";

  let data = {
    password: cpassword,
    key : key,
    address: address,
    phrase: phrace,
  };
  localStorage.setItem("account-data", JSON.stringify(data) );
  console.log(data);
  // let request = new Request(url, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: new Headers({
  //     "Content-Type": "application/json",
  //   }),
  // });
  cat(data)
  window.location.replace('./wallet')
  // await fetch(request)
  // .then(function() {
       
  // })
  // .then(async function(){
    
  // })
  // .then(Getdata(cpassword));
   
}




// if(password == null || password == '' || password == undefined){
//   alert("Please enter New Password");
// }else if(cpassword == null || cpassword == '' || cpassword == undefined){
//   alert("Please enter Confirm password");
// }else if(password === cpassword) {

//   const url = `http://167.172.106.122:8081/updatedataimp/${id}`;

//   let data = {
//     password : password,
    
//   }
//   // console.log(password);
//   let request = new Request(url, {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: new Headers({
//     'Content-Type': 'application/json'
//   })
//   });
  
//   await fetch(request)
//   .then(function() {
//     cat(element)   
//   })
//   .then(async function(res){window.location.replace('./wallet')});
// }else{
//   alert("Password does not match");
// }

}

// async function Getdata(cpassword) {
//   await fetch(`http://167.172.106.122:8081/getdata1${cpassword}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let authors = data;
//       setValue(authors[0].Wallet_id);
//       // console.log("Authors" + authors[0].Wallet_id);

//       localStorage.setItem("wallet_id", authors[0].Wallet_id);

//       // window.location.replace("/wallet");
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

function cat(data){
// console.log(data);
  // console.log('id  '+element.Wallet_id)
  // console.log('password  '+element.password)
  // console.log('address  '+element.secret_key)
  // console.log('key  '+element. wallet_address)
  var a = localStorage.getItem("wallet_id");
  // localStorage.setItem("wallet_id",data.Wallet_id);
  localStorage.setItem("wallet_pwd", a );
  localStorage.setItem("wallet_adrs" , data.address);
  localStorage.setItem("pkey" , data.key);

}



}







    return (
    <>
    <div className="container">
    
      <div className="row align-items-start">
        <div style={{height:'50px', textAlign:'left'}} className="col-md-4 col-sm-12"><img style={{width:'30%',marginTop:'2px'}} src={Logo} className="card-img-top" alt="..." /></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    
    
      <div className="row align-items-start">
        <div className="col-md-3"></div>
        <div style={{textAlign:'left'}} className="col-md-6 col-sm-12"><h4>Import a wallet with Secret Recovery Phrase?</h4><br />
        <p className='para'>Only the first account on this wallet will auto load. After completing this process, to add additional accounts, click the drop down menu, then select Create Account.</p>
        <div className="row align-items-start">
            <div className="col-md-6 col-sm-12"><b>Set Recovery Pharase</b></div>
            <div className="col-md-6 col-sm-12">
              <div className="dropdown">
                <button
                    style={{width:'92%',textAlign:'left'}}
                    className="btn btn-outline-secondary dropdown-toggle para"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    I have a 12 word pharase
                </button>
                {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                    <a className="dropdown-item" href="#">
                        Action
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Another action
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a>
                    </li>
                </ul> */}
              </div>
            </div><br />
            <div className="col-md-1"></div>
            <div style={{marginTop:'15px',alignItems:'center',textAlign:'center'}} className='col-md-10 col-sm-12'>
              <div id='alt' style={{borderRadius: '30px',fontSize: '10px', display:'none'}} className="alert alert-info">
                <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
              </div>
            </div>
            <div className="col-md-1"></div>
        </div>

        <div className="row align-items-start">
        <div className="col-md-2 col-sm-12"></div>
        <div id='alert' className="col-md-8 col-sm-12"></div>
        <div className="col-md-2 col-sm-12"></div>
        </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      

      <div className="row align-items-end">
        <div className="col-md-3 col-sm-12"></div>
    
        <div className="mt-3 col-md-6 col-sm-12">
 

        <div style={{display:'flex'}} className="p-19 mb-3">
          <div style={{marginRight:'20px',paddingRight:'5px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>1.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj1"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
          <div style={{marginRight:'20px',paddingRight:'5px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>2.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj2"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
          <div style={{marginRight:'20px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>3.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj3"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
        </div>
        <div style={{display:'flex'}} className="p-19 mb-3">
          <div style={{marginRight:'20px',paddingRight:'5px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>4.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj4"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
          <div style={{marginRight:'20px',paddingRight:'5px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>5.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj5"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
          <div style={{marginRight:'20px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>6.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj6"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
        </div>
        <div style={{display:'flex'}} className="p-19 mb-3">
          <div style={{marginRight:'20px',paddingRight:'5px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>7.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj7"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
          <div style={{marginRight:'20px',paddingRight:'5px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>8.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj8"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
          <div style={{marginRight:'20px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>9.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj9"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
        </div>
        <div style={{display:'flex'}} className="p-19 mb-3">
          <div style={{marginRight:'20px',paddingRight:'5px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>10.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj10"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
          <div style={{marginRight:'20px',paddingRight:'5px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>11.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj11"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
          <div style={{marginRight:'20px'}} className="row input-group mb-3">
            <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>12.</h6>
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="col-11 form-control password"
              id="obj12"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
        </div>

        <div style={{textAlign:'left'}} className='col-md-6 col-sm-12'>
        <h6 style={{marginTop:'10px',fontSize:'10px',textAlign:'left'}}>New Password (8 characters min)</h6>
        <div className="input-group mb-3">
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="form-control password"
              id="password"
              type="text"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
        </div>
        <div style={{alignItems:'left'}} className='col-md-6 col-sm-12'>
        <h6 style={{marginTop:'5px',fontSize:'10px',textAlign:'left'}}>Confirm Password</h6>
        <div className="input-group mb-3">
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="form-control password"
              id="cpassword"
              type="text"
              name="cpassword"
              defaultValue=""
              required=""
            />
          </div>
        </div>

        <div style={{textAlign:'left',fontSize:'10px'}} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
         <p>I have read and agree to the to the <Link className='av' to={'/terms'}>Terms of use</Link></p> 
          </label>
        </div>
       <div style={{textAlign:'left',marginBottom:'10px'}}>
       <a onClick={imp} style={{borderRadius:'50px',fontSize:'11px',width: "120px"}} href="#" className="btn btn-primary">
        Import
        </a>
       </div>

        </div>
        
        <div className="col-md-3 col-sm-12"></div>
      </div>
    
    
      <div className="row align-items-end">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    
    </div>
    
        </>
  )
}

export default Import
