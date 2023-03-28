// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
//creating Upgradeble contracts storing and retrive that value.

contract Box{
    //creating a variable like private
    uint256 private value;

    //for when the sotred value changes
    event ValueChanged(uint256 newValue);

//To Store the newValue in the smart contract state varible.
    function Store(uint256 newValue) public{
        value=newValue;
        emit ValueChanged(newValue);
    }

//reads the alst stored value

    function Retrive() public view returns(uint256){
        return value;
    }
}



