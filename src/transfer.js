var Web3 = require("web3");

var url =
  "https://eth-goerli.g.alchemy.com/v2/d3XAlD6RgOfYQmBcWd59GVxLYki-b9bQ";

var web3 = new Web3(url);

const send = async () => {


const nonce = await web3.eth.getTransactionCount("0xA6cc7E1fb43d8aEb6D95cC5eFeB01A5F314d6f31", 'latest'); // nonce starts counting from 0

const transaction = {
  'from': "0xA6cc7E1fb43d8aEb6D95cC5eFeB01A5F314d6f31",
 'to': '0xC9ea92cB3E7636417cD062A7e449cB69045Ab07C', // faucet address to return eth
 'value': 100000000000000, // 0.001 ETH
 'gas': 30000, 
 'nonce': nonce,chain:'mumbai', hardfork: 'petersburg',
//  'hardfork': 'petersburg',
     'maxPriorityFeePerGas': 1000000108,

};
const signedTx = await web3.eth.accounts.signTransaction(transaction, "0df09427f6f78e53caf8bcb79a8006cbbe04cd6ca02c39440e77664e7f54024e");

web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
  if (!error) {
    // console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
  } else {
    // console.log("❗Something went wrong while submitting your transaction:", error)
  }
 });

// const signedTx = await web3.eth.accounts.signTransaction(transaction, "45256694d186a3482de1d2ffe59a02d239724a108d95893b717d714b6ed65574");
// console.log(signedTx);
// const sending = await web3.eth.sendTransaction(signedTx.rawTransaction);
// console.log(sending)

}

send();