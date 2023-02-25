import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../sbglogo.png";
const Newtometamask = () => {
  return (
    <>
<div className="container">

  <div className="row align-items-start">
    <div style={{height:'150px'}} className="col-md-4 col-sm-12"><img style={{width:'30%',marginTop:'80px'}} src={Logo} className="card-img-top" alt="..." /></div>
    <div className="col"></div>
    <div className="col"></div>
  </div>

  <div className="row align-items-start">
    <div className="col"></div>
    <div style={{height:'3px'}} className="col"></div>
    <div className="col"></div>
  </div>

  <div className="row align-items-start">
    <div className="col-md-2"></div>
    <div style={{height:'70px'}} className="col-md-8 col-sm-12"><h4>New to SBG Wallet?</h4></div>
    <div className="col-md-2"></div>
  </div>
  

  <div className="row align-items-end">
    <div className="col-md-2 col-sm-12"></div>

    <div style={{height:'100%'}} className="col-md-4 col-sm-12">
        <div className="card card2">
        <i style={{fontSize:'30px',color:'gray',paddingTop:'24px',paddingBottom:'22px'}} className="fas fa-download" />
        <div className="card-body">
            <h6 className="card-title">No, I already have a Secret Recovery Phrase</h6>
            <p className="card-text">
            Import your existing wallet using Secret Recovery Phrace
            </p>
            <Link to={"/import"}><a style={{borderRadius:'50px',fontSize:'11px',width: "170px"}} href="#" className="btn btn-primary">
            Import wallet
            </a></Link>
        </div>
    </div>
    </div>
    
    <div style={{height:'100%'}} className="col-md-4 col-sm-12">
        <div className="card card2">
        <i style={{fontSize:'30px',color:'gray',paddingTop:'24px',paddingBottom:'25px'}} className="fas fa-plus" />
    <div className="card-body">
        <h6 className="card-title">Yes, let's get set up!</h6>
        <p className="card-text">
       This will create a new wallet and Secret Recovery Phrase
        </p>
        <Link to={"/create"}><a style={{borderRadius:'50px',fontSize:'11px',width: "170px"}} href="#" className="btn btn-primary">
        Create a wallet
        </a></Link>
    </div>
    </div> 
    </div>

    <div className="col-md-2 col-sm-12"></div>
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

export default Newtometamask


