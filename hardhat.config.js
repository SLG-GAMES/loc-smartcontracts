require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
const {node_url, accounts} = require("./util/network")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      allowUnlimitedContractSize: true,
      blockGasLimit: 10000000000,
      gas: 100000000
    },
    test: {
      url: node_url('test'),
      accounts: accounts('test')
    },
    main: {
      url: node_url('main'),
      accounts: accounts('main')
    }
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: true
  }
};
