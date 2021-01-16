import { debounce } from 'debounce';
import getRefs from './refs.js';
import errorNotify from './error.js';
import API from './fetchCountries';
import countryCardTpl from '../templates/countryCardTpl';
import countriesList from '../templates/countriesList';


const refs = getRefs();
refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
e.preventDefault();
const form = e.currentTarget;
const searchQuery = form.elements.query.value;
if(!searchQuery){
    return;
}
}

API.fetchCountries(searchQuery)
.then(data => { 
    form.reset();
if(data.length > 10) {
    return errorNotify ('Be more specific on your search!');
} else if (data.length > 1 && data.length <= 10) {
    renderCountriesList(data);
} else renderCountryCard(country);

})
.catch (err => {
    if(err === 404) {
        errorNotify ('No country found!');   
    } else errorNotify ('Try again later!')  
    
})





function renderCountryCard(country) {
const countryCardMarkup = countryCardTpl(country);
refs.articlesContainer.innerHTML = countryCardMarkup;  
}

function renderCountriesList(data) {
    const countriesListMarkup = countriesList(data);
    refs.articlesContainer.innerHTML = countriesListMarkup;
  }