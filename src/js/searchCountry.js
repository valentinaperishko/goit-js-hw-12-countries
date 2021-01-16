import debounce from "lodash.debounce";
import getRefs from "./refs.js";
import errorNotify from "./error.js";
import fetchCountries from "./fetchCountries.js";
import countryCardTpl from "../templates/countryCardTpl.hbs";
import countriesList from "../templates/countriesList.hbs";

const refs = getRefs();
refs.searchForm.addEventListener("input", debounce(onSearch, 500));

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.target.value;

  if (!searchQuery) {
    return;
  }

  fetchCountries(searchQuery)
    .then((data) => {
      refs.articlesContainer.innerHTML = "";
      if (data.length > 10) {
        return errorNotify("Be more specific on your search!");
      } else if (data.length > 1 && data.length <= 10) {
        renderCountriesList(data);
      } else renderCountryCard(data);
    })
    .catch((err) => {
      if (err === 404) {
        errorNotify("No country found!");
      } else errorNotify("Try again later!");
    });
}

function renderCountryCard(data) {
  const countryCardMarkup = countryCardTpl(data);
  refs.articlesContainer.insertAdjacentHTML("beforeend", countryCardMarkup);
}

function renderCountriesList(data) {
  const countriesListMarkup = countriesList(data);
  refs.articlesContainer.insertAdjacentHTML("beforeend", countriesListMarkup);
}
