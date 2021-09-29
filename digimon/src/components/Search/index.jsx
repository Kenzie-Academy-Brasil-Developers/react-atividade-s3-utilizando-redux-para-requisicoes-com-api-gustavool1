import './style.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDigimonThunk } from '../../store/modules/digimons/thunks'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Search = () =>{
    toast.configure()
    const dispatch = useDispatch()
    const [ inputValue, setInputValue ] = useState('')
    
    const handleClick = () =>{
        dispatch(addDigimonThunk(inputValue))
        setInputValue('')
    }
    return(
        <div className='search-input'>
            <h1>Procure seu digimon !</h1>
            <input 
            type='text' 
            placeholder='Procure seu digimon'
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={handleClick}>Pesquisar</button>
        </div>
    )
}

export default Search