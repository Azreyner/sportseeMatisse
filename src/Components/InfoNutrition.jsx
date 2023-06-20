import React, { useState, useEffect } from "react";
import "../Style/Components/InfoNutrition.scss";
import CalorieLogo from "../Assets/InfoNutrition/CalorieLogo.svg";
import ProteineLogo from "../Assets/InfoNutrition/ProteineLogo.svg";
import LipideLogo from "../Assets/InfoNutrition/LipideLogo.svg";
import GlucideLogo from "../Assets/InfoNutrition/GlucidesLogo.svg";

const InfoNutrition = ({ nomKeyData, valeur, leType }) => {
  const [logo, setLogo] = useState();
  const logoAlt = "Logo" + leType;
  const unitéLabel =
    nomKeyData === "calorieCount" ? `${valeur} kCal` : `${valeur} g`;

  //console.log("TESTETSTSDTETSTES  " + leType);

  useEffect(() => {
    switch (leType) {
      case "Calories":
        setLogo(CalorieLogo);
        break;
      case "Protéines":
        setLogo(ProteineLogo);
        break;
      case "Glucides":
        setLogo(GlucideLogo);
        break;
      case "Lipides":
        setLogo(LipideLogo);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="infoNutrition">
      <div className={"infoNutrition__logoNutrition " + leType}>
        <img src={logo} alt={logoAlt} />
      </div>
      <div className="infoNutrition__infos">
        <h4>{unitéLabel}</h4>
        <p>{leType}</p>
      </div>
    </div>
  );
};

export default InfoNutrition;
