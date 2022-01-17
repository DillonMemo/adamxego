import { utils } from "ethers";
import Contract from "./Contract";

class MintContract extends Contract {

    constructor() {
        super("0x96896751A1C7d5C72C6A0280C7aa125C8e7C3634", require("./MintContractABI.json"));
    }

    public async mint(to: string, count: number): Promise<void> {
        await this.runWalletMethodWithValue(utils.parseEther(String(20 * count)), "mint", to, count);
    }
}

export default new MintContract();
