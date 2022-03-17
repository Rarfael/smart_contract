//SPDX-License-Identifier: MIT

pragma solidity 0.7.0;

contract Likable {
    uint256 public likes;

    function remove() public {
        require(likes > 0, 'Number of likes are 0');
        likes--;
    }

    function add() public {
        likes++;
    }
}
