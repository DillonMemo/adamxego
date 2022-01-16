declare global {
    interface Window {
        caver : any,
        Caver : any,
        contract : any
    }
}

import Config from "../Config";

class Klaytn {
        private caver = typeof Window !== "undefined" ? window.caver !== undefined ? undefined :
        new window!.Caver(new window!.Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", {
            headers: [
                { name: "Authorization", value: Config.authorization },
                { name: "x-chain-id", value: String(Config.chainId) },
            ],
        })) : undefined ;

        public createContract(address: string, abi: any) {
            if (typeof Window !== "undefined") {
              if (this.caver === undefined) {
                return new window!.caver.klay.Contract(abi, address)
              } else {
                console.log('caver contract is value:', this.caver);
                this.caver.contract.create(abi, address);
              }
            }
          }
}

export default new Klaytn();