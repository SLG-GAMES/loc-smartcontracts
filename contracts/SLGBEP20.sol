pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SLGBEP20 is ERC20, Ownable {
    constructor(
        uint256 total_,
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
        _mint(_msgSender(), total_);
    }
}
