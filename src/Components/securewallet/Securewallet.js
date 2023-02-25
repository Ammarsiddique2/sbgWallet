import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../sbglogo.png";

const Securewallet = () => {
    return (
        <>
        <div className="container">
        
          <div className="row align-items-start">
            <div style={{height:'120px', textAlign:'left'}} className="col-md-4 col-sm-12"><img style={{width:'30%',marginTop:'60px'}} src={Logo} className="card-img-top" alt="..." /></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        
        
          <div className="row align-items-start">
            <div className="col-md-2"></div>
            <div style={{textAlign:'left'}} className="col-md-5 col-sm-12"><h2>Secure your wallet</h2><br />
            <p style={{fontSize:'10px'}}>Before getting started, watch this short vedioto learn about your Secret Recovery Phrase and how to keep your wallet safe.</p>
            <br />
            <div id="outer">
            {/* <video
                controls=""
                className="video"
                src="https://www.youtube.com/embed/oZIFy76TjJM"
            /> */}
            <iframe className="video" width="100%" height="100%" src="https://www.youtube.com/embed/8U6rdI_uG2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           
            </div>
            
            
            <div style={{textAlign:'left',marginBottom:'10px'}}>
           <Link to={"/phrase"}><a style={{borderRadius:'50px',fontSize:'11px',width: "120px"}} href="#" className="btn btn-primary">
            Create
            </a></Link>
           </div>
            </div>
            <div className="col-md-3 col-sm-12">

            <div className="card card2" style={{ textAlign:'left'}}>
            <div className="card-body">
                <b style={{ fontSize:'12px'}} className="card-title">What is a Secret Recovery Phrase?</b>
                <p style={{ fontSize:'11px'}} className="card-text">
                Your Secret Recovery Phrase is a 12-word pharase that is the "Master key" to your wallet and funds.
                </p>
                <b style={{ fontSize:'12px'}} className="card-title">How do i save my Secret Recovery Phrase?</b>
                <p style={{ fontSize:'11px'}} className="card-text">
                Save in a password manager.<br />
                Stoer in a bank vault.<br />
                Store in a save diposit box<br />
                Write down snd store in multiple secret places.
                </p>
                <b style={{ fontSize:'12px'}} className="card-title">Should i share my Secret Recovery Phrase?</b>
                <p style={{ fontSize:'11px'}} className="card-text">
                Never, ever share your Secret Recovery Phrase. not even with MeteMask!<br />
                if someone asks for your recovery phrase they are likely trying to scam you and stel your wallet funds. 
                </p>
            </div>
            </div>


            </div>
            <div className="col-md-2"></div>
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

export default Securewallet
