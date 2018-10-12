let todayDate = new Date();

export class UserAge{
    constructor (userDOB, userLifeExpectancy)
    {
        this.DOB = new Date(userDOB);
        this.userAgeInYears = 0;
        this.userLifeExpectancy = userLifeExpectancy;
        this.mercuryAge = 0;
        this.venusAge = 0;
        this.marchAge = 0;
        this.jupiterAge = 0;
    }
    
    calculateEarthAgeInYears()
    {
        this.userAgeInYears = todayDate.getFullYear()-this.DOB.getFullYear();
        return this.userAgeInYears;
    }
    calculateMercuryAge() {
        this.mercuryAge = (this.userAgeInYears/0.24).toFixed(2);
        return this.mercuryAge;
    }
    calculateVenusAge() {
        this.venusAge = (this.userAgeInYears/0.62).toFixed(2);
        return this.venusAge;
    }
    calculateMarchAge() {
       this.marchAge = (this.userAgeInYears/1.88).toFixed(2);
        return this.marchAge;
    }
    calculateJupiterAge() {
        this.jupiterAge = (this.userAgeInYears/11.86).toFixed(2);
        return this.jupiterAge;
    }
    yearsLeftMercury(){
        let userLifeExpectancyMercury = (this.userLifeExpectancy/0.24).toFixed(2);
        let yearsLeftMercury = userLifeExpectancyMercury - this.mercuryAge;
        return yearsLeftMercury;
    }
    yearsLeftVenus(){
        let userLifeExpectancyVenus = (this.userLifeExpectancy/0.62).toFixed(2);
        let yearsLeftVenus = userLifeExpectancyVenus - this.venusAge;
        return yearsLeftVenus;
    }
    yearsLeftMarch(){
        let userLifeExpectancyMarch = (this.userLifeExpectancy/1.88).toFixed(2);
        let yearsLeftMarch = userLifeExpectancyMarch - this.marchAge;
        return yearsLeftMarch;
    }
    yearsLeftJupiter(){
        let userLifeExpectancyJupiter = (this.userLifeExpectancy/11.86).toFixed(2);
        let yearsLeftJupiter = userLifeExpectancyJupiter - this.jupiterAge;
        return yearsLeftJupiter;
    }

}
