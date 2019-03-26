var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://10.50.0.2:22000"));
var coinbase = web3.eth.coinbase;

// var CONTRACT_ADDRESS = "0xb0b44e5d37d65e8ed85edda8b49e0ae554501733";
var CONTRACT_ADDRESS = "0xa361f4971c1ba30db47b37be948273eec05fa84c";
var ACCOUNT_ADDRESS = "0xd4998d8e47f0734da482d59cbd05c5f43c5049dc";
var ABI_CODE = require('./abi.json');

MyContract = web3.eth.contract(ABI_CODE);
// MyContract.options.gas = 3000000;

var nhContract = MyContract.at(CONTRACT_ADDRESS);

console.log(nhContract);

var certId = "test2";
var certEvent = "test2"; 
var certData = "test2";

var result = nhContract.applyCert(certId, certEvent, certData);
console.log(result);

//MyContract.methods.applyCert(certId, certEvent, certData).send({from: ACCOUNT_ADDRESS}, function(error, result){
//       console.info(result);
//});

//result = MyContract.methods.getCert(certId).call({from: ACCOUNT_ADDRESS}, function(error, result){
//        console.log(error);
//});
	
var hash = "0x5f8dcc6b982ac2168224744f1e834c04c7f3edd7007d6e011d3a2e5c05bb1e41";
web3.eth.getTransactionReceipt(hash, function (err, receipt) {
    console.info(receipt);
});
