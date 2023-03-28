const {expect}=require("chai");
const {ethers}=require("hardhat");

let Box;
let box;

describe("Box Smart Contract Testing Version 1.", function(){
    beforeEach(async function(){
        Box=await ethers.getContractFactory("Box");
        box=await Box.deploy();
        await box.deployed();
    })

    it("Retrive function returns the value previoulsy stored", async function(){
        await box.Store(10);
        //retrive will give direct value ryt so we are converting that value into string we are checking
        expect((await box.Retrive()).toString()).to.equal("10");
    })
})