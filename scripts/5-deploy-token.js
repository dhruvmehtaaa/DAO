import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0xf79552d13Fb3d0eE45A77c8331f0f1625116d800');

(async () => {
    try {
        // Deploy a standard ERC-20 contract.

        const tokenModule = await app.deployTokenModule({
            // What's your token's name? Ex. "Ethereum"
            name: "DeveloperDAO Governance Token",
            // What's your token's symbol? Ex. "ETH"
            symbol: "DEV",
        });
        // await tokenModule.delegateTo(process.env.WALLET_ADDRESS)
        // const amount = 500_00
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();