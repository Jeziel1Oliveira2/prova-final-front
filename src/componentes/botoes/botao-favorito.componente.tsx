import { MouseEventHandler } from "react";
import "./botao-favorito.css";
import star from "../../images/star-regular.svg"
import sta from "../../images/star-solid.svg"

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento JSX
 */
type myProps ={
  isFavorito: boolean,
  onClick: MouseEventHandler
}

const BotaoFavorito = ({ isFavorito, onClick }: myProps) => {
  const src = isFavorito ?  star :  sta;

  return (
    <button onClick={onClick}>
      <div className="botao-favorito">
        <img src={src} alt={"favorito"}  />
      </div>
    </button>
  );
};

export default BotaoFavorito;
