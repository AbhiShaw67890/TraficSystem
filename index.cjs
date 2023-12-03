const express = require("express");
const app = express();

const { Web3 } = require("web3");

const abi = require("./abi.json");

const PORT = 3000;

const web3 = new Web3(
  "https://sepolia.infura.io/v3/60a43b0c72e443219f833c8b2db38d90"
);

const contract1Address = "0x3C1ABfdCce90acd4ad7228FE275faf5E5ae82860";

const contract1 = new web3.eth.Contract(abi, contract1Address);

console.log(contract1);

app.listen(PORT, () => {
  console.log(`Server is running localhost:${PORT}`);
});