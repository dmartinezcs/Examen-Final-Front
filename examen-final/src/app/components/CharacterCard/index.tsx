import Link from "next/link";
import { CharacterT } from "@/types";
import "./styles.css";


function CharacterCard ({personaje} : {personaje: CharacterT}){
    return(
        <div className="ContainerCharacter">
            <img src={personaje.image} onClick={()=>{`/character/${personaje.id}`}}>
            </img>
            <div className="InfoContainer">
                <h1>{personaje.name}</h1>
                <p>Estado:{personaje.status}</p>
                <p>Género:{personaje.gender}</p>
                <p>Origen:{personaje.origin.name}</p>
                <Link className="Link" href={`/character/${personaje.id}`}>Página específica de personaje</Link>
            </div>
            
        </div>
    )
};

export default CharacterCard