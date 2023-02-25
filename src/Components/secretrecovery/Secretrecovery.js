import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../../sbglogo.png";

const Secretrecovery = () => {
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
            <div style={{textAlign:'left'}} className="col-md-5 col-sm-12"><h2>Secret Recovery Phrase</h2><br />
            <p style={{fontSize:'13px'}}>Your Secret Recovery Phrase makes it easy to back up and restore your account.
            <br />
            <br />
            WARNING: Never disclose your Secret Recovery Phrase. Anyone with this pharase can take your Ether forever.
            </p>
            
            <br />
            <div style={{width:'70%',marginBottom:'20px',}} className="card card2">
            <div className="card-body">
                <p style={{ fontSize:'13px',textAlign:'center'}} className="card-text">
                blue razor require fitness demand enhance hurdle point field hunt act bonus
                </p>
                
            </div>
            </div>
            
            
            <div style={{textAlign:'left',marginBottom:'10px',width:'70%'}}>
           <Link to={"/wallet"}><a style={{borderRadius:'50px',fontSize:'11px',width: "48%",marginRight:'10px'}} href="#" className="btn btn-outline-primary">
            Remind me later
            </a></Link>
            <Link to={"/wallet"}><a style={{borderRadius:'50px',fontSize:'11px',width: "48%"}} href="#" className="btn btn-primary">
            Next
            </a></Link>
           </div>
            </div>
            <div className="col-md-3 col-sm-12">

            <div className="card" style={{ textAlign:'left'}}>
            <div className="card-body">
                <p style={{ fontSize:'13px'}} className="card-text">
                Tips:
                </p>
                
                <p style={{ fontSize:'12px'}} className="card-text">
                Store this phrase in a password manager like 1Password.
                </p>
                <p style={{ fontSize:'12px'}} className="card-text">
                Write this phraseon a piece of paper and store in a secure location. if you want even more securty, write it down on multiple pieces of paper and store each in 2 - 3 different locations. 
                </p>
                <p style={{ fontSize:'12px'}} className="card-text">
                Memorize this phrase.
                </p>
                <Link className='av' to={'/'}><b style={{fontFamily:'inherit',fontSize:'13px'}}> Download this Secret Recovery Phrase and keeo is stored safely on an external encrypted hard drive or storage medium.</b></Link>

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

export default Secretrecovery
