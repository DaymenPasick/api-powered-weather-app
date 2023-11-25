
//Navigational variables
var date = dayjs().format();

//current-day weather space node
var todaysDate = document.getElementById('todays-date');
var todaysTemp = document.getElementById('todays-temp').textContent;
var todaysWind = document.getElementById('todays-wind').textContent;
var todaysHumid = document.getElementById('todays-humid').textContent;
var todaysIcon = document.getElementById('todays-icon').textContent;
todaysDate.append("Date: " + date)
console.log(todaysIcon)



//search history node
var searchHistoryParent = document.getElementById('search-history')

function populateHistory(){
    for (i = 0; i < 5; i++){
        
    }
}
console.log(searchHistoryParent.children)



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