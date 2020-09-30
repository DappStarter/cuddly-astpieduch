require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name radar soccer mix harvest clinic bubble sibling'; 
let testAccounts = [
"0x6f00f7ea41656b863c256b1651c7ebf768ab806339ba0cdc90947c020b1a9d49",
"0x8a74d0b8fc51b7b3a6c42c736e98d3f98385837d954352c83a645290dce7d2bf",
"0x61b9a8ff250fa0661150af3a41eef0a2bbbfe4a72d53ac39a7288fd17f855f2e",
"0x25f9086e3f0ae0540f6b8d071b7a385469c4d301117ef93551a26e2afa02a931",
"0xabda50019c2afb8903fb06a6a9a52b98ca420ef50e2d9d081baa67ab3f68454b",
"0x85763515435385e01985a94fa713c99ea3280a4d8f7cc5b1ac06306838242823",
"0xa70c4ae4ec0a43f4885d2284026a6bb443d568f1027354ff6f99d67339635b19",
"0x97d86d8c81904ed4c0137f2a6a9d2b6e6f55eb7e9fe2b229e93c7aec230341d8",
"0x10ec5727b93876366788728f91bfa5f95baa02a4084164c44e8ba6d22ad03424",
"0x9fdcd2bb8bfa2bf20b4a479e80b00b370daac7e02e25cdea07cbaf0f0087480f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
