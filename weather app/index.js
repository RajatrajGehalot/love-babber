const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]');
const userContainer = document.querySelector('.weather-container');

const grantAccessContainer = document.querySelector('.grant-location-container');
const searchForm = document.querySelector('[data-searchForm]');
const loadingScreen = document.querySelector('.loading-container');
const userInfoContainer = document.querySelector('.user-Info-container');

//initially variables needed

let currentTab = userTab;
const API_KEY = "b1ae39e1e45154591958905162423044"; 
currentTab.classList.add("current-tab");

getfromSessionStorage();

function switchTab(clickedTab){
    if(clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

             if(!searchForm.classList.contains("active")){
                //kya search form wala container is visible if yes then make it visible
                userInfoContainer.classList.remove("active");
                grantAccessContainer.classList.remove("active");
                searchForm.classList.add("active");
             }
             else{
                //main  pehle seearch  vale tab pr tha,ab your weather tab visible karna h
                searchForm.classList.remove("active");
                userInfoContainer.classList.remove("active");
               //ab me your weather tab me aa gya hu , toh weather bhi display karna padega, so lets check local storage first 
               //for coordinates if we have saved them  there .
               getfromSessionStorage();
             }
    }
}

userTab.addEventListener("click",() => {
    //pass clicked tab as input parameter
    switchTab(userTab);
})

searchTab.addEventListener('click',() => {
     //pass clicked tab as input parameter
     switchTab(searchTab);
});

function getfromSessionStorage() {
    const localCoordinates = window.sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        //agr local coordinates nhi pade he to
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}


async function fetchUserWeatherInfo(coordinates) {
    const {lat,lon} = coordinates;
    //make grantcontainer invisible
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try{
       const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`);
       const data = await response.json();
       
       //remove loader
       loadingScreen.classList.remove("active");
       userInfoContainer.classList.add("active");
       renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
        //hw
    }
}

function renderWeatherInfo(weatherInfo) {
    //firstly we have to fetch  the element 
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    //fetch value from weatherInfo object and put in ui elements 
    cityName  = weatherInfo?.location?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.location?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.current?.condition?.text;
    weatherIcon.src = weatherInfo?.current?.condition?.icon;
    temp = weatherInfo?.current?.temp_c;
    windspeed = weatherInfo?.current?.wind_mph;
    humidity =  weatherInfo?.current?.humidity;
    cloudiness = weatherInfo?.current?.cloud;
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click",getLocation);

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        //hw - show an alert
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat : position.coords.latitude,
        lon : position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);

}

const searchInput = document.querySelector("data-searchForm");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === ""){
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
} )

async function fetchSearchWeatherInfo(city) {
     loadingScreen.classList.add("active");
     userInfoContainer.classList.remove("active");
     grantAccessContainer.classList.remove("active");

     try{
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
     }
     catch(err) {
        //hw
     }
}