import "./stfc.css";

const imgPerson1 = require("../../assets/imgperson1.png") as string;
const telefone = require("../../assets/telefone.png") as string;

export function Stfc() {
  return (
    <div className="stfcMainContainer">
      <div className="stfcContainer">
        <div>
          <h2>O Manual STFC da SYM</h2>
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
          {/* <h3>Problemas específicos e soluções:</h3>
          <h4> (Quando não recebe ligações) </h4>
          <p>Verifique se o "Não Perturbe" está ativo.</p>
          <p>
            Para desativar o "Não Perturbe", acesse: Menu &gt; Básicas &gt;
            Configurações de Teclas &gt; Softkey &gt; Não Perturbe &gt; Altere
            para Lembrete.
          </p> */}
        </div>
        <div className="imgPerson1Container">
          <img className="imgPerson1" src={imgPerson1} alt="" />
        </div>
      </div>
    </div>
  );
}
