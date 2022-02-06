const { ethers, upgrades } = require("hardhat");

async function main() {
	const baseInstance = await ethers.getContractFactory("Pyrrho");
	const baseContract = await baseInstance.deploy();
	console.log("Deployed to:", baseContract.address);
}

main();