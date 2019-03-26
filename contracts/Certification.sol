pragma solidity ^0.4.25;

contract Certification {

 event on_apply_cert(string certId, string certEvent, string certData);
  
 struct CertificationInfo{
     string certId;
     string certEvent;
     string certData;
  }
  
 mapping(string => CertificationInfo) internal info;
  
 function applyCert(string certId, string certEvent, string certData) public {
       info[certId] = CertificationInfo(certId, certEvent, certData);

       on_apply_cert(certId, certEvent, certData);
  }
 
 function getCert(string certId) public view returns(string certEvent , string certData ){
       return (info[certId].certEvent, info[certId].certData);
 }

}
