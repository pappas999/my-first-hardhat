async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());

    const MyFirstContract = await ethers.getContractFactory("MyFirstContract");
    const deployedContract = await MyFirstContract.deploy();
    console.log("Deployed Storage contract address:", deployedContract.address);


    await deployedContract.setNumber(7)

    let result = BigInt(await deployedContract.getNumber()).toString()
    console.log('Stored value in contract is: ', result)


  }

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
