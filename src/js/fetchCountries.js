export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => data);
}
