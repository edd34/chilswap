const UniswapV2Router02 = artifacts.require("UniswapV2Router02");

module.exports = function (deployer) {
  deployer.deploy(UniswapV2Router02, factory_address, weth_address);
};
