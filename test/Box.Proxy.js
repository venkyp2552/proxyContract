const {expect}=require("chai");
const {ethers,upgrades}=require("hardhat");

let Box;
let box;

describe("test Box Proxy Functionlity", function(){
    beforeEach(async function(){
        Box=await ethers.getContractFactory("Box");
        box=await upgrades.deployProxy(Box,[10],{initializer:"Store"});
    })

    it("Retrive returns a value Prviously Initilized..", async function(){
        expect((await box.Retrive()).toString()).to.equal("10");
    })
    
})