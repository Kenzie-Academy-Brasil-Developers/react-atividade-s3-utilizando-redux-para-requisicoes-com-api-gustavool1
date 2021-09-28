import axios from "axios"
import { addDigimon } from './action'
import { useSelector } from "react-redux"
export const addDigimonThunk = ( digimon ) =>{
    
    return (dispatch, getState) =>{
        axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
        .then((response)=>{
            const digimonsList = getState(digimon)
            console.log(digimonsList)
            dispatch(addDigimon(response.data[0]))
           
            
        })
        .catch((err)=>console.log(err))
    }
}