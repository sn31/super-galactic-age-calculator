import { UserAge } from "../src/galactic-logic";

describe("Galactic Age Calculator", function() {
    let userDOB ="March 31, 1994";
    let newUser = new UserAge(userDOB);
  it("should correctly return the user's age in Earth years", function() {
      expect(newUser. calculateEarthAgeInYears()).toEqual(24);
  });
});

// * Take in the user's DOB and find the user's age in Earth years.
// * The program will return the user's age in Mercury years. (A Mercury year is .24 Earth years.)
// * The program will return the user's age in Venus years. (A Venus year is .62 Earth years.)
// * The program will return the user's age in Mars years. (A Mars year is 1.88 Earth years.)
// * The program will return the user's age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
// * The program will calculate the user’s life expectancy using average life expectancy for their demographic.
// * The program will determines how many years a user has left to live on each planet.
// * If a user has already surpassed the average life expectancy, the program will return the number of years they have lived past the life expectancy.
