
var init = () => {

var mainLandingPageButton = document.getElementById('startMealBuilder');

mainLandingPageButton.addEventListener('click', () => { console.log('test button') });
}

var landingCtrl = {
    init
}

export { landingCtrl }