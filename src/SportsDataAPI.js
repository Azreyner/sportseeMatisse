class SportsDataAPI {
  constructor() {
    this.userId = 18;
  }

  get id() {
    return this.userId;
  }

  async callGeneral() {
    try {
      let id = this.userId;
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      const lesInfosGenerales = data;
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
