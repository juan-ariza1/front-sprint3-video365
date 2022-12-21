import "./Footer.css";

import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <h4>Visita nuestras redes sociales</h4>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-youtube"></i>
        <i className="bi bi-whatsapp"></i>
        <p>@Video365. Todos los derechos reservados.</p>
      </div>
    );
  }
}

export default Footer;
