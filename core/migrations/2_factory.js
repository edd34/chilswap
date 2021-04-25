const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function (deployer) {
  deployer.deploy(UniswapV2Factory, user_address_that_is_going_to_receive_fee);
};
