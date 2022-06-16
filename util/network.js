require("dotenv").config();
const fs = require("fs")
const ethers = require("ethers")

function node_url(networkName) {
    if (networkName) {
        console.log(process.env['NET_WORK_RPC_' + networkName.toUpperCase()]);
        return process.env['NET_WORK_RPC_' + networkName.toUpperCase()];
    }

}

function accounts(networkName) {
    let obj = fs.readFileSync(process.env['MNEMONIC_DEPLOYER_' + networkName.toUpperCase()]);
    let password = process.env['NNEMONIC_PASSWORD_' + networkName.toUpperCase()];
    let wallet = ethers.Wallet.fromEncryptedJsonSync(obj, password);
    return [wallet.privateKey];
}

function properties(name) {
    return process.env[name];
}

module.exports = {
    node_url,
    accounts,
    properties
}
