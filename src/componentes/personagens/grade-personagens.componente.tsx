import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { IPersonagen } from "../../services/types/types";


/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
 type Props = {perso : IPersonagen[] | undefined}
const GradePersonagem = ({perso}:Props) => {
  return (
    <div className="grade-personagens" >
      { perso &&
        // Aqui você deve exibir os personagens
        perso.map((perso) => {
          return <CardPersonagem perso={perso} key= {perso.id} />
        })
      }
    </div>
  );
};

export default GradePersonagem;
