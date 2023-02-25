import React from "react";

const Assets = (props) => {


    // console.log("assets my data aagia"+props.adrs)
  return (
    <div>
      <div className="row">
        <div
          style={{ textAlign: "center" }}
          className="col-md-1 col-sm-3 col-2"
        >
          <img
            style={{
              width: "30px",
              borderRadius: "100px",
              marginTop: "-10px",
              marginBottom: "-20px",
            }}
            src="https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png"
            className="card-img-top"
            alt="..."
          />
        </div>
        <div style={{ textAlign: "left" }} className="col-md-10 col-sm-8 col-8">
          <p style={{ fontSize: "10" }}>
            <b><p id="minnt"></p>

            </b>
            <br />
            <p style={{ fontSize: "11px", marginTop: "-10px" }}>$0.00 USD</p>
          </p>
        </div>
        <div style={{ textAlign: "right" }} className="col-md-1 col-sm-2 col-2">
          <i style={{ marginTop: "17px"}} className="fas fa-arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Assets;
