const RobToken = artifacts.require("RobToken");
const CatToken = artifacts.require("CatToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(deployer, network, accounts) {
  
    //Deploy RobToken
    await deployer.deploy(RobToken);
    const robToken = await RobToken.deployed()

    //Deploy CatToken
    await deployer.deploy(CatToken);
    const catToken = await CatToken.deployed()

    //Deploy TokenFarm
    await deployer.deploy(TokenFarm, robToken.address, catToken.address);
    const tokenFarm = await TokenFarm.deployed()

    // Transfer Tokens to TokenFarm (1 milion)
    await catToken.transfer(tokenFarm.address, '1000000000000000000000000')

    // Transferencia  de los tokens para el Staking
    // await robToken.transfer(accounts[1], '100000000000000000000')
};