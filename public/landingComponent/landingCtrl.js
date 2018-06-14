
//var init = () => {

//var mainLandingPageButton = document.getElementById('startMealBuilder');

//mainLandingPageButton.addEventListener('click', () => { console.log('test button') });
//}

//var landingCtrl = {
//    init
//}


var LandingCtrl = function () { }; 

LandingCtrl.prototype.init = () => {

    var mainLandingPageButton = document.getElementById('startMealBuilder');

    mainLandingPageButton.addEventListener('click', () => { console.log('test button') });
}

export { LandingCtrl }