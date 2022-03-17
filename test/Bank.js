const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Bank", function () {
  let Bank, bank, owner;
  beforeEach(async () => {
    Bank = await ethers.getContractFactory("Bank");
    bank = await Bank.deploy();
    [owner] = await ethers.getSigners();
  });

  it("Should add tokens to the user balance", async () => {
    await bank.addToBalance({ from: owner.address, value: 50 });
    expect(await bank.getBalance(owner.address)).to.equal(50);
  });

  it("Should withdraw balance from user wallet", async () => {
    await bank.addToBalance({ from: owner.address, value: 50 });
    await bank.withdrawBalance({from: owner.address});
    expect(await bank.getBalance(owner.address)).to.equal(0);
  });

});
