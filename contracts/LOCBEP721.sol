// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract LOCBEP721 is ERC721, Ownable {
    string public baseURI;

    constructor(
        uint256[] memory tokenIds_,
        string memory name_,
        string memory symbol_,
        string memory baseURI_
    ) ERC721(name_, symbol_) {
        baseURI = baseURI_;
        uint256 length = tokenIds_.length;
        for (uint256 i; i < length; i++) {
            _mint(_msgSender(), tokenIds_[i]);
        }
    }

    function mint(address account, uint256 tokenId) public onlyOwner {
        _mint(account, tokenId);
    }

    function batchMint(address account, uint256[] memory tokenId) public onlyOwner {
        uint256 length = tokenId.length;
        for (uint256 i; i < length; i++) {
            _mint(account, tokenId[i]);
        }
    }

    function _baseURI() override internal view virtual returns (string memory) {
        return baseURI;
    }

    /// @notice Sets the base URI for constructing tokenURI values for options.
    function setBaseOptionURI(string memory _baseOptionURI) public onlyOwner {
        baseURI = _baseOptionURI;
    }

}
