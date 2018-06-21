
import { app } from './app.js'

var init = function () {
    if (window.location.pathname == ('/' || '/landing')) {
        loadComponent(landingCtrl)
    }

    var header = document.getElementById('headerContainer')
    if (header) {
        loadComponent(headerCtrl, 'headerContainer')
    }

    var footer = document.getElementById('footerContainer')
    if (footer) {
        loadComponent(footerCtrl, 'footerContainer')
    }
}

var router = { init }

export { router }