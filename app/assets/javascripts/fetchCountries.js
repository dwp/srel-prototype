var request = new XMLHttpRequest();
request.open('GET', '/public/javascripts/countries.js', true);

request.onload = function() {
  var errorLoadingCountriesDiv = document.getElementById('errorLoadingCountriesDiv');
  var errorLoadingCountriesText = document.getElementById('errorLoadingCountriesText');
  var country = document.getElementById('country');
  
  if (this.status >= 200 && this.status < 400) {
    // Success!
    // console.log('success: countries loaded')

    if (errorLoadingCountriesDiv && country) {
      errorLoadingCountriesDiv.classList.add('hidden');
      country.classList.remove('hidden');
      var countries = this.response;
      console.log('countries', countries);
    }
  } else {
    // We reached our target server, but it returned an error
    console.log('We reached our target server, but it returned an error')

    if (errorLoadingCountriesDiv && errorLoadingCountriesText && country) {
      errorLoadingCountriesText.innerHTML = "Are we currently unable to load the list of countries";
      errorLoadingCountriesDiv.classList.remove('hidden');
      country.classList.add('hidden');
    }
  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
function populateCountrySelect() {
  // console.log('populateSelect called');
//   THE JSON ARRAY.
// console.log('countries', countries);
  var countryList = document.getElementById('country');
  if (countryList) 
    for (var i = 0; i < countries.length; i++) {
      // POPULATE SELECT ELEMENT WITH JSON.
      countryList.innerHTML = countryList.innerHTML +
        '<option value="' + countries[i] + '">' + countries[i] + '</option>';
    }
}

populateCountrySelect(); 