import React from "react";

import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <span>
        @{new Date().getFullYear()} NE Gestão de Mão de obra. Todos os direitos
        reservados. O conteúdo deste site é protegido por leis de direitos
        autorais e propriedade intelectual. A reprodução, distribuição ou uso
        não autorizado são proibidos.
      </span>
      <span>
        {" "}
        Desenvolvido por Edberto Santos – Transformando ideias em realidade com
        código. 🚀
      </span>
    </footer>
  );
};

export default Footer;
