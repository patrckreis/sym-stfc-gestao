import "./stfc2.css";
const fanvil2 = require("../../assets/fanvil2.png") as string;

export function Stfc2() {
  return (
    <div className="stfc2MainContainer">
      <div className="stfc2Cards">
        <h5>Não Recebe Ligação:</h5>
        <p className="stfcCardsP">Verifique se o "Não Perturbe" está ativo.</p>
        <p className="stfcCardsP">
          {" "}
          Para desativar o "Não Perturbe", acesse: Menu {">"} Básicas {">"}{" "}
          Configurações de Teclas {">"} Softkey {">"} Não Perturbe {">"} Altere
          para Lembrete.
        </p>
        {/* <img src={fanvil2} alt="" /> */}
      </div>
      <div className="stfc2Cards">
        <h5>Transferência Direta:</h5>
        <p className="stfcCardsP">
          Durante uma ligação, pressione o botão "Transferir", digite o número
          do ramal e pressione "Transferir" novamente.
        </p>
      </div>
      <div className="stfc2Cards">
        <h5>Transferência Assistida:</h5>
        <p className="stfcCardsP">
          Durante uma ligação, pressione o botão "Transferir", digite o número
          do ramal e pressione "Discar". A ligação será encaminhada para o ramal
          desejado. Após a confirmação, pressione "Transferir" para efetivar a
          transferência.
        </p>
      </div>
      <div className="stfc2Cards">
        <h5>Ajuste de Volume do Telefone:</h5>
        <p className="stfcCardsP">
          Utilize o ícone de volume; pressione (+) para aumentar e (-) para
          diminuir o volume.
        </p>
      </div>
      <div className="stfc2Cards">
        <h5>Telefone Mudo:</h5>
        <p className="stfcCardsP">
          Para ativar o modo mudo, pressione o botão de microfone cortado.
        </p>
      </div>
      <div className="stfc2Cards">
        <h5>Discagem para Ligações Locais:</h5>
        <p className="stfcCardsP">
          Não é necessário incluir o zero ou o código da área. Disque o número
          diretamente, seja para celular ou telefone fixo local. Exemplo:
          3301-2500.
        </p>
      </div>
      <div className="stfc2Cards">
        <h5>Discagem para Ligações Interurbanas:</h5>
        <p className="stfcCardsP">
          Inclua o número zero, o DDD da cidade para onde está ligando e o
          número da pessoa. Exemplo: 0 32 3301-2500.
        </p>
        <p className="stfcCardsP">Exemplo: 0 32 3301-2500.</p>
      </div>
      {/* <div className="stfc2Cards">
        <h5>Atenção Importante:</h5>
        <p className="stfcCardsP">
          Encaminhe para o suporte em caso de testes realizados e o usuário não
          conseguir utilizar o telefone.
        </p>
      </div> */}
    </div>
  );
}
