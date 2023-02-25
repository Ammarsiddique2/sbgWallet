import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../sbglogo.png";
const Helpus = () => {
  return (
    <>
    <div className="container">
  <div className="row align-items-start">
    <div className="col"></div>
    <div style={{height:'60px'}} className="col"></div>
    <div className="col"></div>
  </div>
  <div className="row align-items-center">
    <div className="col"></div>
    <div className="col">



    <div className="card" style={{ width: "25rem", alignItems:'left'}}>
    <div style={{textAlign:'left'}} className="card-body">
    <img style={{width:'30%'}} src={Logo} className="card-img-top" alt="..." /><br />
    <i className="fas fa-signal" style={{ fontSize: 50, color: "rgb(128 144 157)" ,paddingTop:'10px',paddingBottom:'10px'}} />
        <h3 className="card-title">Help us improve SBG Wallet</h3>
        <p style={{textAlign:'left',fontSize:'10px'}} className="card-text">
        SBG Wallet would like to gather usage data to better understand how our users intract with the extention. this data 
        will be used to continually improve the usability and user experience of our product and the Ethereum ecossystem.
        </p>
        <h5 style={{fontSize:'12px'}}>SBG Wallet will..</h5>
        <h6 className='para'><i style={{color:'green'}} className="fas fa-check" /><span style={{paddingLeft:'7px'}}>Always allow you to opt-out via Settings</span></h6>
        <h6 className='para'><i style={{color:'green'}} className="fas fa-check" /><span style={{paddingLeft:'7px'}}>Send anonymized click & pageview events</span></h6>
        <p></p>
        <h6 className='para'><i style={{color:'red'}} className="fas fa-times" /><span style={{paddingLeft:'7px'}}><b>Never </b> collect keys, addresses, transactions, balances, hashes, or any personal information</span></h6>
        <h6 className='para'><i style={{color:'red'}} className="fas fa-times" /><span style={{paddingLeft:'7px'}}><b>Never </b> collect your full IP address</span></h6>
        <h6 style={{paddingBottom:'10px'}} className='para'><i style={{color:'red'}} className="fas fa-times" /><span style={{paddingLeft:'7px'}}><b>Never </b> sell data for profet.Ever!</span></h6>
        <Link style={{paddingRight:'10px'}} to={"/"}><a style={{borderRadius:'50px',fontSize:'11px',width: "170px",}} href="#" className="btn btn-outline-primary">
        No thanks
        </a></Link>
        <Link to={"/new"}><a style={{borderRadius:'50px',fontSize:'11px',width: "170px"}} href="#" className="btn btn-primary">
        I agree
        </a></Link><br />
        <p style={{paddingTop:'10px'}} className='para'>This data is aggregated and is therefore anonymous for the purpose of General Data Protection Regulation (EU)2016/679. For the information in relation to our privacy prictices, please see our<Link className='av' to={"/Pravacypolicy"}> Pravacy policy here.</Link></p>
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
  )
}

export default Helpus
