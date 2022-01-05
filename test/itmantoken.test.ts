import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("CoderToken", () => {
  it("Should return the token name", async () => {
    const CoderToken = await ethers.getContractFactory("CoderToken");
    const CoderToken = await upgrades.deployProxy(CoderToken);
    await CoderToken.deployed();

    expect(await CoderToken.name()).to.equal("CoderToken");
  });

  it("Should return the token symbol", async () => {
    const CoderToken = await ethers.getContractFactory("CoderToken");
    const CoderToken = await upgrades.deployProxy(CoderToken);
    await CoderToken.deployed();

    expect(await CoderToken.symbol()).to.equal("ITM");
  });

  it("Should return decimals", async () => {
    const CoderToken = await ethers.getContractFactory("CoderToken");
    const CoderToken = await upgrades.deployProxy(CoderToken);
    await CoderToken.deployed();

    expect(await CoderToken.decimals()).to.equal(18);
  });

  it("Should have total supply", async () => {
    const CoderToken = await ethers.getContractFactory("CoderToken");
    const CoderToken = await upgrades.deployProxy(CoderToken);
    await CoderToken.deployed();

    expect(await CoderToken.totalSupply()).to.equal(ethers.BigNumber.from("1000000000000000000000000"));
  });
});
