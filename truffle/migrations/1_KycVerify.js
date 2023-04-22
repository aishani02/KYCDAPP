var KycVerify = artifacts.require("KycVerify");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(KycVerify);
};