import * as util from './util.js';

function request(searchPhrase){

const apiKey = '8aad73b749fd4b43b0367f36e4bdbcf1&';
const url = `https://api.spoonacular.com/recipes/quickAnswer?q=${searchPhrase + ' calories'}&apiKey=${apiKey}`;

fetch(url)
    .then(
        (response) => {
            if(response.status !== 200){
                console.log(`Fail. Status: ${response.status}`);
                return;
            }
            response.json().then((data) => util.showProduct(data));

            // console.log(response.headers.get('x-api-quota-request'));
        }
    )
    .catch((error) => console.log(`Error: ${error}`));

}

export {request as fetchRequest};