import { UserAge } from "../src/galactic-logic";

describe("Galactic Age Calculator", function() {
  let userDOB = "March 31, 1994";
  let newUser = new UserAge(userDOB);
  it("should correctly return the user's age in Earth years", function() {
    expect(newUser.calculateEarthAgeInYears()).toEqual("24.5");
  });
  it("should correctly return the user's age in Mercury years.", function() {
    expect(newUser.calculateMercuryAge()).toEqual("102.1");
  });
  it("should correctly return the user's age in Venus years.", function() {
    expect(newUser.calculateVenusAge()).toEqual("39.5");
  });
  it("should correctly return the user's age in March years.", function() {
    expect(newUser.calculateMarchAge()).toEqual("13.0");
  });
  it("should correctly return the user's age in Jupiter years.", function() {
    expect(newUser.calculateJupiterAge()).toEqual("2.1");
  });
});



// * The program will return the user's age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// * The program will calculate the user’s life expectancy using average life expectancy for their demographic.
// * The program will determines how many years a user has left to live on each planet.
// * If a user has already surpassed the average life expectancy, the program will return the number of years they have lived past the life expectancy.
