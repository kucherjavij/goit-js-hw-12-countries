
 export default function getCountries(searchQuery){
return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(r=>r.json())
}

