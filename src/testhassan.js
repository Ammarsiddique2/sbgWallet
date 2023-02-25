async function main() {
    // require('dotenv').config();
    var API_URL =
    "https://eth-goerli.g.alchemy.com/v2/d3XAlD6RgOfYQmBcWd59GVxLYki-b9bQ";
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '0xA6cc7E1fb43d8aEb6D95cC5eFeB01A5F314d6f31' //TODO: replace this address with your own public address

    const PRIVATE_KEY = "0df09427f6f78e53caf8bcb79a8006cbbe04cd6ca02c39440e77664e7f54024e";
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0
  // console.log(nonce);
    const transaction = {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
     'to': '0x5164F205c6a7f3fEfEe9e7C409012E0F4384c242', // faucet address to return eth
     'value': 100000000000,
     'gas': 30000,
     'maxPriorityFeePerGas': 1000000108,
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };
   
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      // console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      // console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

main();