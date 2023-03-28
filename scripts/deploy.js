async function main(){
  const Box=await ethers.getContractFactory("Box");
  console.log("Deploying Box Contract...");
  const box=await upgrades.deployProxy(Box,[10],{initializer:"Store"});
  console.log("box deployed to : ",box.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1);
})
