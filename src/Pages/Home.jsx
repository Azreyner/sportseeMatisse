import React, { useState, useEffect, useContext } from "react";
import logo from "../Assets/SportSeeLogo.png";
import SportsData from "../SportsDataMock.js";
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
import { ThemeContext } from "../utils/context";

function Home() {
  const { source } = useContext(ThemeContext);

  const [keyData, setKeyData] = useState(null);
  const [todayScore, setTodayScore] = useState(null);
  const [avgSessionData, setAvgSessionData] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [poids, setPoids] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await source.callGeneral();
      if (result) {
        setPrenom(result.data.userInfos.firstName);
        setKeyData(result.data.keyData);
        if (JSON.stringify(result.data).includes("score")) {
          setTodayScore(result.data.score);
        } else {
          setTodayScore(result.data.todayScore);
        }
        // Les données pour les Objectifs/linechart
        const result2 = await source.callAvgSession();
        setAvgSessionData(result2.data.sessions);
        // Les données pour radar
        const result3 = await source.callPerformance();
        setPerformance(result3);
        //poids
        const result4 = await source.callActivity();
        setPoids(result4.data.sessions);
      }
    }
    fetchData();
  }, []);

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
      {keyData ? (
        <main>
          <div className="lesGraphiques">
            <div className="infosPerso">
              <h1>
                Bonjour <span>{prenom}</span>
              </h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="graphBougie">
              {poids && <Poids lePoids={poids} />}
            </div>
            <div className="troisGraph">
              {avgSessionData && (
                <Objectifs lesDonnéesAVGSession={avgSessionData} />
              )}
              {performance && <UnRadar performanceData={performance} />}
              {todayScore && <Kpi leScore={todayScore} />}
            </div>
          </div>
          <div className="infoNutritionList">
            {keyData && (
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
            )}
          </div>
        </main>
      ) : (
        <h1 id="alerte">Pas de données Chargées !</h1>
      )}
      {/** FIN LES GRAPHIQUES */}
    </div>
  );
}

export default Home;
