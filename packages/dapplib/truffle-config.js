require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remember erosion give kite bone sing'; 
let testAccounts = [
"0xcbee016a2b8df6c233ac66c04d531424626861cbba4dc9ee25e73f2406dd7f7f",
"0xc813d13ad1b8e1a00d69361e5bfb2b0b99ea7f4e0d2dc00db94a85a4a075bb8a",
"0xdbb644d43cef330fe3ae6e36835c5872bda3b7046e617f2ffa07faa6a5f4669d",
"0x0861445bcbfe88eeaad512a0f9e606cfa04121897d5d78bee5bd05fbb592f9d9",
"0xe30580876c6b0aab24010f300090dd4c57b2cf7f4f6715494a717233c08dca7c",
"0xf6c5c66f7a3cda05bebbbc77440313c9ec3d1b2886f8caf607a57a85db45c8f7",
"0xfb767009513d557df913697ba71fe8245998879db191ee942f76721dd400e1f5",
"0xb0b38fb3974417d4aa526644a737f91e965dd142bf8b94f73afe23cf3d8a8881",
"0x977c5e94414e39d40652d7c2d992290aa4038b41caa70a3eae3ba4c6711e2337",
"0xa5cb6e1fd6e86d405287c399995fb166cea8dfb04d9ba56d3fcb0c6b25d7989d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


