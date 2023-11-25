
//Navigational variables

//current weather space node



//Buttons
var searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener('click', takeFormInput); 


//to test clicks
function clickTest(event) {
    event.preventDefault()
    console.log('clicked')
}

//to take in city search value
function takeFormInput(event){
    event.preventDefault()
    var cityInput = document.getElementById('city-input').value;
    console.log(cityInput)
}

















console.log()
console.log()