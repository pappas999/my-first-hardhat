async function main() {

    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());
    const erc20Basic = await ethers.getContractFactory("ERC20Basic");
    const deployedContract = await erc20Basic.deploy(100000000);
    console.log("Deployed ERC-20 contract address:", deployedContract.address);

    //send some tokens. Change the address to another address from your MetaMask wallet. Any wallet other than the one you exported your private key can be used
    const result = await deployedContract.transfer('0x0BA3e9178C1459DcF70C64C17740fBF81425063f',10);
    console.log('tokens transferred, txid: ' + result.hash)


  }

  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
