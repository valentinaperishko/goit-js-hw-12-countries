import '@pnotify/core/dist/PNotify.css';
import "@pnotify/core/dist/BrightTheme.css";
import { error } from '@pnotify/core';

export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then((response) => { 
      if (response.ok) {
        return response.json();
      } else {
        return error('You entered invalid name!');
      }
    })
    .then((data) => data);
}
