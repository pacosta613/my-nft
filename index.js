async function main() {
 const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
 const web3 = createAlchemyWeb3("https://eth-ropsten.alchemyapi.io/v2/-YkrJ58bIpLuqt-3Tin7SgATO8r8Hf2t");
 
 try {

     const blockNumber = await web3.eth.getBlockNumber();
     console.log("The latest block number is " + blockNumber);
 } catch {(error) => {
    console.log("error ", error)
 }}
 
}
main();