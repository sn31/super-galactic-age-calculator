import { UserAge } from "../src/galactic-logic";

describe("Galactic Age Calculator", function() {
  let userDOB = "March 31, 1994";
  let userLifeExpectancy = 80;
  let newUser = new UserAge(userDOB, userLifeExpectancy);

  it("should correctly return the user's age in Earth years", function() {
    expect(newUser.calculateEarthAgeInYears()).toEqual("24.5");
  });
  it("should correctly return the user's age in Mercury years.", function() {
    expect(newUser.calculateAgeOnPlanet("Mercury")).toEqual("102.1");
  });
  it("should correctly return the user's age in Venus years.", function() {
    expect(newUser.calculateAgeOnPlanet("Venus")).toEqual("39.5");
  });
  it("should correctly return the user's age in Mars years.", function() {
    expect(newUser.calculateAgeOnPlanet("Mars")).toEqual("13.0");
  });
  it("should correctly return the user's age in Jupiter years.", function() {
    expect(newUser.calculateAgeOnPlanet("Jupiter")).toEqual("2.1");
  });
  it("should correctly return the number of remaining years the user have left on Earth", function() {
    let newUser = new UserAge("March 31, 1904", 80);
    newUser.calculateEarthAgeInYears();
    expect(newUser.calculateYearsLeftOnPlanet("Earth")).toEqual(
      "You have lived 34.3 years passed the life expectancy on Earth!"
    );
  });
  it("should correctly return the number of remaining years the user have left on Mercury", function() {
    expect(newUser.calculateYearsLeftOnPlanet("Mercury")).toEqual(
      "You still have 231.2 years of life expectancy left on Mercury!"
    );
  });
  it("should correctly return the number of remaining years the user have left on Venus", function() {
    expect(newUser.calculateYearsLeftOnPlanet("Venus")).toEqual(
      "You still have 89.5 years of life expectancy left on Venus!"
    );
  });
  it("should correctly return the number of remaining years the user have left on March", function() {
    expect(newUser.calculateYearsLeftOnPlanet("Mars")).toEqual(
      "You still have 29.6 years of life expectancy left on Mars!"
    );
  });
  it("should correctly return the number of remaining years the user have left on Jupiter", function() {
    expect(newUser.calculateYearsLeftOnPlanet("Jupiter")).toEqual(
      "You still have 4.6 years of life expectancy left on Jupiter!"
    );
  });
});

// * If a user has already surpassed the average life expectancy, the program will return the number of years they have lived past the life expectancy.
