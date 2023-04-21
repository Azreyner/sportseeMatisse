import React, { useState, useEffect } from "react";
import logo from "../Assets/SportSeeLogo.png";
import SportsData from "../SportsData.js";
import BoutonAside from "../Components/BoutonAside";
import InfoNutrition from "../Components/InfoNutrition";
import Objectifs from "../Components/Objectifs";
import Kpi from "../Components/Kpi";
import UnRadar from "../Components/UnRadar";
import Poids from "../Components/Poids";
import "../Style/Pages/Home.scss";

import Zen from "../Assets/NavAside/Zen.svg";
import Nage from "../Assets/NavAside/Nage.svg";
import Velo from "../Assets/NavAside/Velo.svg";
import Muscu from "../Assets/NavAside/Muscu.svg";

import { ResponsiveContainer } from "recharts";

function Home() {
  const donees = new SportsData();

  const [keyData, setKeyData] = useState({});
  const [todayScore, setTodayScore] = useState();
  const [avgSessionData, setAvgSessionData] = useState({});

  /*useEffect(() => {
    axios
      .get("./generalMocked.json")
      .then((response) => {
        setTestDonnée(response.data[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/

  useEffect(() => {
    async function fetchData() {
      const result = await donees.callGeneral();
      setKeyData(result.data.keyData);
      setTodayScore(result.data.todayScore);
      console.log(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await donees.callAvgSession();
      setAvgSessionData(result.data.sessions);
    }
    fetchData();
  }, []);

  //console.log(new SportsData().getTest());

  return (
    <div className="home">
      <header>
        <img src={logo} alt="Logo de SportSee" />
        <nav>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Profil</a>
            </li>
            <li>
              <a href="#">Réglage</a>
            </li>
            <li>
              <a href="#">Communauté</a>
            </li>
          </ul>
        </nav>
      </header>
      <aside>
        <ul>
          <li>
            <BoutonAside logo={Zen} nom="Méditation" />
          </li>
          <li>
            <BoutonAside logo={Nage} nom="Nage" />
          </li>
          <li>
            <BoutonAside logo={Velo} nom="Vélo" />
          </li>
          <li>
            <BoutonAside logo={Muscu} nom="Musculation" />
          </li>
        </ul>
        <p>Copiryght, SportSee 2020</p>
      </aside>
      {/** LES GRAPHIQUES */}
      <main>
        <div className="lesGraphiques">
          <div className="infosPerso">
            <h1>
              Bonjour <span>Thomas</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="graphBougie">
            <Poids />
          </div>
          <div className="troisGraph">
            <Objectifs lesDonnéesAVGSession={avgSessionData} />
            <UnRadar />
            <Kpi leScore={todayScore} />
          </div>
        </div>
        <div className="infoNutritionList">
          <ul>
            <li>
              <InfoNutrition
                nomKeyData="calorieCount"
                unité="cal"
                valeur={keyData.calorieCount}
                leType="Calories"
              />
            </li>
            <li>
              <InfoNutrition
                nomKeyData="proteinCount"
                unité="g"
                valeur={keyData.proteinCount}
                leType="Protéines"
              />
            </li>
            <li>
              <InfoNutrition
                nomKeyData="carbohydrateCount"
                unité="g"
                valeur={keyData.carbohydrateCount}
                leType="Glucides"
              />
            </li>
            <li>
              <InfoNutrition
                nomKeyData="lipidCount"
                unité="g"
                valeur={keyData.lipidCount}
                leType="Lipides"
              />
            </li>
          </ul>
        </div>
      </main>
      {/** FIN LES GRAPHIQUES */}
    </div>
  );
}

export default Home;
