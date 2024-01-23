import "./stfc3.css";
const fanvil3 = require("../../assets/fanvil3.png") as string;

export function Stfc3() {
  return (
    <div id="stfc-teclas" className="stfc3MainContainer">
      <img className="fanvil3" src={fanvil3} alt="" />
      <div className="stfc3Container">
        <h4 className="duvidash4">Dúvidas? Acione o seu supervisor!</h4>
        <p className="duvidas">
          Em caso de questionamentos ou dificuldades, não hesite em contatar o
          seu supervisor.
        </p>
        <p className="duvidas">
          Estamos aqui para ajudar a garantir uma experiência suave e eficiente
          no uso dos nossos sistemas e no atendimento ao cliente!
        </p>
      </div>
    </div>
  );
}
