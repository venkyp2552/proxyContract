const argumentsArray=require("../arguments.js");

async function main(){
    let deployTimeArgumentArrays=argumentsArray[0];
    let proposersArray=argumentsArray[1];
    let executorsArray=argumentsArray[2];

    const [deployer]=await ethers.getSigners();
    console.log("Deploying contracts with the account:",deployer.address);
    console.log("Account Balance:",await deployer.getBalance().toString());

    const Token=await ethers.getContractFactory("TimelockController");
    const token=await Token.deploy(deployTimeArgumentArrays,proposersArray,executorsArray);
    console.log("Time Lock address:",token.address);
}

main()
.then(() => process.exit(0))
.catch((err) => {
    console.log("Error Occured",err);
    process.exit(1);
})