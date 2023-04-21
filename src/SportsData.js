import axios from "axios";

class SportsData {
  constructor() {
    this.test = this.callGeneral();
    this.userId = 12;
  }

  /*callGeneral = async () => {
    let lesInfosGenerales = null;

    axios
      .get("./generalMocked.json")
      .then((response) => {
        lesInfosGenerales = response.data[0];
        console.log(lesInfosGenerales);
      })
      .catch((error) => {
        console.log(error);
      });

    return lesInfosGenerales;
  };*/

  // Getter
  getTest() {
    return this.test;
  }

  getId() {
    return this.userId;
  }

  callGeneral = async () => {
    try {
      let id = this.userId;
      const response = await fetch("./generalMocked.json");
      //const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      const lesInfosGenerales = data;
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  };

  callAvgSession = async () => {
    try {
      let id = this.userId;
      const response = await fetch("./avgSessionMocked.json");
      /*const response = await fetch(
        `http://localhost:3000/user/${id}/average-sessions`
      );*/
      const data = await response.json();
      const lesInfosGenerales = data;
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  };

  callActivity = async () => {
    try {
      let id = this.userId;
      const response = await fetch("./activityMocked.json");
      //const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      const data = await response.json();
      const lesInfosGenerales = data;
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  };

  callPerformance = async () => {
    try {
      let id = this.userId;
      const response = await fetch("./performanceMocked.json");
      /*const response = await fetch(
        `http://localhost:3000/user/${id}/performance`
      );*/
      const data = await response.json();
      const lesInfosGenerales = data;
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  };
}

export default SportsData;
