
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
// will use this function to write searched city history into button elements
function populateHistory(){
    for (i = 0; i < 5; i++){
        var historySlot = document.createElement('button');
        var searchCities = "hi"
        historySlot.textContent = searchCities
        
        searchHistoryParent.appendChild(historySlot)
        historySlot.setAttribute("class", "history-button")
    }
}
populateHistory();
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





    function saveSearchHistory() {
        localStorage.setItem("city", cityInput)
    }
    saveSearchHistory()
}


//function that will save to local storage on click

function saveSearchHistory() {
    localStorage.setItem("city", cityInput)
}















console.log()
console.log()