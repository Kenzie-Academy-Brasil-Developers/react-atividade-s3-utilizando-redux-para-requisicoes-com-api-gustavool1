import { ADD_DIGIMONS } from "./actionType";

export const addDigimon = ( digimon ) => {
    return {
        type: ADD_DIGIMONS,
        digimon
    }
}