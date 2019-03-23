var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://10.50.0.2:22000"));
var coinbase = web3.eth.coinbase;

var CONTRACT_ADDRESS = "0xb0b44e5d37d65e8ed85edda8b49e0ae554501733";
var ACCOUNT_ADDRESS = "0xd4998d8e47f0734da482d59cbd05c5f43c5049dc";
var ABI_CODE = require('./abi.json');

MyContract = new web3.eth.Contract(ABI_CODE, CONTRACT_ADDRESS);
MyContract.options.gas = 3000000;

console.log("-------Contract Initiated--------");
	
var certId = "test";
var certEvent = "test";
var certData = "test";

MyContract.methods.applyCert(certId, certEvent, certData).send({from: ACCOUNT_ADDRESS}, function(error, result){
       	console.log(result);
       });


var result = MyContract.methods.getCert(certId).call({from: ACCOUNT_ADDRESS}, function(error, result){
	        console.log(error);
	});

console.log(result);
  
// Fetch blockData
//app.get('/getBlockInfo/:id', (req, res) => {
	
//        var hash = req.params.id;
//        web3.eth.getTransactionReceipt(hash, function (err, receipt) {
//        if (err) {
//                   error(err);
//        }
//        res.json(receipt);
//        });
//  })

//  app.listen(process.env.PORT || 8080)
