import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x424797151905193c5E97A5fCA28F4c28240E43e0",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "The Developer",
                description: "This NFT will give you access to DeveloperDAO!",
                image: readFileSync("scripts/assets/images.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()