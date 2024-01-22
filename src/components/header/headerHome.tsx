import "./headerHome.css";
const logoSym = require("../../assets/LogoSym.png") as string;

interface HeaderHomeProps {
  scrollToSection: () => void;
}

export function HeaderHome({ scrollToSection }: HeaderHomeProps) {
  return (
    <div className="mainHeaderHomeContainer">
      <div className="headerHomeContainer">
        <div className="background">
          <button className="menu__icon">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <img src={logoSym} className="logoSym" alt="" />
      </div>
      <div className="headerHomeButons">
        <button className="button2" onClick={scrollToSection}>
          STFC
        </button>
        <button className="button2">
          <a href="www.google.com.br">GESTÃO</a>
        </button>
        <button className="button2">
          <a href="www.google.com.br">SISTEMAS</a>
        </button>
      </div>
    </div>
  );
}
