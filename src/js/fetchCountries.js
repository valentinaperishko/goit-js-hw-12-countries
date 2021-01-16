export default function fetchCountries(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
}
  
  


