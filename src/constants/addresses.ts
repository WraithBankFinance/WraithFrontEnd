import { Networks } from "./blockchain";

const FANTOM = {
    DAO_ADDRESS: "0x21dF544947ba3E8b3c32561399E88B52Dc8b2823", //Maybe not needed?
    MEMO_ADDRESS: "0x922D6956C99E12DFeB3224DEA977D0939758A1Fe", //Deployed on Testnet
    TIME_ADDRESS: "0x162A433068F51e18b7d13932F27e66a3f99E6890", //Deployed on Testnet
    MIM_ADDRESS: "0x82f0b8b456c1a451378467398982d4834b6829c1", //Using Dai Representative
    STAKING_ADDRESS: "0x1fA02b2d6A771842690194Cf62D91bdd92BfE28d", //Deployed on Testnet
    STAKING_HELPER_ADDRESS: "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6", //Deployed on Testnet
    TIME_BONDING_CALC_ADDRESS: "0xA4899D35897033b927acFCf422bc745916139776", //Deployed on Testnet
    TREASURY_ADDRESS: "0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f", //Deployed on Testnet
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.FANTOM) return FANTOM;

    throw Error("Network don't support");
};
