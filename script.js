
//Household variables
var date = dayjs().format();
//today's....variables will be used in getWeatherCall()
var todaysTemp = document.getElementById('todays-temp');
var todaysWind = document.getElementById('todays-wind');
var todaysHumid = document.getElementById('todays-humid');
var todaysIcon = document.getElementById('todays-icon');
var todaysDay = document.getElementById('todays-day');
var todaysDate = document.getElementById('todays-date');



//Buttons =======================================================================
var searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener('click', takeFormInput); 


// ===== API section start ======================================================
var weatherApiKey = "1dd8986d9e675512cead5440c0f34f1e";
// ===== API section end =========================================================


// ===== Search Button Section Start (Includes 2 API fetch requests)======================================================
//will handle calls to openweatherApi, using getCityGeo() lat and long 
function getWeatherCall(lat, lon) {
var weatherApiCall = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&appid=" + weatherApiKey;
fetch(weatherApiCall)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);

        var weatherNode = data.weather;
        console.log(weatherNode)

        var iconNode = data.weather[0].icon;
        console.log("Icon: " + iconNode)

        var temperatureNode = data.main.temp;
        console.log("Temp: " + temperatureNode)

        var humidtyNode = data.main.humidity;
        console.log("Humidty: " + humidtyNode)

        var windNode = data.wind.speed;
        console.log("Wind: " + windNode)

        var todaysDayFormat = dayjs().format('dddd');
        var todaysDateFormat = dayjs().format('M/YYYY');
        todaysDay.textContent = todaysDayFormat;
        todaysDate.textContent = todaysDateFormat;
        todaysIcon.textContent = iconNode;
        todaysTemp.textContent = "Temperature: " + temperatureNode;
        todaysHumid.textContent = "Humidity: " + humidtyNode;
        todaysWind.textContent = "Wind: " + windNode;
    })
}


function getForecastCall(lat, lon) {
        var forecastApiCall = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid=" + weatherApiKey;
        fetch(forecastApiCall)
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                console.log(data.list);

                //Day 2 forecast section ==============================
                var weatherNode2 = data.list[11].weather;
                console.log(weatherNode2)
                var iconNode2 = data.list[11].weather[0].icon;
                console.log("Icon: " + iconNode2)
                var temperatureNode2 = data.list[11].main.temp;
                console.log("Temp: " + temperatureNode2)
                var humidtyNode2 = data.list[11].main.humidity;
                console.log("Humidty: " + humidtyNode2)
                var windNode2 = data.list[11].wind.speed;
                console.log("Wind: " + windNode2)
                var dateNode2 = data.list[11].dt_txt;
                console.log(dateNode2);
        

                document.getElementById('day2-day').textContent = dayjs(dateNode2).format('dddd');
                document.getElementById('day2-date').textContent = dayjs(dateNode2).format('M/YYYY');
                document.getElementById('day2-icon').textContent = iconNode2;
                document.getElementById('day2-temp').textContent = "Temperature: " + temperatureNode2;
                document.getElementById('day2-humid').textContent = "Humidity: " + humidtyNode2
                document.getElementById('day2-wind').textContent = "Wind: " + windNode2;
            })
        }




//function will take city search into a variable
function takeFormInput(event){
    event.preventDefault()
    var cityInput = document.getElementById('city-input').value;
    lastSearchedCity = cityInput;
    var latForApi;
    var longForApi; 


//will handle calls to openweather geoAPI and get lat and long
function getCityGeo(){
    var geoApiCall = "http://api.openweathermap.org/geo/1.0/direct?q="+cityInput+"&limit=1&appid=" + weatherApiKey;
    fetch(geoApiCall)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){

        var cityName = data[0].name;
        console.log("searched city: " + cityName);
        var cityLong = data[0].lon;
        console.log(cityName + " Longitude: " + cityLong);
        var cityLat = data[0].lat;
        console.log(cityName + " Latitude : " + cityLat);
        getWeatherCall(cityLat, cityLong);
        getForecastCall(cityLat, cityLong);
    })
} 
    getCityGeo()
    saveSearchHistory() //function created a few lines below
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

//function will sort through local storage
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









