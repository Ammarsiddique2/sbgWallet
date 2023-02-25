import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// {
//   "name": "SBG Wallet",
//   "description":"Open Your Wallet",
//   "version":"1.0",
//   "manifest_version": 3,
//   "action": {
//     "default_title": "SBG Wallet",
//     "default_popup": "index.html",
//     "icons": {
//       "16": "favicon.ico",
//       "48": "logo192.png",
//      "128": "logo512.png"
//     }
//   },  
//   "permissions": ["activeTab","scripting"],
//   "host_permissions": ["https://*/","http://*/"],
//   "start_url": ".",
//   "display": "standalone",
//   "theme_color": "#000000",
//   "background_color": "#ffffff"
// }





// {TokensData == null || TokensData == undefined || TokensData.length <= 0 ?"":
//                   TokensData.map((TokensDatas) => (
//                     <div className="row">
//                       <div
//                         style={{ textAlign: "center" }}
//                         className="col-md-1 col-sm-3 col-2"
//                       >
//                         <img
//                           style={{
//                             width: "30px",
//                             borderRadius: "10px",
//                             marginTop: "0px",
//                             marginBottom: "-39px",
//                           }}
//                           src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/wallet-icon.png"
//                           className="card-img-top"
//                           alt="..."
//                         />
//                       </div>
//                       <div
//                         style={{ textAlign: "left" }}
//                         className="col-md-10 col-sm-8 col-8"
//                       >
//                         <p style={{ fontSize: "10", marginBottom: "5px" }}>
//                           <b>
//                             <p id="minnt"></p>
//                             {TokensDatas.symbol}
//                           </b>
//                           {/* <br /> */}
//                           <p style={{ fontSize: "11px", marginTop: "-10px" }}>
//                             {TokensDatas.balance}
//                           </p>
//                         </p>
//                       </div>
//                       <div
//                         style={{ textAlign: "right", marginTop: "13px" }}
//                         className="col-md-1 col-sm-2 col-2"
//                       >
//                         <Link to={"/token"}  state={TokensDatas}><i
//                           style={{ marginTop: "17px" }}
//                           className="fas fa-arrow-right"
//                         /></Link>
//                       </div>
//                     </div>
//                   ))}
                  











// if(TokensDataOld === '' || TokensDataOld === null || TokensDataOld === undefined){
//   alert('No TokensData');
//   var user = {
//     balance: tdata.balance,
//     tokenAddress: tdata.tokenAddress,
//     accountAddress: tdata.accountAddress,
//     symbol: tdata.symbol,
//   };

//   localStorage.setItem("Tokens", JSON.stringify(user));
// }













