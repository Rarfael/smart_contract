//SPDX-License-Identifier: MIT

pragma solidity 0.7.0;

contract Bank {
    mapping(address => uint256) public userBalance;

    function getBalance(address user) public view returns (uint256 balance) {
        return userBalance[user];
    }

    function addToBalance() public payable {
        userBalance[msg.sender] += msg.value;
    }

    function withdrawBalance() public {
        uint256 newUserBalance = userBalance[msg.sender];
        userBalance[msg.sender] = 0;
        (bool success, ) = msg.sender.call{value: newUserBalance}(
            "Withdraw started"
        );
        require(success, "Transfer failed.");
    }
}
