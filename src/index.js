import './sass/main.scss';
import debounce from 'lodash.debounce'
import country from './country.hbs'
import countryList from './country-list.hbs'
import fetchCountry  from './partials/example'
import { alert, error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

const refs = {
    input:document.querySelector('.form-input'),
    div:document.querySelector('.js-country-div')
}

refs.input.addEventListener('input',debounce(makeCountry, 500) )



function makeCountry (e){

const searchQuery = e.target.value.trim()

fetchCountry.getCountries(searchQuery).then(createCountry).catch(onFetchError)


}

function createCountry(e){


 if (e.length > 10) {
    refs.div.innerHTML = '';
    error({ text: 'Too many matches found. Please enter a more specific query!' })
return
}
else if (e.length === 0 ) {
    refs.div.innerHTML = '';
return}


else if (e.length > 1) {
    refs.div.innerHTML = countryList(e)
    return
}
else if(e.status === 404) {
    refs.div.innerHTML = '';
    alert({text:'Check the correctness of the data entered, this country does not exist!'})
        return
}
else if(refs.input.value===null||refs.input.value===''||refs.input.value===' ') {
    refs.div.innerHTML = '';
    
        return
}

 refs.div.innerHTML = country(e)

}



function onFetchError(err) {
    refs.div.innerHTML = ''
    alert({ text: 'Check the correctness of the data entered!' })
  }

