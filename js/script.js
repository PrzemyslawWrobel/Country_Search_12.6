
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);
$('country-name').keypress(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
	  	url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}


   function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
      console.log(item);
      $('<li>')

        // zobacz na linijkę kodu poniżej
        .append($('<div>').prepend('<img src="' + item.flag + '">')) 


        .append($('<h2>').text(item.name))
        .append($('<p>').text('Stolica: ' + item.capital))
        .append($('<p>').text('Kierunkowy: ' + item.callingCodes))
        .append($('<p>').text('Region: ' + item.region))
        .append($('<p>').text('Język: ' + item.languages))
        .append($('<p>').text('Powierzchnia: ' + item.area + ' sq. km'))
        .append($('<p>').text('Zaludnienie: ' + item.population))
        .append($('<p>').text('Waluta: ' + item.currencies))
        .appendTo(countriesList); 
          
    });

  
}