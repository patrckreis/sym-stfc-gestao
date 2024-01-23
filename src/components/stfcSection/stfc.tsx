import "./stfc.css";

const imgPerson1 = require("../../assets/imgperson1.png") as string;
const telefone = require("../../assets/telefone.png") as string;

export function Stfc() {
  return (
    <div id="stfc-section" className="stfcMainContainer">
      <div className="stfcContainer">
        <div>
          <h2>Manual STFC</h2>
          <h3>Identificando o problema do cliente:</h3>
          <p>
            Em caso de ligação muda, verifique o cabo do gancho na parte de trás
            do aparelho.
          </p>
          <p>
            Se o indicador L1 estiver piscando em vermelho, verifique a conexão
            com a internet e assegure-se de que o cabo esteja corretamente
            conectado na parte de trás.
          </p>
          <img className="telefone" src={telefone} alt="" />
        </div>
        <div className="imgPerson1Container">
          <img className="imgPerson1" src={imgPerson1} alt="" />
        </div>
      </div>
    </div>
  );
}
