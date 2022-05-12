const { ethers } = require("ethers")
const dotenv = require('dotenv')

dotenv.config({ path: './app.env'})

const contractAddress = "0x57089131ba4975A52aF9889117CCDb04Af0b2382"
const contractAbi = [
    "constructor(string _greeting)",
    "function greet() view returns (string)",
    "function setGreeting(string _greeting)",
]

const provider = new ethers.providers.JsonRpcProvider("https://eth.bd.evmos.dev:8545")
const signer = new ethers.Wallet(`${process.env.mainEthPrivKey}`, provider)
const contract = new ethers.Contract(contractAddress, contractAbi, signer)

const main = async () => {
    // console.log(await contract.setGreeting('Hello World!!'))
    console.log(await contract.greet())
}

main()
