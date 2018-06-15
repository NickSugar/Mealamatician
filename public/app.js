
import { landingCtrl } from './landingComponent/landingCtrl.js'

var loadComponent = function (componentCtrl, appendToElementID) {

    var url = '../' + componentCtrl.name + 'Component/' + componentCtrl.name + '.html';
    var appendToElement;

    if (!appendToElementID) {
        appendToElement = document.getElementById('router');
    } else {
        appendToElement = document.getElementById(appendToElementID)
    }

    var request = new XMLHttpRequest();

    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            appendHTMLsnippetTo(request.responseText, appendToElement);
            componentCtrl.init();
        }
    }

    request.open('GET', url);
    request.send();
}


var appendHTMLsnippetTo = function (HTMLsnippet, appendToElement) {
    appendToElement.innerHTML = HTMLsnippet;
}

window.onload = function (e) {

  //  if (window.location.pathname == '/' || '/landing') {
 //       loadComponent('landing');
//    }
}

if (window.location.pathname == '/' || '/landing') {
    loadComponent(landingCtrl);
}

var header = document.getElementById('headerContainer');

  //  if (header) {
 //       loadComponent('header', 'headerContainer')
//    }
