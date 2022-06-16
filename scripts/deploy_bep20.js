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

    const Bep20 = await hre.ethers.getContractFactory("SLGBEP20");
    const bep20 = await Bep20.deploy(ethers.utils.parseEther(config.slgBep20.totalSupply), config.slgBep20.name, config.slgBep20.symbol);
    await bep20.deployed();

    save_to_json(config.slgBep20.name, {'address' : bep20.address});

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
