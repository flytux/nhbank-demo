pragma solidity ^0.4.19;

contract Certification {

    event on_apply_cert(string certId, string certEvent, string certData);

    struct certificationInfo{
        string certId;
        string certEvent;
        string certData;
    }

    mapping(string => certificationInfo) info;


    function applyCert(string certId, string certEvent, string certData) public {
        info[certId] = certificationInfo(certId, certEvent, certData);
        on_apply_cert(certId, certEvent, certData);
    }

    function getCert(string certId) public view returns(string certEvent , string certData ){
        return (info[certId].certEvent, info[certId].certData);
    }

}
