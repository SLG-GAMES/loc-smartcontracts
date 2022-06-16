pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SLGBEP20Mintable is ERC20, Ownable {

    constructor(
        uint256 total_,
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
    _mint(_msgSender(), total_);
    }

    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }
}
