import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import MimIcon from "../../assets/tokens/MIM.svg";
import AvaxIcon from "../../assets/tokens/AVAX.svg";
import MimTimeIcon from "../../assets/tokens/WRAITH-MIM.svg";
import AvaxTimeIcon from "../../assets/tokens/TIME-AVAX.svg";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const mim = new StableBond({
    name: "mim",
    displayName: "MIM",
    bondToken: "MIM",
    bondIconSvg: MimIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.FANTOM]: {
            bondAddress: "0x2E2Ed0Cfd3AD2f1d34481277b3204d807Ca2F8c2",
            reserveAddress: "0x82f0b8b456c1a451378467398982d4834b6829c1",
        },
    },
});

export const mimTime = new LPBond({
    name: "mim_time_lp",
    displayName: "WRAITH-MIM LP",
    bondToken: "MIM",
    bondIconSvg: MimTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.FANTOM]: {
            bondAddress: "0xf953b3A269d80e3eB0F2947630Da976B896A8C5b",
            reserveAddress: "0x9Cbf0F08Acbd1bdB3E2eEf829B47BF2e5Ebfcac4",
        },
    },
    lpUrl: "Null",
});

export default [mim, mimTime];
