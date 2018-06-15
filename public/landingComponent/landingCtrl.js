
var init = () => {

var mainLandingPageButton = document.getElementById('startMealBuilder');

mainLandingPageButton.addEventListener('click', () => { console.log('test button') });
}

var name = 'landing';

var landingCtrl = {
    init,
    name
}


//var LandingCtrlCon = function () { }; 

//var LandingCtrl = new LandingCtrlCon();

//LandingCtrlCon.prototype.init = () => {

//    var mainLandingPageButton = document.getElementById('startMealBuilder');

//    mainLandingPageButton.addEventListener('click', () => { console.log('test button') });
//}

//LandingCtrlCon.prototype.name = 'landing';

export { landingCtrl }
