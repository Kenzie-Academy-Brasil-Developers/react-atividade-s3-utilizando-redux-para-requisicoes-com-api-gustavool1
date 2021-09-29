import axios from "axios"
import { toast } from "react-toastify"
import { addDigimon } from './action'
export const addDigimonThunk = ( digimon ) =>{
    toast.configure()
    return (dispatch, getState) =>{
        axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
        .then((response)=>{
            const {digimons} = getState()
             const filteredDigimons = digimons.filter((digimon)=>digimon.name ===  response.data[0].name)
            if(filteredDigimons.length === 0){
                dispatch(addDigimon(response.data[0]))
                toast.success("digimon adicionado")
            }else{
                toast.error("Impossível adicionar o mesmo digimon")
            }
        })
        .catch((err)=> toast.error('Impossível adicionar este pokemon'))
    }
}