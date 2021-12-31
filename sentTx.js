async function main() {
  require('dotenv').config();
  const { API_URL, PRIVATE_KEY } = process.env;
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  const web3 = createAlchemyWeb3(API_URL);
  const myAddress = '0x5e6a9aC8F834cd9c1f464c4674F5CCe59C5b5cE2' //TODO: replace this address with your own public address
   
  try {

    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

    // const transaction = {
    //  'to': '0x31B98D14007bDEe637298086988A0bBd31184523', // faucet address to return eth
    //  'value': 100,
    //  'gas': 30000,
    //  'maxFeePerGas': 1000000108,
    //  'nonce': nonce,
    //  // optional data field to send message or execute smart contract
    // };

    const transaction = {
      'latest'
      'to': '0x31B98D14007bDEe637298086988A0bBd31184523', // faucet address to return eth
      'value': 100,
      'gas': 30000,
      'maxFeePerGas': 1000000108,
      'nonce': nonce,
    }
   
    const signedTx = await web3.eth.accounts.eth_getBalance(transaction, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
   } catch {(error) => {

      console.log("error ", error)
   }}
}

main();