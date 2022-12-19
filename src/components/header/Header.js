import { useEffect } from "react";
import logo from "../../assets/img/Video365(2).png";
import { isAuth } from "../../util/Util";
import { TopMenu } from "../menu/TopMenu";
import "./Header.css";

export const Header = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="flex text-center">
        <img className="logo" src={logo} alt="logo" />
        <h1>Bienvenido</h1>
        <h2>¡Hecho por cinefilos para cinefilos!</h2>
      </div>
      {isAuth() ? <TopMenu /> : ""}
    </div>
  );
};
