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
    yearsLeftEarth()
    {
        return this.userLifeExpectancy - this.userAgeInYears;
    }
    yearsLeftMercury(){
        let userLifeExpectancyMercury = (this.userLifeExpectancy/0.24);
        let yearsLeftMercury = (userLifeExpectancyMercury - parseFloat(this.mercuryAge)).toFixed(1);
        return yearsLeftMercury;
    }
    yearsLeftVenus(){
        let userLifeExpectancyVenus = (this.userLifeExpectancy/0.62);
        let yearsLeftVenus = (userLifeExpectancyVenus - parseFloat(this.venusAge)).toFixed(1);
        return yearsLeftVenus;
    }
    yearsLeftMarch(){
        let userLifeExpectancyMarch = (this.userLifeExpectancy/1.88).toFixed(1);
        let yearsLeftMarch = (userLifeExpectancyMarch - parseFloat(this.marchAge)).toFixed(1);        
        return yearsLeftMarch;
    }
    yearsLeftJupiter(){
        let userLifeExpectancyJupiter = (this.userLifeExpectancy/11.86).toFixed(1);
        let yearsLeftJupiter = (userLifeExpectancyJupiter - parseFloat(this.jupiterAge)).toFixed(1);
        return yearsLeftJupiter;
    }

}
