



function getCountries(searchQuery) {
    return fetch(`https://restcountries.com/v2/name/${searchQuery}`).then(response => response.json())
}

export default { getCountries };


// function getCountries(searchQuery) {
//     return fetch(`https://restcountries.com/v2/name//${searchQuery}`).then(response => response.json())
// }

// export default { getCountries };








