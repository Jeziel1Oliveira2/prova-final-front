import "./filtros.css";
import { filterPersoThunk } from "../../services/actions/perso.action";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const Filtros = () => {
  const [filterState, setFilterState] = useState("")
  
  const dispatch = useDispatch();
  
  function handleChange(e : any) {
    setFilterState(e.target.value)
  }
  useEffect(() => {filterPersoThunk(filterState)(dispatch)}, [filterState])

  function exclude(e : any) {
    e.preventDefault();
    setFilterState("")
  }
  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nome"
        onChange={handleChange}
      />
      <button className="danger" onClick={exclude} >Limpar Filtro</button>
    </div>
  );
};

export default Filtros;