
//Navigational variables
var date = dayjs().format();


//current-day weather space node
var todaysDate = document.getElementById('todays-date');
var todaysTemp = document.getElementById('todays-temp').textContent;
var todaysWind = document.getElementById('todays-wind').textContent;
var todaysHumid = document.getElementById('todays-humid').textContent;
var todaysIcon = document.getElementById('todays-icon').textContent;
todaysDate.append("Date: " + date)
// console.log(todaysIcon)





//Buttons
var searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener('click', takeFormInput); 


//to take in city search value
function takeFormInput(event){
    event.preventDefault()
    var cityInput = document.getElementById('city-input').value;
    lastSearchedCity = cityInput;

    



    saveSearchHistory()
    searchHistoryGenerator()
}

//function that will save to local storage on click
var lastSearchedCity = "";
var historyObject = { city: []}

function saveSearchHistory() {

  historyObject.city.push(lastSearchedCity)
  localStorage.setItem("history", JSON.stringify(historyObject))

}



//functionality for retrieving history from local storage
function historyGrab() {
    
    for(i=0; i < 5; i++){
        historyObject = JSON.parse(localStorage.getItem('history')) || { city: [] };
        }
    }

historyGrab()










var cityHistory = historyObject.city
var searchHistoryParent = document.getElementById('search-history')
// will use this function to write searched city history into button elements



function searchHistoryGenerator(){
    var historySlot = document.createElement('button');
    var siftedHistory; 
    var arrayForSearchHistoryButtons = [];
    
        for (i = 0; i < cityHistory.length; i++) {
            if (cityHistory[i] == "" || cityHistory[i] === undefined || cityHistory[i] =='') {
                } else {    
                    siftedHistory = cityHistory[i];
                    arrayForSearchHistoryButtons.push(siftedHistory)
                    console.log(arrayForSearchHistoryButtons) 
                }
            }

        for (i = 0; i < arrayForSearchHistoryButtons.length; i++) {
                var historySlot = document.createElement('button');
                historySlot.setAttribute("class", "history-button")
                historySlot.textContent = arrayForSearchHistoryButtons[i];
                searchHistoryParent.appendChild(historySlot)
            }



        function setStorageLimit(object) {
            var historyLimit = 5;
            var limitBoolean = false; //will be triggered true when my object exceeds 5
            if(object.length > historyLimit){
                limitBoolean = true; //should change when object.city is gr8er than 5
            }
            
            return limitBoolean;
        }

}
searchHistoryGenerator();









