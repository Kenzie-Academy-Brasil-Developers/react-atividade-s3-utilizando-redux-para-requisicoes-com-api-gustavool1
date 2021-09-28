import { useSelector } from "react-redux"
import './style.css'
const Digimons = () => {
    const digimons = useSelector((state)=>state.digimons)
    return(
        <div className='digimons'>
            <ul>
                {digimons && digimons.map((digimon) =>(
                    <li key={digimon.name}>
                        <p>{digimon.name}</p>
                        <img src={digimon.img} alt={digimon.name}/>
                    </li>
                ))}
           </ul>
        </div>
    )
}

export default Digimons