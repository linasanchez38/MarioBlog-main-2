import React from "react";
import FooterStyle from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
    <section>
      <section className={FooterStyle.container}>
        <footer className={FooterStyle.footer}>
          {/* <a href=""> Servicio al cliente </a>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i> */}
        </footer>
        <p>Diseñado por MARScript</p>
        <p>Copyright © 2023</p>
      </section>
    </section>       
   </>
  );
}

export default Footer;