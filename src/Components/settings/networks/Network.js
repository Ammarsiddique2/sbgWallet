import React from "react";
import { Link } from "react-router-dom";

const Network = (props) => {
  return (
    <div style={{fontSize:'12px'}} className="container-fluid">
      <div
        style={{ borderBottom: "1px solid", borderColor: "#17E9E1",color: "black"}}
        className="row"
      >
        <div style={{ marginTop: "15px" }} className="col-5">
          <h6>Network</h6>
        </div>
        <div
          style={{ textAlign: "right", marginTop: "7px", marginBottom: "10px" }}
          className="col-7"
        >
          <Link to={'/wallet'}
          onClick={props.getNetwork}
            style={{ paddingBottom: "0px" }}
            className="btn btn-secondary"
          >
            <h6>Add</h6>
          </Link>
        </div>
      </div>

      <div className="row">
        <div
          style={{ borderRight: "1px solid", borderColor: "#17E9E1" }}
          className="col-6"
        >
          <div className="form-group">
            
            <input
            style={{marginTop:'10px',color:"black"}}
              type="Search"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Search"
            />

          </div>
        <div>
        <label style={{ textAlign:'left',width: "100%" }}>
            Ethereum
        </label>
        <label style={{ textAlign:'left',width: "100%" }}>
            Baba Network
        </label>
        <label style={{ textAlign:'left',width: "100%" }}>
            Mumbai
        </label>
        <label style={{ textAlign:'left',width: "100%" }}>
            Bcs Testnet
        </label>
        </div>
        <div>
        <spain>Test networks</spain>
        <label style={{ textAlign:'left',width: "100%" }}>
            Goreli Testnet
        </label>
        <label style={{ textAlign:'left',width: "100%" }}>
        Sepolia Testnet
        </label>
        <label style={{ textAlign:'left',width: "100%" }}>
            Localhost  8545
        </label>

        </div>


        </div>

        <div
          style={{ borderLeft: "1px solid", borderColor: "#17E9E1" }}
          className="col-6"
        >
        <div style={{marginTop:'7px'}} className="form-group">
            <span >Network name</span>
            <input style={{color:'black'}} type="text" className="form-control" id="Network-name" aria-describedby="Network-name" placeholder="Network name"/>
        </div>
        <div style={{marginTop:'3px'}} className="form-group">
        <span >New RPC URL</span>
            <input style={{color:'black'}} type="text" className="form-control" id="Network-url" aria-describedby="Network-url" placeholder="RPC url"/>
        </div>
        <div style={{marginTop:'3px'}} className="form-group">
        <span >Chain ID</span>
            <input style={{color:'black'}} type="text" className="form-control" id="Network-chain" aria-describedby="Network-chain" placeholder="Id"/>
        </div>
        <div style={{marginTop:'3px'}} className="form-group">
        <span >Currency symbol</span>
            <input style={{color:'black'}} type="text" className="form-control" id="Network-symbol" aria-describedby="Network-symbol" placeholder="ETH"/>
        </div>
        <div style={{marginTop:'3px'}} className="form-group">
        <span >Block explorer URL(Optional)</span>
            <input style={{color:'black'}} type="text" className="form-control" id="Network-explorer" aria-describedby="Network-explorer" placeholder="Optional"/>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Network;
