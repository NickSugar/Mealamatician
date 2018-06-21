
import { landingCtrl } from './landingComponent/landingCtrl.js'
import { headerCtrl } from './headerComponent/headerCtrl.js'
import { footerCtrl } from './footerComponent/footerCtrl.js'
import { calorieCalcCtrl } from './calorieCalcComponent/calorieCalcCtrl.js'


var loadComponent = function (componentCtrl, appendToElementID) {

    var appendHTMLsnippetTo = function (HTMLsnippet, appendToElement) {
    appendToElement.innerHTML = HTMLsnippet
    }
    
    var url = '../' + componentCtrl.name + 'Component/' + componentCtrl.name + '.html'
    var appendToElement

    if (!appendToElementID) {
        appendToElement = document.getElementById('router')
    } else {
        appendToElement = document.getElementById(appendToElementID)
    }

    var request = new XMLHttpRequest()

    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            appendHTMLsnippetTo(request.responseText, appendToElement)
            componentCtrl.init()
        }
    }

    request.open('GET', url)
    request.send()
}

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

window.onload = function (e) {

}

var app = {
    controllers: {
        landingCtrl,
        headerCtrl,
        footerCtrl,
        calorieCalcCtrl
    },
    helperFunctions: {
        loadComponent
    }
}

export { app }
