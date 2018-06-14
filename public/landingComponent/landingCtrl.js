
//var init = () => {

//var mainLandingPageButton = document.getElementById('startMealBuilder');

//mainLandingPageButton.addEventListener('click', () => { console.log('test button') });
//}

//var landingCtrl = {
//    init
//}


var LandingCtrlCon = function () { }; 

var LandingCtrl = new LandingCtrlCon();

LandingCtrlCon.prototype.init = () => {

    var mainLandingPageButton = document.getElementById('startMealBuilder');

    mainLandingPageButton.addEventListener('click', () => { console.log('test button') });
}

LandingCtrlCon.prototype.name = 'landing';

export { LandingCtrl }
