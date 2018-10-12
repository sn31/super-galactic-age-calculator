let todayDate = new Date();

export class UserAge{
    constructor (userDOB, userLifeExpectancy)
    {
        this.DOB = new Date(userDOB);
        this.userAgeInYears;
        this.userLifeExpectancy = userLifeExpectancy;
        this.mercuryAge;
        this.venusAge;
        this.marsAge;
        this.jupiterAge;
    }
    
    calculateEarthAgeInYears()
    {
        let userAgeInSecond = (todayDate.getTime() - this.DOB.getTime())/1000;
        this.userAgeInYears = (userAgeInSecond/31622400).toFixed(1);
        return this.userAgeInYears;
    }
    calculateMercuryAge() {
        this.mercuryAge = (this.userAgeInYears/0.24).toFixed(1);
        return this.mercuryAge;
    }
    calculateVenusAge() {
        this.venusAge = (this.userAgeInYears/0.62).toFixed(1);
        return this.venusAge;
    }
    calculateMarsAge() {
       this.marsAge = (this.userAgeInYears/1.88).toFixed(1);
        return this.marsAge;
    }
    calculateJupiterAge() {
        this.jupiterAge = (this.userAgeInYears/11.86).toFixed(1);
        return this.jupiterAge;
    }
    yearsLeftOnEarth()
    {
        let yearsLeftOnEarth = this.userLifeExpectancy - this.userAgeInYears;
        let result = `You still have ${yearsLeftOnEarth} years of life expectancy left on Earth!`;
        if (yearsLeftOnEarth < 0)
        {
            result = `You have live ${yearsLeftOnEarth} years passed the life expectancy on Earth!`;
        }
        return result;
    }
    yearsLeftOnMercury(){
        let userLifeExpectancyMercury = (this.userLifeExpectancy/0.24);
        let yearsLeftOnMercury = (userLifeExpectancyMercury - parseFloat(this.mercuryAge)).toFixed(1);
        return yearsLeftOnMercury;
    }
    yearsLeftOnVenus(){
        let userLifeExpectancyVenus = (this.userLifeExpectancy/0.62);
        let yearsLeftOnVenus = (userLifeExpectancyVenus - parseFloat(this.venusAge)).toFixed(1);
        return yearsLeftOnVenus;
    }
    yearsLeftOnMars(){
        let userLifeExpectancyMars = (this.userLifeExpectancy/1.88).toFixed(1);
        let yearsLeftOnMars = (userLifeExpectancyMars - parseFloat(this.marsAge)).toFixed(1);        
        return yearsLeftOnMars;
    }
    yearsLeftOnJupiter(){
        let userLifeExpectancyJupiter = (this.userLifeExpectancy/11.86).toFixed(1);
        let yearsLeftOnJupiter = (userLifeExpectancyJupiter - parseFloat(this.jupiterAge)).toFixed(1);
        return yearsLeftOnJupiter;
    }

}
