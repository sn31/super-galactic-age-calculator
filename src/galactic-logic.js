let todayDate = new Date();

export class UserAge{
    constructor (userDOB, userLifeExpectancy)
    {
        this.DOB = new Date(userDOB);
        this.userAgeInYears;
        this.userLifeExpectancy = userLifeExpectancy;
        this.mercuryAge;
        this.venusAge;
        this.marchAge;
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
    calculateMarchAge() {
       this.marchAge = (this.userAgeInYears/1.88).toFixed(1);
        return this.marchAge;
    }
    calculateJupiterAge() {
        this.jupiterAge = (this.userAgeInYears/11.86).toFixed(1);
        return this.jupiterAge;
    }
    yearsLeftMercury(){
        let userLifeExpectancyMercury = (this.userLifeExpectancy/0.24).toFixed(1);
        let yearsLeftMercury = userLifeExpectancyMercury - this.mercuryAge;
        return yearsLeftMercury;
    }
    yearsLeftVenus(){
        let userLifeExpectancyVenus = (this.userLifeExpectancy/0.62).toFixed(1);
        let yearsLeftVenus = userLifeExpectancyVenus - this.venusAge;
        return yearsLeftVenus;
    }
    yearsLeftMarch(){
        let userLifeExpectancyMarch = (this.userLifeExpectancy/1.88).toFixed(1);
        let yearsLeftMarch = userLifeExpectancyMarch - this.marchAge;
        return yearsLeftMarch;
    }
    yearsLeftJupiter(){
        let userLifeExpectancyJupiter = (this.userLifeExpectancy/11.86).toFixed(1);
        let yearsLeftJupiter = userLifeExpectancyJupiter - this.jupiterAge;
        return yearsLeftJupiter;
    }

}
