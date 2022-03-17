const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Bank", function () {
  let Bank, bank, owner;
  beforeEach(async () => {
    Likable = await ethers.getContractFactory("Likable");
    likable = await Likable.deploy();
  });

  it("Should not remove likes if the number of likes is 0", async () => {
    expect(await likable.likes()).to.equal(0);
    await expect(likable.remove()).to.be.revertedWith("Number of likes are 0");
  });

  it("Should add likes", async () => {
    await likable.add();
    expect(await likable.likes()).to.equal(1);
  });

  it("Should remove likes", async () => {
    await likable.add();
    await likable.remove();
    expect(await likable.likes()).to.equal(0);
  });
});
