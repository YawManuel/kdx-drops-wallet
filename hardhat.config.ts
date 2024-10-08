import { HardhatUserConfig } from "hardhat/config";
import crypto from "crypto";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import "hardhat-log-remover";
import "solidity-docgen";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY as string || crypto.randomBytes(32).toString('hex')]
    }
  },
  gasReporter: {
    enabled: true,
    gasPriceApi: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY
  },
  etherscan: {
    apiKey: {
      polygonMumbai: (process.env.POLYGONSCAN_API_KEY as string)
    }
  }
};

export default config;
