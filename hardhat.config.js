require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",
  networks:{
    hardhat:{
      chainId:1337,
    },
    goerli:{
      url:`https://goerli.infura.io/v3/c6128780f4394b638bd474195daf2eac`,
      accounts:["ae432d8edfb3e223ade94c9c9f6a66e50e12563a4407a047beb69a18f51a7c87"]

      
    }
  }
};
