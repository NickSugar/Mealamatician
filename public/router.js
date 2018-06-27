
import { app } from './app.js'

var init = function () {
	
	if (window.location.pathname == ('/' || '/landing')) {
	app.helperFunctions.loadComponent(app.controllers.landingCtrl)
	}

	var header = document.getElementById('headerContainer')
	if (header) {
	app.helperFunctions.loadComponent(app.controllers.headerCtrl, 'headerContainer')
	}

	var footer = document.getElementById('footerContainer')
	if (footer) {
	app.helperFunctions.loadComponent(app.controllers.footerCtrl, 'footerContainer')
	}

	var components = app.controllers
	for (var component in components){
		var componentPattern = new RegExp(components[component].name, 'i','g')
		var pathname = window.location.pathname 
		if (componentPattern.test(pathname)) {
			app.helperFunctions.loadComponent(components[component])
		} 	
	}
}

var router = { init }

export { router }
