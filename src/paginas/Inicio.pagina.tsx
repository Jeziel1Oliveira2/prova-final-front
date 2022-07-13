import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "../services/store";
import { useEffect } from "react";
import { fetchPersoThunk } from "../services/actions/perso.action";
/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  const dispatch = useDispatch();
  const perso = useSelector((state) => state.perso);
  console.log(perso.perso)
  useEffect (() => {
    fetchPersoThunk()(dispatch);
  }, [])

  
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
      </div>
      <Filtros />
      <Paginacao />
      <GradePersonagens perso={perso.perso}  />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
