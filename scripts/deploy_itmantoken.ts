// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// eslint-disable-next-line import/no-extraneous-dependencies
import hre from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CoderToken = await hre.ethers.getContractFactory("CoderToken");
  const CoderToken = await hre.upgrades.deployProxy(CoderToken);

  await CoderToken.deployed();
  console.log("CoderToken deployed to:", CoderToken.address);
  console.log("Name", await CoderToken.name());
  console.log("Symbol", await CoderToken.symbol());
  console.log("Decimals", await CoderToken.decimals());
  console.log("Total Supply", await CoderToken.totalSupply());
  console.log("Owner", await CoderToken.owner());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
