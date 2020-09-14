// import {simple as request} from './simple-request.js';
import {fetchRequest as request} from './fetch-request.js';

const form = document.querySelector('form');
form.addEventListener("submit", (e) => searchProductCalories(e));

function searchProductCalories(event) {
    event.preventDefault();
    const searchText = document.querySelector('input[type=search]').value;
    request(searchText);
}