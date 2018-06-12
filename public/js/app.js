

var loadComponent = function (componentName, appendToElementID) {

    var url = '../' + componentName + 'Component/' + componentName + '.html';
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
        }
    }

    request.open('GET', url);
    request.send();
}


var appendHTMLsnippetTo = function (HTMLsnippet, appendToElement) {
    appendToElement.innerHTML = HTMLsnippet;
}


