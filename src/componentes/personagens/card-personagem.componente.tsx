import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";
import { API_URL } from "../../services/api";
import { IPersonagen } from "../../services/types/types";
import { atualizarFav } from "../../services/actions/perso.action";
import { useDispatch} from "react-redux";
/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
 type Props = {perso : IPersonagen, key : number}
const CardPersonagem = ({perso} : Props) => {
  const dispatch = useDispatch();
  const { id, name, image, favorito } = perso;
  function favHand() {
    dispatch(atualizarFav(id));
  }
  console.log(perso)

  return (
    <div className="card-personagem">
      <img
        src={image}
        alt={name}
      />
      <div className="card-personagem-body">
        <span>{name}</span>
        <BotaoFavorito isFavorito={favorito} onClick={favHand} />
      </div>
    </div>
  );
};

export default CardPersonagem;
