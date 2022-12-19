import { useEffect } from "react";
import logo from "../../assets/img/logoVideo365.png";
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
        <h2>Hecho por cienfilos para cienfilos</h2>
      </div>
      {isAuth() ? <TopMenu /> : ""}
    </div>
  );
};
