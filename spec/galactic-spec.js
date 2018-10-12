import { UserAge } from "../src/galactic-logic";

describe("Galactic Age Calculator", function() {
  let userDOB = "March 31, 1994";
  let userLifeExpectancy = 80;
  let newUser = new UserAge(userDOB, userLifeExpectancy);

  it("should correctly return the user's age in Earth years", function() {
    expect(newUser.calculateEarthAgeInYears()).toEqual("24.5");
  });
  it("should correctly return the user's age in Mercury years.", function() {
    expect(newUser.calculateMercuryAge()).toEqual("102.1");
  });
  it("should correctly return the user's age in Venus years.", function() {
    expect(newUser.calculateVenusAge()).toEqual("39.5");
  });
  it("should correctly return the user's age in Mars years.", function() {
    expect(newUser.calculateMarsAge()).toEqual("13.0");
  });
  it("should correctly return the user's age in Jupiter years.", function() {
    expect(newUser.calculateJupiterAge()).toEqual("2.1");
  });
  it("should correctly return the number of remaining years the user have left on Earth", function() {
    expect(newUser.yearsLeftOnEarth()).toEqual("You still have 55.5 years of life expectancy left on Earth!");
  });
  it("should correctly return the number of remaining years the user have left on Mercury", function() {
    expect(newUser.yearsLeftOnMercury()).toEqual("231.2");
  });
  it("should correctly return the number of remaining years the user have left on Venus", function() {
    expect(newUser.yearsLeftOnVenus()).toEqual("89.5");
  });
  it("should correctly return the number of remaining years the user have left on March", function() {
    expect(newUser.yearsLeftOnMars()).toEqual("29.6");
  });
  it("should correctly return the number of remaining years the user have left on Jupiter", function() {
    expect(newUser.yearsLeftOnJupiter()).toEqual("4.6");
  });
});


// * If a user has already surpassed the average life expectancy, the program will return the number of years they have lived past the life expectancy.
