class SportsDataMock {
  constructor() {
    this.userId = 12;
  }

  get Id() {
    return this.userId;
  }

  async callGeneral() {
    try {
      let id = this.userId;
      const response = await fetch("./generalMocked.json");
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
      const response = await fetch("./avgSessionMocked.json");
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
      const response = await fetch("./activityMocked.json");
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
      const response = await fetch("./performanceMocked.json");
      const data = await response.json();
      const lesInfosGenerales = data;
      return lesInfosGenerales;
    } catch (error) {
      console.log(error);
    }
  }
}

export default SportsDataMock;
