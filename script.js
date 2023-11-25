
//Household variables
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

// ===== API section start ======================================================

var weatherApiKey = "1dd8986d9e675512cead5440c0f34f1e";


//will handle calls to openweather geoAPI
var geoApiCall = "http://api.openweathermap.org/geo/1.0/direct?q=Sarasota&limit=1&appid=" + weatherApiKey;
// fetch(geoApiCall)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data){
//         console.log(data[0]);

//         var cityName = data[0].name;
//         console.log("searched city: " + cityName)
//         var cityLong = data[0].lon;
//         console.log(cityName + " Longitude: " + cityLong)
//         var cityLat = data[0].lat;
//         console.log(cityName + " Latitude : " + cityLat)


//     })











// ===== API section end ======================================================













// ===== Search Button Section Start ======================================================

//function will take city search into a variable
function takeFormInput(event){
    event.preventDefault()
    var cityInput = document.getElementById('city-input').value;
    lastSearchedCity = cityInput;

    //will handle calls to openweather geoAPI
    var geoApiCall = "http://api.openweathermap.org/geo/1.0/direct?q="+cityInput+"&limit=1&appid=" + weatherApiKey;
    fetch(geoApiCall)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data[0]);

        var cityName = data[0].name;
        console.log("searched city: " + cityName)
        var cityLong = data[0].lon;
        console.log(cityName + " Longitude: " + cityLong)
        var cityLat = data[0].lat;
        console.log(cityName + " Latitude : " + cityLat)


    })



    saveSearchHistory()
}


//function that will save to local storage on click
var lastSearchedCity = "";
var historyObject = { city: []}

function saveSearchHistory() {
  historyObject.city.push(lastSearchedCity)
  localStorage.setItem("history", JSON.stringify(historyObject))
}

// ===== Search Button Section Start ======================================================

// ===== LocalStorage History Management Start ======================================================
//function will retrieve city search history from local storage
function historyGrab() {
    
    for(i=0; i < 5; i++){
        historyObject = JSON.parse(localStorage.getItem('history')) || { city: [] };
        }
    }

historyGrab()

//this variable created using local-storage object from historyGrab()
var cityHistory = historyObject.city

//function will sort through local storage search history
//and generate recently searched city buttons accordingly
var searchHistoryParent = document.getElementById('search-history')

function searchHistoryGenerator(){
    var historySlot = document.createElement('button');
    var siftedHistory; 
    var arrayForSearchHistoryButtons = [];
    
        //loop will take cityHistory local storage values and create an array that will be
        //used to create search history buttons
        for (i = 0; i < cityHistory.length; i++) {
            if (cityHistory[i] == "" || cityHistory[i] === undefined || cityHistory[i] =='') {
                } else {    
                    siftedHistory = cityHistory[i];
                    arrayForSearchHistoryButtons.push(siftedHistory)
                    if(setArrayLimit(arrayForSearchHistoryButtons)){ //after setting array limit, will also replace with 
                        arrayForSearchHistoryButtons.shift()         //most recently inputed city search
                    }  
                    // console.log(arrayForSearchHistoryButtons) 
                }
            }
        
        //loop will handle actual creation of city search history buttons   
        for (i = 0; i < arrayForSearchHistoryButtons.length; i++) {
                var historySlot = document.createElement('button');
                historySlot.setAttribute("class", "history-button")
                historySlot.textContent = arrayForSearchHistoryButtons[i];
                searchHistoryParent.appendChild(historySlot)
            }
 
        //loop will limit ammount of  city searches used to populate city history buttons    
        function setArrayLimit(array) {
            var historyLimit = 5;
            var limitBoolean = false; //will be triggered true when my array exceeds 5 
            if(array.length > historyLimit){
                limitBoolean = true; //should change to true when length of array is greater than history limit
            }
            
            return limitBoolean;
        }

}
searchHistoryGenerator();
// ===== LocalStorage History Management End ======================================================









