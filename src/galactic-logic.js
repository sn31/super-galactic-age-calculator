let todayDate = new Date();
const planetValues = {
  Mercury: 0.24,
  Venus: 0.62,
  Mars: 1.88,
  Jupiter: 11.86
};

const monthObj = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };

export class UserAge {
  constructor(userDOB, userLifeExpectancy) {
    this.DOB = new Date(userDOB);
    this.userAgeInYears;
    this.userLifeExpectancy = userLifeExpectancy;
  }

  calculateEarthAgeInYears() {
    let userAgeInSecond = (todayDate.getTime() - this.DOB.getTime()) / 1000;
    this.userAgeInYears = (userAgeInSecond / 31622400).toFixed(1);
    return this.userAgeInYears;
  }
  calculateAgeOnPlanet(planet) {
    let ageOnPlanet = (this.userAgeInYears / planetValues[planet]).toFixed(1);
    return ageOnPlanet;
  }
  calculateYearsLeftOnPlanet(planet) {
    let yearsLeftOnPlanet;
    if (planet === "Earth") {
      yearsLeftOnPlanet = this.userLifeExpectancy - this.userAgeInYears;
    } else {
      yearsLeftOnPlanet = (
        this.userLifeExpectancy / planetValues[planet] -
        parseFloat(this.calculateAgeOnPlanet(planet))
      ).toFixed(1);
    }
    let result = `You still have ${yearsLeftOnPlanet} years of life expectancy left on ${planet}!`;
    if (yearsLeftOnPlanet < 0) {
      result = `You have lived ${Math.abs(yearsLeftOnPlanet)} years passed the life expectancy on ${planet}!`;
    }
    return result;
  }
//   nextBirthdayOnPlanet(planet)
//   {
//     let nextYear;
//     let daysTillNextBD = (Math.ceil(parseFloat(this.calculateEarthAgeInYears())) - parseFloat(this.calculateEarthAgeInYears()))*365;
//     let daysLeftInYear = 1 - todayDate.getTime()/(1000*31622400);
//     if (daysTillNextBD > daysLeftInYear)
//     {
//         nextYear = todayDate.getFullYear() + 1;
//     }
//     else
//     {
//         nextYear = todayDate.getFullYear();
//     }
//   }
}
