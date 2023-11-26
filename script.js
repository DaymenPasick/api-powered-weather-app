
//Household variables
var date = dayjs().format();
//today's....variables will be used in getWeatherCall()
var todaysTemp = document.getElementById('todays-temp');
var todaysWind = document.getElementById('todays-wind');
var todaysHumid = document.getElementById('todays-humid');
var todaysIcon = document.getElementById('todays-icon');
var todaysDay = document.getElementById('todays-day');
var todaysDate = document.getElementById('todays-date');



//reset button to generate latest search history
// var viewHistoryBtn = document.querySelector("#history-refresh");
// viewHistoryBtn.addEventListener('click', viewHistoryBtn); 

// function viewHistoryBtn(){
//     location.reload()
// }


// ===== API Key ======================================================
var weatherApiKey = "1dd8986d9e675512cead5440c0f34f1e";
// ===== API Key =========================================================


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
        // console.log("Icon: " + iconNode)

        var temperatureNode = data.main.temp;
        console.log("Temp: " + temperatureNode)

        var humidtyNode = data.main.humidity;
        console.log("Humidty: " + humidtyNode)

        var windNode = data.wind.speed;
        console.log("Wind: " + windNode)

        document.getElementById('todays-city').textContent = data.name;
        var todaysDayFormat = dayjs().format('dddd');
        var todaysDateFormat = dayjs().format('M/D/YYYY');
        todaysDay.textContent = todaysDayFormat;
        todaysDate.textContent = todaysDateFormat;
        todaysIcon.setAttribute('src', 'http://openweathermap.org/img/w/'+iconNode+'.png')
        todaysIcon.setAttribute('alt', 'icon displaying the current weather')
        todaysTemp.textContent = "Temperature: " + temperatureNode;
        todaysHumid.textContent = "Humidity: " + humidtyNode;
        todaysWind.textContent = "Wind: " + windNode + "mph";
    })
}

    //This section will handle printing content into 5-day forecast section 
    //when user searches for a city
function getForecastCall(lat, lon) {
        var forecastApiCall = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid=" + weatherApiKey;
        fetch(forecastApiCall)
            .then(function (response) {
                return response.json();
            })
            .then(function (data){
                
                console.log(data);

                //Day 2 forecast section start-----------------
                var cityNode = data.city.name;
                console.log(cityNode)
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
        
                document.getElementById('day2-city').textContent = cityNode;
                document.getElementById('day2-day').textContent = dayjs(dateNode2).format('dddd');
                document.getElementById('day2-date').textContent = dayjs(dateNode2).format('M/D/YYYY');
                document.getElementById('day2-icon').setAttribute('src', 'http://openweathermap.org/img/w/'+iconNode2+'.png')
                document.getElementById('day2-icon').setAttribute('alt', 'icon displaying the current weather')
                document.getElementById('day2-temp').textContent = "Temperature: " + temperatureNode2;
                document.getElementById('day2-humid').textContent = "Humidity: " + humidtyNode2;
                document.getElementById('day2-wind').textContent = "Wind: " + windNode2 + "mph";
                //Day 2 forecast section end-----------------




                //Day 3  forecast section start-----------------
                var weatherNode3 = data.list[19].weather;
                console.log(weatherNode3)
                var iconNode3 = data.list[19].weather[0].icon;
                console.log("Icon: " + iconNode3)
                var temperatureNode3 = data.list[19].main.temp;
                console.log("Temp: " + temperatureNode3)
                var humidtyNode3 = data.list[19].main.humidity;
                console.log("Humidty: " + humidtyNode3)
                var windNode3 = data.list[19].wind.speed;
                console.log("Wind: " + windNode3)
                var dateNode3 = data.list[19].dt_txt;
                console.log(dateNode3);
                
                document.getElementById('day3-city').textContent = cityNode;
                document.getElementById('day3-day').textContent = dayjs(dateNode3).format('dddd');
                document.getElementById('day3-date').textContent = dayjs(dateNode3).format('M/D/YYYY');
                document.getElementById('day3-icon').setAttribute('src', 'http://openweathermap.org/img/w/'+iconNode3+'.png')
                document.getElementById('day3-icon').setAttribute('alt', 'icon displaying the current weather')
                document.getElementById('day3-temp').textContent = "Temperature: " + temperatureNode3;
                document.getElementById('day3-humid').textContent = "Humidity: " + humidtyNode3;
                document.getElementById('day3-wind').textContent = "Wind: " + windNode3 + "mph";
                //Day 3 forecast section end-----------------




                //Day 4  forecast section start-----------------
                var weatherNode4 = data.list[27].weather;
                console.log(weatherNode4)
                var iconNode4 = data.list[27].weather[0].icon;
                console.log("Icon: " + iconNode4)
                var temperatureNode4 = data.list[27].main.temp;
                console.log("Temp: " + temperatureNode4)
                var humidtyNode4 = data.list[27].main.humidity;
                console.log("Humidty: " + humidtyNode4)
                var windNode4 = data.list[27].wind.speed;
                console.log("Wind: " + windNode4)
                var dateNode4 = data.list[27].dt_txt;
                console.log(dateNode4);
                
                document.getElementById('day4-city').textContent = cityNode;
                document.getElementById('day4-day').textContent = dayjs(dateNode4).format('dddd');
                document.getElementById('day4-date').textContent = dayjs(dateNode4).format('M/D/YYYY');
                document.getElementById('day4-icon').setAttribute('src', 'http://openweathermap.org/img/w/'+iconNode4+'.png')
                document.getElementById('day4-icon').setAttribute('alt', 'icon displaying the current weather')
                document.getElementById('day4-temp').textContent = "Temperature: " + temperatureNode4;
                document.getElementById('day4-humid').textContent = "Humidity: " + humidtyNode4;
                document.getElementById('day4-wind').textContent = "Wind: " + windNode4 + "mph";
                //Day 4 forecast section end-----------------




                //Day 5 forecast section start-----------------
                var weatherNode5= data.list[35].weather;
                console.log(weatherNode5)
                var iconNode5 = data.list[35].weather[0].icon;
                console.log("Icon: " + iconNode5)
                var temperatureNode5 = data.list[35].main.temp;
                console.log("Temp: " + temperatureNode5)
                var humidtyNode5 = data.list[35].main.humidity;
                console.log("Humidty: " + humidtyNode5)
                var windNode5 = data.list[35].wind.speed;
                console.log("Wind: " + windNode5)
                var dateNode5 = data.list[35].dt_txt;
                console.log(dateNode5);
        
                document.getElementById('day5-city').textContent = cityNode;
                document.getElementById('day5-day').textContent = dayjs(dateNode5).format('dddd');
                document.getElementById('day5-date').textContent = dayjs(dateNode5).format('M/D/YYYY');
                document.getElementById('day5-icon').setAttribute('src', 'http://openweathermap.org/img/w/'+iconNode5+'.png')
                document.getElementById('day5-icon').setAttribute('alt', 'icon displaying the current weather')
                document.getElementById('day5-temp').textContent = "Temperature: " + temperatureNode5;
                document.getElementById('day5-humid').textContent = "Humidity: " + humidtyNode5;
                document.getElementById('day5-wind').textContent = "Wind: " + windNode5 + "mph";
                //Day 5 forecast section end-----------------


                //Day 6 forecast section start-----------------
                var weatherNode6= data.list[39].weather;
                console.log(weatherNode6)
                var iconNode6 = data.list[39].weather[0].icon;
                console.log("Icon: " + iconNode6)
                var temperatureNode6 = data.list[39].main.temp;
                console.log("Temp: " + temperatureNode6)
                var humidtyNode6 = data.list[39].main.humidity;
                console.log("Humidty: " + humidtyNode6)
                var windNode6 = data.list[39].wind.speed;
                console.log("Wind: " + windNode6)
                var dateNode6 = data.list[39].dt_txt;
                console.log(dateNode6);
                
                // document.getElementById('search-city').textContent = forecastCity;
                
                document.getElementById('day6-city').textContent = cityNode;
                document.getElementById('day6-day').textContent = dayjs(dateNode6).format('dddd');
                document.getElementById('day6-date').textContent = dayjs(dateNode6).format('M/D/YYYY');
                document.getElementById('day6-icon').setAttribute('src', 'http://openweathermap.org/img/w/'+iconNode6+'.png')
                document.getElementById('day6-icon').setAttribute('alt', 'icon displaying the current weather')
                document.getElementById('day6-temp').textContent = "Temperature: " + temperatureNode6;
                document.getElementById('day6-humid').textContent = "Humidity: " + humidtyNode6;
                document.getElementById('day6-wind').textContent = "Wind: " + windNode6 + "mph";
                //Day 6 forecast section end-----------------

            })
        }




//function will take city search into a variable
var searchBtn = document.querySelector("#search-button");
searchBtn.addEventListener('click', takeFormInput); 
var forecastCity;

function takeFormInput(event){
    event.preventDefault()
    var cityInput = document.getElementById('city-input').value;
    lastSearchedCity = cityInput;
    forecastCity = cityInput


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




//===== Functional History Buttons Start ======================================================
//functionality that will add click events to each history button
var historyButtons= document.querySelectorAll('.history-button')
historyButtons.forEach(function(currentButton){
    currentButton.addEventListener('click', buttonHistorySearch)
})
//function will take in clicked history button info and manipulate it
function buttonHistorySearch() {
    var historyButtonCity;
    
    //sets history button's text content into a variable
    historyButtonCity = this.textContent
    console.log(historyButtonCity)

    var geoApiCall = "http://api.openweathermap.org/geo/1.0/direct?q="+historyButtonCity+"&limit=1&appid=" + weatherApiKey;
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
//===== Functional History Buttons End ======================================================







