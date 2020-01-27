function watchForm() {
  $('.stateEntry').submit(function(e) {
    e.preventDefault();
    getStateInfo();
  })};

function getStateInfo() {
  let APIKey = "3DCo842Nu0yOceWvfiB0eYZW005DdcBiQgccOV73";
  let endpoint = "https://developer.nps.gov/api/v1/parks";
  let stateid = $('.state').val();
  let stateid2 = $('.state2').val();
  let stateid3 = $('.state3').val();
  let max = $('.number').val();
  let url = `${endpoint}?stateCode=${stateid}&limit=${max}&api_key=${APIKey}`
  let url2 = `${endpoint}?stateCode=${stateid}&stateCode=${stateid2}&limit=${max}&api_key=${APIKey}`
  let url3 = `${endpoint}?stateCode=${stateid}&stateCode=${stateid2}&stateCode=${stateid3}&limit=${max}&api_key=${APIKey}`
  let url4 = `${endpoint}?stateCode=${stateid}&stateCode=${stateid3}&limit=${max}&api_key=${APIKey}`
  if (stateid2 === "" && stateid3 === "") {
    console.log(url);
    fetch(url)
  .then(response => response.json())
  .then(responseJson => 
    displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
  } else if (stateid2 !== "" && stateid3 === "") {
    console.log(url2);
    fetch(url2)
  .then(response => response.json())
  .then(responseJson => 
    displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
  } else if (stateid2 !== "" && stateid3 !== "") {
    console.log(url3);
    fetch(url3)
  .then(response => response.json())
  .then(responseJson => 
    displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
  } else if (stateid2 === "" && stateid3 !== "") {
    console.log(url4);
    fetch(url4)
  .then(response => response.json())
  .then(responseJson => 
    displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
  } else {
  fetch(url)
  .then(response => response.json())
  .then(responseJson => 
      displayResults(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}}
  
function displayResults(responseJson) {
  $('.results').empty();
  for (let i = 0; i < responseJson.data.length; i++){
    $('.results').append(`<h3>Name: ${responseJson.data[i].fullName}</h3>
      <p>States: ${responseJson.data[i].states}</p>
      <p>Official Website: <a href="${responseJson.data[i].url}" target="_blank">${responseJson.data[i].url}</a></p>
      <p>Description: ${responseJson.data[i].description}</p>
      <p>Direction Information: ${responseJson.data[i].directionsInfo}</p>
      <p>Directions URL: <a href="${responseJson.data[i].directionsUrl}" target="_blank">${responseJson.data[i].directionsUrl}</a></p>
      <p>Latitude and Longitude: ${responseJson.data[i].latLong}</p>
      <hr>`
    )};
  $('.results').removeClass('hidden');
};
  
$(function() {
  watchForm();
});
