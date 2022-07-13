import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "../services/store";
import { useEffect } from "react";
import { resetFav } from "../services/actions/perso.action";
import { IPersonagen } from "../services/types/types";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  
  const dispatch = useDispatch();
  const perso = useSelector((state) => state.perso);
  const favoritos = perso.perso.filter((perso: IPersonagen) => perso.favorito);
  function resetFavHand() {
    dispatch(resetFav());
  }
  
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger" onClick={resetFavHand}>Limpar favoritos</button>
      </div>
      <GradePersonagens perso={favoritos} />
    </div>
  );
};

export default PaginaFavoritos;
