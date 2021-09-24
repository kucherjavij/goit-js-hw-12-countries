import './sass/main.scss';
import debounce from 'lodash.debounce'
import country from './country.hbs'
import countryList from './country-list.hbs'
import fetchCountry from './partials/example'
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});
const refs = {
    input:document.querySelector('.form-input'),
    div:document.querySelector('.js-country-div')
}

refs.input.addEventListener('input',debounce(makeCountry, 500) )

let searchQuery = '';

function makeCountry (e){

searchQuery = e.target.value

fetchCountry.getCountries(searchQuery).then(createCountry)
}

function createCountry(e){
if (e.status === 404) {refs.div.insertAdjacentHTML = '';

return
    
}

 if (e.length > 10) {
    refs.div.in = '';
  
    return
}

else if (e.length > 1) {
    refs.div.innerHTML = countryList(e)
    return
}
refs.div.innerHTML = country(e)
console.log(country(e));
}

// function onError(){
//     refs.div.insertAdjacentHTML = '';
// }


