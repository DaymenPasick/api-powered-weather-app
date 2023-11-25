
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





//Buttons
var searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener('click', takeFormInput); 


//to take in city search value
function takeFormInput(event){
    event.preventDefault()
    var cityInput = document.getElementById('city-input').value;
    lastSearchedCity = cityInput;
    console.log(cityInput)

    saveSearchHistory()
}

//function that will save to local storage on click1
var lastSearchedCity = "";
var historyObject = { city: []}
function saveSearchHistory() {

       historyObject.city.push(lastSearchedCity)
       localStorage.setItem("history", JSON.stringify(historyObject))
   
   }

//functionality for retrieving history from local storage

function historyGrab() {
    for(i=0; i < 5; i++){
        if(historyObject === null || historyObject == undefined || historyObject === "" || historyObject === ''){
        
        } else {
        historyObject = JSON.parse(localStorage.getItem('history'));
        }
        // console.log(historyObject.city)
    }
    
}

historyGrab()
console.log(historyObject.city)

var cityHistory = historyObject.city

//search history node
var searchHistoryParent = document.getElementById('search-history')
// will use this function to write searched city history into button elements
function populateHistory(){
    for (i = 0; i < 5; i++){
        var historySlot = document.createElement('button');
        var searchCities = cityHistory[i]
        historySlot.textContent = searchCities
        
        searchHistoryParent.appendChild(historySlot)
        historySlot.setAttribute("class", "history-button")
    }
}
populateHistory();
console.log(searchHistoryParent.children)
