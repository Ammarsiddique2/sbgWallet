import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../sbglogo.png";

import Network from './networks/Network';


const Setting = (props) => {


    function Gengral(){
        document.getElementById('Gengralp').style.display = 'block';
        document.getElementById('Advancedp').style.display = 'none';
        document.getElementById('Contactp').style.display = 'none';
        document.getElementById('Securityp').style.display = 'none';
        document.getElementById('Alertsp').style.display = 'none';
        document.getElementById('Networksp').style.display = 'none';
        document.getElementById('Experimentalp').style.display = 'none';
        document.getElementById('Aboutp').style.display = 'none';
    }
    function Advanced(){
        document.getElementById('Gengralp').style.display = 'none';
        document.getElementById('Advancedp').style.display = 'block';
        document.getElementById('Contactp').style.display = 'none';
        document.getElementById('Securityp').style.display = 'none';
        document.getElementById('Alertsp').style.display = 'none';
        document.getElementById('Networksp').style.display = 'none';
        document.getElementById('Experimentalp').style.display = 'none';
        document.getElementById('Aboutp').style.display = 'none';
    }
    function Contact(){
        document.getElementById('Gengralp').style.display = 'none';
        document.getElementById('Advancedp').style.display = 'none';
        document.getElementById('Contactp').style.display = 'block';
        document.getElementById('Securityp').style.display = 'none';
        document.getElementById('Alertsp').style.display = 'none';
        document.getElementById('Networksp').style.display = 'none';
        document.getElementById('Experimentalp').style.display = 'none';
        document.getElementById('Aboutp').style.display = 'none';
    }
    function Security(){
        document.getElementById('Gengralp').style.display = 'none';
        document.getElementById('Advancedp').style.display = 'none';
        document.getElementById('Contactp').style.display = 'none';
        document.getElementById('Securityp').style.display = 'block';
        document.getElementById('Alertsp').style.display = 'none';
        document.getElementById('Networksp').style.display = 'none';
        document.getElementById('Experimentalp').style.display = 'none';
        document.getElementById('Aboutp').style.display = 'none';
    }
    function Alerts(){
        document.getElementById('Gengralp').style.display = 'none';
        document.getElementById('Advancedp').style.display = 'none';
        document.getElementById('Contactp').style.display = 'none';
        document.getElementById('Securityp').style.display = 'none';
;        document.getElementById('Alertsp').style.display = 'block';
        document.getElementById('Networksp').style.display = 'none';
        document.getElementById('Experimentalp').style.display = 'none';
        document.getElementById('Aboutp').style.display = 'none';
    }
    function Networks(){
        document.getElementById('Gengralp').style.display = 'none';
        document.getElementById('Advancedp').style.display = 'none';
        document.getElementById('Contactp').style.display = 'none';
        document.getElementById('Securityp').style.display = 'none';
        document.getElementById('Alertsp').style.display = 'none';
        document.getElementById('Networksp').style.display = 'block';
        document.getElementById('Experimentalp').style.display = 'none';
        document.getElementById('Aboutp').style.display = 'none';
    }
    function Experimental(){
        document.getElementById('Gengralp').style.display = 'none';
        document.getElementById('Advancedp').style.display = 'none';
        document.getElementById('Contactp').style.display = 'none';
        document.getElementById('Securityp').style.display = 'none';
        document.getElementById('Alertsp').style.display = 'none';
        document.getElementById('Networksp').style.display = 'none';
        document.getElementById('Experimentalp').style.display = 'block';
        document.getElementById('Aboutp').style.display = 'none';
    }
    function About(){
        document.getElementById('Gengralp').style.display = 'none';
        document.getElementById('Advancedp').style.display = 'none';
        document.getElementById('Contactp').style.display = 'none';
        document.getElementById('Securityp').style.display = 'none';
        document.getElementById('Alertsp').style.display = 'none';
        document.getElementById('Networksp').style.display = 'none';
        document.getElementById('Experimentalp').style.display = 'none';
        document.getElementById('Aboutp').style.display = 'block';
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
                {/* /////////////////////////////////////////////////////////////         */}
                <div style={{marginBottom:'20px'}} className="row">
                  <div
                    style={{ textAlign: "left" }}
                    className="col-md-6 col-6 col-sm-6"
                  >
                    <img
                      style={{ width: "120px", marginTop: "-5px" }}
                      src={Logo}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div
                    style={{ textAlign: "right" }}
                    className="col-md-5 col-5 col-sm-3"
                  >
                
                  </div>
                  <div className="col-md-1 col-sm-3 col-1">
                 
                  </div>
                </div>
                {/* ////////////////////////////////////////////////////////////////////// */}
                
    
                <div
                  className="card card2"
                  style={{  borderRadius: "13px" }}
                >
                    
                <div className='row'>
                <div style={{textAlign:'left'}} className='col-4 '>
               
                {/* <label  onClick={Gengral} style={{ textAlign:'left', width: "100%",marginTop:'23px' }} htmlFor="Gengral">
                  Gengral
                </label>
                <br /> */}
                
                {/* <label onClick={Advanced}  style={{ textAlign:'left',width: "100%" }}>
                  Advanced
                </label> */}
                
                {/* <label onClick={Contact} style={{ textAlign:'left',width: "100%" }} >
                  Contact
                </label> */}
                
                {/* <label onClick={Security} style={{textAlign:'left', width: "100%" }}>        
                Security
                </label> */}
                
                {/* <label onClick={Alerts} style={{ textAlign:'left',width: "100%" }} >        
                Alerts
                </label> */}
               
                {/* <label onClick={Networks} style={{ textAlign:'left',width: "100%" }} >               
                Networks
                </label> */}
                
                {/* <label onClick={Experimental} style={{ textAlign:'left',width: "100%" }} >        
                Experimental
                </label> */}
                
                {/* <label onClick={About} style={{ textAlign:'left',width: "100%" }} >        
                About
                </label> */}
                </div>
                <div className='col-12'>
                
                <div style={{display:'block',textAlign:'left'}} id='Gengralp' className="container">
                <Network getNetwork = {props.getNetwork} />
                </div>

                <div style={{display:'none',textAlign:'left'}} id='Advancedp' className="container">
                 <h1>Advanced</h1>
                </div>

                <div style={{display:'none',textAlign:'left'}} id='Contactp' className="container">
                 <h1>Contact</h1>
                </div>

                <div style={{display:'none',textAlign:'left'}} id='Securityp' className="container">
                 <h1>Security</h1>
                </div>

                <div style={{display:'none',textAlign:'left'}} id='Alertsp' className="container">
                 <h1>Alerts</h1>
                </div>

                <div style={{display:'none',textAlign:'left'}} id='Networksp' className="container">
                 <Network getNetwork = {props.getNetwork} />
                </div>

                <div style={{display:'none',textAlign:'left'}} id='Experimentalp' className="container">
                 <h1>Experimental</h1>
                </div>

                <div style={{display:'none',textAlign:'left'}} id='Aboutp' className="container">
                 <h1>About</h1>
                </div>


                </div>

                </div>




                
    
                  <div style={{ backgroundColor: "transparent",height:'25px' }}>

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
     
      
        </>
      );
}

export default Setting