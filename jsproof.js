// Create an array to hold your NFT's
const NFTs = [];

// This function will take in some values as parameters, create an
// NFTmetadata object using the parameters passed to it for its metadata, 
// and store it in the array above.
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

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
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

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(NFTs.length);
}

// Call your functions below this line

mintNFT("Bob", "Blue", "Hoodie", "Gold Chain");
mintNFT("Bhakti", "Red", "Denim Shirt", "Silver Chain");
mintNFT("Shakti", "Pink", "Overshirt", " Diamond Chain");
mintNFT("Sandeep", "Yellow", "Tuxedo Shirt", "Ruby Chain");
mintNFT("Minakshi", "Green", "Collar shirt", "Sapphire Chain");

listNFTs();
getTotalSupply();
