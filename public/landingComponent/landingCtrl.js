
import { app } from '../app.js'

var init = () => {

var mainLandingPageButton = document.getElementById('startMealBuilder')

mainLandingPageButton.addEventListener('click', () => {
    app.helperFunctions.loadComponent(app.controllers.calorieCalcCtrl)
    })
}

var name = 'landing'

var landingCtrl = {
    init,
    name
}

export { landingCtrl }
//var LandingCtrlCon = function () { } 

//var LandingCtrl = new LandingCtrlCon()

//LandingCtrlCon.prototype.init = () => {

//    var mainLandingPageButton = document.getElementById('startMealBuilder')

//    mainLandingPageButton.addEventListener('click', () => { console.log('test button') })
//}

//LandingCtrlCon.prototype.name = 'landing'

