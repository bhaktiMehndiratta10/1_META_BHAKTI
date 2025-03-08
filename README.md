# NFT MINTING SCRIPT 

This program demonstrates the creation, storage, and listing of NFT metadata using functions, objects, and arrays. It simulates minting NFTs, storing their metadata, and then listing their details.


CODE FUNCTIONS-
1) mintNFT(_name, _eyeColor, _shirtType, _bling):
This function allows you to mint a new NFT by providing values for its metadata attributes. It takes the following parameters: _name, _eyeColor, _shirtType, and _bling. The function creates an object called NFTmetadata using the provided parameters and stores it in the NFTs array. The NFTmetadata object holds metadata about each NFT like its name, eye color, shirt type, and bling. A message is logged to the console indicating that the NFT has been minted.

2) listNFTs()
The listNFTs function iterates through the NFTs array and lists the details of each minted NFT. It uses a for loop to go through each NFT metadata stored in the array. Within the loop, it logs the ID, name, eye color, shirt type, and bling of each NFT. A line break is added before the listing for improved formatting.

3) getTotalSupply()
The getTotalSupply function  logs the total number of minted NFTs by outputting the length of the NFTs array.It basically prints the total count of minted NFTs.


-In order to run this, open a terminal and navigate to the directory containing the file. Then run the script using the command: node jsproof.js

OUTPUT - 
When you run the script, it will mint several NFTs using the mintNFT function and display their metadata using the listNFTs function.The output will show the minted NFTs' names, IDs, eye colors, shirt types, and bling information. It will also displays the total number of minted NFTs.

