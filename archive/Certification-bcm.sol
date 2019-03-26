pragma solidity ^0.4.19;

contract Certification {

    event on_apply_cert(string certId, string certEvent, string certData);
  
    struct CertificationInfo{
        string certId;
        string certEvent;
        string certData;
    }
  
    mapping(string => CertificationInfo) internal info;
  
    function Certification(string _certId) public {
        info[_certId] = CertificationInfo(_certId, "def", "zxc");  
    }
  

 function applyCert(string _certId, string _certEvent, string _certData) public {
       info[_certId] = CertificationInfo(_certId, _certEvent, _certData);

       on_apply_cert(_certId, _certEvent, _certData);
  }
 
 function getCert(string certId) public constant returns(string , string){
       return (info[certId].certEvent, info[certId].certData);
 }

}
