const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(callback) {
  let tokenFarm = await TokenFarm.deployed()
  await tokenFarm.issueToken()
  // El codigo va  aqui
  console.log("tokens emitidos!")
  callback()
};
