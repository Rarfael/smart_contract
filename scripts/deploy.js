const hre = require("hardhat");

async function main() {
  const Bank = await hre.ethers.getContractFactory("Bank");
  const bank = await Bank.deploy();

  await bank.deployed();

  const Likable = await hre.ethers.getContractFactory("Likable");
  const likable = await Likable.deploy();

  await bank.deployed();

  console.log("Contracts deployed to:", bank.address, likable.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
