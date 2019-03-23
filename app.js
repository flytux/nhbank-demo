// 블록체인 호출용 Javascript Package 로딩
var Web3 = require('web3');

// 블록체인 노드에 배포된 SmartContract ABI
const fs = require('fs');
const CONTRACT = JSON.parse(fs.readFileSync('./contracts/Certification.json'));
const NODE_URL = "http://10.50.0.2:22000";

// 테스트용 Smart Contract 주소
var CONTRACT_ADDRESS = "0x5dbedae3a4936919dfe8230294b4224dce4d18fd";
console.log("CONTRACT ADDRESS :", CONTRACT_ADDRESS);

// 블록체인 노드에 접속
web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
console.log("CONNECTED TO :", NODE_URL)

// 블록체인 거래용 계좌 설정
const account = web3.eth.defaultAccount = web3.eth.accounts[0];
//web3.personal.unlockAccount(web3.eth.accounts[1],"",0);
console.log("ACCOUNT ADDRESS :", account)

// 블록체인 컨트랙트 객체 생성
var NHContract = web3.eth.contract(CONTRACT.abi);
var MyContract = NHContract.at(CONTRACT_ADDRESS);

// 스마트 컨트랙트 출력
//console.log(myContract)

// 블록체인 스마트 컨트랙트 인증서 등록 신청
// 인증서 ID, 인증서 행사정보 , 인증 정보 : JSON

var certId = "NH0001";
var certEvent = "20190408-01";
var certData = "{ \"categoryName\" : \"금융\", \"companyName\" : \"4value\" }";

//블록체인에 저장
var hash = MyContract.applyCert(certId, certEvent, certData, {from: web3.eth.accounts[0], gas:3000000})
console.log("트랜잭션 Hash 값 :" ,hash);
console.log("인증서 ID :", certId);

// 인증서 ID로 인증 정보 조회
var result = MyContract.getCert(certId)
console.log("EVENT ID : ", result[0]);
console.log("CERT DATA : ", result[1]);

//console.log(result);
// 조회 결과 출력

// Transaction ID로 블록 정보 조회
// 블록체인에 저장한 트랜잭션 Hash 값으로 결과 조회 : 잘 됨
console.log("TRANSACTION RECEIPT :")
web3.eth.getTransactionReceipt(hash, function (err, receipt) {
    console.info("BLOCK HASH : ", receipt.blockHash);
    console.info("BLOCK NUMBER :", receipt.blockNumber);
    console.info("TRANSACTION Hash :", receipt.transactionHash);
});



