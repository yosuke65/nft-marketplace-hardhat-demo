const projectId = "5822e07d2c85454aa687380b5ef9f942";

const fs = require("fs");
const keyData = fs.readFileSync("./p-key.txt", {
  encoding: "utf8",
  flag: "r",
});
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337, // config standard
    },
  },
  mumbai: {
    url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
    accounts: [keyData],
  },
  mainnet: {
    url: `https://mainnet.infura.io/v3/${projectId}`,
    accounts: [keyData],
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
