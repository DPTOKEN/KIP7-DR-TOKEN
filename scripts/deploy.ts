import { ethers } from "hardhat";

async function main() {
  const ERC20 = await ethers.getContractFactory("DR");
  const erc20 = await ERC20.deploy();

  await erc20.deployed();

  console.log(`DR deployed to ${erc20.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
