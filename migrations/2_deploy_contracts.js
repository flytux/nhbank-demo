var Certificate = artifacts.require("./Certification.sol");

module.exports = function(deployer) {
  deployer.deploy(Certificate);
};
