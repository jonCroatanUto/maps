import React from "react";
import SchemaImage from "./schema.png";
import pseudocode from "./pseudocode.png";
import "./styles.css";
import { Link } from "react-router-dom";
function TheoricalCHallence() {
  return (
    <div className="theoricalChallence">
      <Link to="/practicalChallace">
        <p style={{ fontSize: "20px", textDecoration: "none" }}>
          Pracital challence
        </p>
      </Link>
      <h1>Part teórica</h1>
      <h2>Problema: </h2>
      <p>
        Per el que veig en el codi que proposeu, cuan es cobra a cada usuari
        s’executa el metóde <b>getTotal()</b>. Aquest metóde recorre el array de
        tots els serveis dels que l’usuari ha disposat, comproba de quin tipus
        de servei es tracta i acumula el preu resultant de la suma d'aquets.Si
        la llista de serveis es molt llarga aquets procés es repitiría molts
        cops , y aixó relantitzaría el servei. Si parlem d’un sol usuari no
        sería un gran problema, pero hem de preveure que l’aplicació creixará i
        cada cop hi haurán més usuaris, aquest es l’objectiu. Hem de preveure
        que la funció
        <b>getTotal()</b> pot ser executada per millons de usuaris
        simultaniament, cada milisegon de carrega que estalbiem compta.
      </p>
      <h2>Solució: </h2>
      <p>
        Per tant hem de intentar que el calcul d’aquest preu final no depengui
        de l’execusió de una sola funció en un moment puntual, ja que suposaría
        una carrega molt pesada per la aplicació, hem de mirar que aqesut calcul
        sigui progresiu. <br />
        Per cada cop que s’executi un servei, es mira el preu que correspon en
        el objecte “Multimedia” que li pertany, aquest preu s'acumulará com a
        valor de la propietat de la classe RegisteredUser. <br />
        <br />
        Per fer-ho s’afagirá a la classe <b>service</b> la propietat{" "}
        <b>price. </b>
        Es creará un metóde per la classe service encarregat de llegir el preu
        del objecte “Multimedia” que li pertany. Aquest metóde s’anomenará
        <b>getMultimediaPrice()</b> que sustituirà al metóde
        “getMultimediaContent()“ i s’executará cada cop que l’usuari fagui ús
        d’un servei. També haurem de crear un metóde per la classe RegisterUser{" "}
        <b>addToTotalPrice()</b>. Aquest metóde s’encarregará de llegir la
        propietat <b>price</b> de service y sumar-lo al actual valor de una nova
        propietat de la class RegisteredUser que s’anomenará
        <b>totalPrice</b>.<br /> <br />
        <b>addToTotalPrice()</b> s’executara també cada cop que l’aplicació
        executi un servei. D’aquesta manera el preu que acumula l’usuari
        s’aniria calculant de forma paulatina i ens estalbiem la funció
        getTotal, que de tenirla que executar mensualment, per exemple, a tots
        els usuaris sería una carrega bestial per la aplicació, considerant que
        contingui milers d’usuaris.
      </p>
      <div className="graphicContent">
        <img src={SchemaImage} alt="Schema" />
        <img src={pseudocode} alt="pseudocode" />
      </div>
    </div>
  );
}
export default TheoricalCHallence;
