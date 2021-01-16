export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("error fetching data");
      }
    },
  );
}
