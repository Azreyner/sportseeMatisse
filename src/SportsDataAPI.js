class SportsDataAPI {
  constructor() {
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

  get id() {
    return this.userId;
  }

  async callGeneral() {
    try {
      let id = this.userId;
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      const lesInfosGenerales = data;
      console.log("LES INFOS BACK :", lesInfosGenerales);
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  }

  async callAvgSession() {
    try {
      let id = this.userId;
      const response = await fetch(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      const data = await response.json();
      const lesInfosGenerales = data;
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  }

  async callActivity() {
    try {
      let id = this.userId;
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      const data = await response.json();
      const lesInfosGenerales = data;
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  }

  async callPerformance() {
    try {
      let id = this.userId;
      const response = await fetch(
        `http://localhost:3000/user/${id}/performance`
      );
      const data = await response.json();
      const lesInfosGenerales = data;
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  }
}

export default SportsDataAPI;
