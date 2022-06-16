const {save_to_json, getProperties} = require("../util/out");
const hre = require("hardhat");
const {config} = require("./config");

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    const accounts = await hre.ethers.getSigners();
    let igoOwner = accounts[0];
    console.log("owner is ", igoOwner.address);

    const Bep721 = await hre.ethers.getContractFactory("LOCBEP721");
    const bep721 = await Bep721.deploy(config.locBep721.tokenId, config.locBep721.name, config.locBep721.symbol, config.locBep721.baseURI);
    await bep721.deployed();

    save_to_json(config.locBep721.name, {'address' : bep721.address});

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
