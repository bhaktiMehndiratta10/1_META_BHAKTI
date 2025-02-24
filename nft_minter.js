const NFTs = [];

function mintNFT(_name, _eyeColor, _shirtType, _bling) {
    const NFTmetadata = {
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType": _shirtType,
        "bling": _bling
    }
    NFTs.push(NFTmetadata);
    console.log("Minted: " + _name);
}

function listNFTs() {
    console.log("\n");

    for (let i = 0; i < NFTs.length; i++) {
        
        console.log("ID : \t\t" + (i + 1));
        console.log("Name \t\t:" + NFTs[i].name);
        console.log("Eyecolour\t: " + NFTs[i].eyeColor);
        console.log("Shirt Type :" + NFTs[i].shirtType);
        console.log("Bling \t\t:" + NFTs[i].bling);
    }
}

function getTotalSupply() {
    console.log(NFTs.length);
}

mintNFT("Bhakti", "Red", "Denim Shirt", "Silver Chain");
mintNFT("Shakti", "Pink", "Overshirt", " Diamond Chain");
mintNFT("Sandeep", "Yellow", "Tuxedo Shirt", "Ruby Chain");
mintNFT("Minakshi", "Green", "Collar shirt", "Sapphire Chain");

listNFTs();
getTotalSupply();
