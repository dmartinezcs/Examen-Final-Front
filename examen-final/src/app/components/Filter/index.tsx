import "./styles.css";




const Filter = ({}: {   }) => {



    
    return(

        <div className="FilterContainer">
            <input placeholder="Busca por nombre" />
            <button>Buscar</button>
            <button id="BotonEstado" onClick={() => {}}>Estado</button>
            <ul id="Estado">
                <li><span>Dead</span></li>
                <li><span>Alive</span></li>
                <li><span>unknown</span></li>
            </ul>
            <button id="BotonGénero" onClick={() => {}}>
                Género
            </button>
            <ul id="Género">
                <li><span>Female</span></li>
                <li><span>Male</span></li>
                <li><span>Genderless</span></li>
            </ul>
        </div>
    )
}




export default Filter;
