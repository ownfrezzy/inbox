const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
const provider = new HDWalletProvider(
  "swing only glory affair slam ramp quick legend empower cupboard secret boil",

  "https://rinkeby.infura.io/v3/47e9ff9c060243f5aa397b484d6ae5a1"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`Attempting to deploy from: ${accounts[0]}`);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log(`Succesfuly deployed: ${result.options.address}`);
};

deploy();
