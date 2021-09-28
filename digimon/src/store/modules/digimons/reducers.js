import { ADD_DIGIMONS } from './actionType'

const digimonReducer = ( state = [], action ) =>{
    const { digimon } = action
    switch(action.type){
        case ADD_DIGIMONS:
            return [...state, digimon]

        default:
            return state
    }
    
}
export default digimonReducer