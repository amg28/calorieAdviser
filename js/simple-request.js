import * as util from './util.js'

const apiKey = '8aad73b749fd4b43b0367f36e4bdbcf1&';

function sendRequest(searchPhrase) {
    const request = new XMLHttpRequest();
        request.onload = requestListener;
        request.onerror = requestError;
        request.open("GET", `https://api.spoonacular.com/recipes/quickAnswer?q=${searchPhrase + ' calories'}&apiKey=${apiKey}`, true);
        request.send();    
}

function requestListener() {
    const data = JSON.parse(this.responseText);
    util.showProduct(data);
}

function requestError(err){
    console.log('Fetch Error :-S', err);
}

export {sendRequest as simple};