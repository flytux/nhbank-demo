// 블록체인 호출용 Javascript Package 로딩
var Web3 = require('web3');

// 블록체인 노드에 배포된 SmartContract ABI
var ABI = require('./abi.json');
const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder(ABI);

// 테스트용 Smart Contract 주소

var CONTRACT_ADDRESS = "0x156449d1679a1f2ba459722ef428bd5195a7c6c7";
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

//블록체인에 저장
var hash = MyContract.applyCert(certId, certEvent, certData)
console.log("트랜잭션 Hash 값 :" ,hash);
console.log("인증서 ID :", certId);

// 인증서 ID로 인증 정보 조회
var result = MyContract.getCert(certId)

// 현재 확인 중 Remix에서는 잘되는데 여기서는 안보임
console.log(result);
// 조회 결과 출력

// Transaction ID로 블록 정보 조회
// 블록체인에 저장한 트랜잭션 Hash 값으로 결과 조회 : 잘 됨
var receipt = web3.eth.getTransactionReceipt(hash);
console.log("receipt : \n", receipt);

var blockNumber = receipt.blockNumber; 
console.info("Block Number = ", blockNumber);

var info = web3.eth.getBlock(blockNumber, true);
console.log(info);
console.log(decoder.decodeData(info.extraData));
