

var getHTMLsnippet = function (url) {
    var request = new XMLHttpRequest();
    var snippet;

    request.onreadystatechange = () => {
        if (request.readyState == 4) snippet = request.responseText;
    }

    request.open('GET', url);
    request.send();
}


var appendHTMLsnippet = function (HTMLsnippet, HTMLelementID) {
    document.getElementById(HTMLelementID).innerHTML = HTMLsnippet;
}

getHTMLsnippet('../headerComponent/header.html');