import logo from "../../img/logo.svg";
import "../../scss/components/Logo.scss";

function Logo() {
  return (
      <img src={logo} className="logo" alt="logo" />
  );
}

export default Logo;
