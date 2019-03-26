pragma solidity ^0.4.19;

contract Certification {

 event on_apply_cert(string certId, string certEvent, string certData);
  
 struct CertificationInfo{
     string certId;
     string certEvent;
     string certData;
  }
  
 mapping(string => CertificationInfo) internal info;
  
    function Certificate() public {
  
  }
 
 function applyCert(string memory certId, string memory certEvent, string memory certData) public {
       info[certId] = CertificationInfo(certId, certEvent, certData);

       on_apply_cert(certId, certEvent, certData);
  }
 
 function getCert(string certId) public view returns(string certEvent , string certData ){
       return (info[certId].certEvent, info[certId].certData);
 }

}
