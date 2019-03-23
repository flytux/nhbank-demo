// 블록체인 호출용 Javascript Package 로딩
var Web3 = require('web3');

// 블록체인 노드에 배포된 SmartContract ABI
var ABI = require('./abi-bcm.json');
const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder(ABI);

// 테스트용 Smart Contract 주소

//var CONTRACT_ADDRESS = "0x662f98b4e737473097e8896946066d3f20960d5a";
var CONTRACT_ADDRESS = "0x66773b697c99660a49c50bce4fe6ef79bb77481b";
// 블록체인 노드에 접속
web3 = new Web3(new Web3.providers.HttpProvider("http://10.50.0.2:22000"));

// 블록체인 거래용 계좌 설정
const account = web3.eth.defaultAccount = web3.eth.accounts[1];

// 블록체인 컨트랙트 객체 생성
var NHContract = web3.eth.contract(ABI);
var MyContract = NHContract.at(CONTRACT_ADDRESS);

// 스마트 컨트랙트 출력
//console.log(myContract)

// 블록체인 스마트 컨트랙트 인증서 등록 신청
// 인증서 ID, 인증서 행사정보 , 인증 정보 : JSON

var certId = "NH0001";
var certEvent = "20190408-01";
var certData = "{ \"categoryName\" : \"금융\", \"companyName\" : \"4value\" }";
/*
// INPUT PHASE
web3.eth.getTransactionCount(account, (err, txCount) => {

    const txObject = {
      nonce:    web3.toHex(txCount),
      gasLimit: web3.toHex(1000000), // Raise the gas limit to a much higher amount
      gasPrice: web3.toHex(web3.toWei('10', 'gwei')),
      to : CONTRACT_ADDRESS,
      data : MyContract.applyCert(certId, certEvent, certData)
    };

    // using the promise
    console.log(web3.eth.sendTransaction({ txObject }));
    //.then(function(receipt){
    //    console.log(receipt);
    //});

});
*/


// OUTPUT PHASE
console.log(MyContract.getCert(certId));

