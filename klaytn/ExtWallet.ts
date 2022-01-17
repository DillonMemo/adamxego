declare global {
    interface Window {
      klaytn: any;
      caver: any;
      klay: any;
    }
}

import { BigNumber } from "@ethersproject/bignumber";
import EventContainer from "eventcontainer";

class ExtWallet extends EventContainer {

    private klaytn: any | undefined = typeof Window !== "undefined" ? window.klaytn : undefined
    private caver: any | undefined = typeof Window !== "undefined" ? window.caver : undefined 

    constructor() {
        super();
        this.checkConnected();
    }

    public get installed() {
        return this.klaytn !== undefined && this.caver !== undefined;
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        return this.caver === undefined ? undefined : (await this.caver.klay.getAccounts())[0];
    }

    public async loadChainId() {
        return this.caver === undefined ? -1 : await this.caver.klay.getChainId();
    }

    public async loadBlockNumber() {
        return this.caver === undefined ? -1 : await this.caver.klay.getBlockNumber();
    }

    public async loadBalance() {
        return BigNumber.from(this.caver === undefined ? -1 : await this.caver.klay.getBalance(await this.loadAddress()));
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        await this.klaytn?.enable();
        this.checkConnected();
    }

    public createContract(address: string, abi: any) {
        return this.caver === undefined ? undefined : new this.caver.klay.Contract(abi, address);
    }
}

export default new ExtWallet();
