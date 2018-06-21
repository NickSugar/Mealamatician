
var init = () => {
    window.history.pushState(null, '', '/calorieCalc')
}

var name = 'calorieCalc'

var calorieCalcCtrl = {
    init,
    name
}

export { calorieCalcCtrl }
