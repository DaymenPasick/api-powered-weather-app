
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

    

    function saveSearchHistory() {
          //working from here to fix tommorow  
        historyObject.city.push(cityInput)
        localStorage.setItem("history", JSON.stringify(historyObject))
    
    }
 

    saveSearchHistory()
}

//function that will save to local storage on click
var lastSearchedCity = "";
var historyObject = { city: []}




//functionality for retrieving history from local storage
function historyGrab() {
    
    for(i=0; i < 5; i++){
        if(historyObject.city === null || historyObject.city === undefined || historyObject.city === "" || historyObject.city === ''){
        
        } else {
        historyObject = JSON.parse(localStorage.getItem('history')) || {};
        }
    
    }
    
}

historyGrab()
// console.log(historyObject.city)

// function setStorageLimit() {
//     var historyLimit = 5;
//     var limitBoolean = false; //will be triggered true when my object exceeds 5
//     if(historyObject.length > historyLimit){
//         limitBoolean = true; //should change when object.city is gr8er than 5
//     }
//     return historyLimit;
// }




//search history node
var cityHistory = historyObject.city
var searchHistoryParent = document.getElementById('search-history')
// will use this function to write searched city history into button elements
function populateHistory(){
    for (i = 0; i < 5; i++){
        var historySlot = document.createElement('button');
        var searchCities = cityHistory;
        if (cityHistory){
        historySlot.textContent = searchCities[i];
        }
        searchHistoryParent.appendChild(historySlot)
        historySlot.setAttribute("class", "history-button")
    }
}
populateHistory();
// console.log(searchHistoryParent.children)
