import React from 'react'
import { Link , useNavigate } from "react-router-dom";
import Logo from "../../sbglogo.png";

// import { aaa } from '../functions.js';

const Create = (props) => {

  return (
    <>
    <div className="container">
    
      <div className="row align-items-start">
        <div style={{height:'170px', textAlign:'left'}} className="col-md-4 col-sm-12"><img style={{width:'30%',marginTop:'60px'}} src={Logo} className="card-img-top" alt="..." /></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    
    
      <div className="row align-items-start">
        <div className="col-md-4"></div>
        <div style={{textAlign:'left'}} className="col-md-4 col-sm-12"><h4>Create password</h4><br />
     
        </div>
        <div className="col-md-4"></div>
      </div>
      

      <div className="row align-items-end">
        <div className="col-md-4 col-sm-12"></div>
    
        <div className="mt-3 col-md-4 col-sm-12">
 

        <div style={{textAlign:'left'}} className='col-md-12 col-sm-12'>
        <h6 style={{marginTop:'10px',fontSize:'10px',textAlign:'left'}}>New Password (8 characters min)</h6>
        <div className="input-group mb-3">
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="form-control password"
              id="password"
              type="password"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
        </div>
        <div style={{alignItems:'left'}} className='col-md-12 col-sm-12'>
        <h6 style={{marginTop:'5px',fontSize:'10px',textAlign:'left'}}>Confirm Password</h6>
        <div className="input-group mb-3">
            <input
            style={{borderRadius:'10px',paddingRight:'10px'}}
              className="form-control password"
              id="cpassword"
              type="password"
              name="password"
              defaultValue=""
              required=""
            />
          </div>
        </div>
        {/* className="form-check" */}
        <div style={{textAlign:'left',fontSize:'10px'}} >
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
         
         <p>I have read and agree to the to the <Link className='av' to={'/terms'}>Terms of use</Link></p> 
          
        </div>
       <div style={{textAlign:'left',marginBottom:'10px'}}>
       {/* <Link to={"/securewallet"}><a style={{borderRadius:'50px',fontSize:'11px',width: "120px"}} href="#" className="btn btn-primary">
        Create
        </a></Link> */}
       <button onClick={props.test} style={{borderRadius:'50px',fontSize:'11px',width: "120px"}} className="btn btn-primary">
        Create
        </button>
       </div>

        </div>
        
        <div className="col-md-4 col-sm-12"></div>
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

export default Create
