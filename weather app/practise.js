const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]');
const userContainer = document.querySelector('.weather-container');

const grantAccessContainer = document.querySelector('.grant-location-container');
const searchForm = document.querySelector('[data-searchForm]');
const loadingScreen = document.querySelector('.loading-container');
const userInfoContainer = document.querySelector('.user-Info-container');

const grantAccessBtn = document.querySelector('[grant-access-btn]');

let currentTab = userTab;
currentTab.classList.add("current-tab");
API_KEY =  b1ae39e1e45154591958905162423044;


function takeLatLon(){
	const successCallback = (position) => {
		const userCoordinates = {
			lat : position.coords.latitude,
			lon : position.coords.longitude,
		}
	  };
	  
	  const errorCallback = (error) => {
		console.log(error);
	  };
	  
	  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

	  sessionStorage.setItem("userCoordinates",JSON.stringify(userCoordinates));

	  console.log(sessionStorage);
	  fetchWeather(usercoordinates);
}

async function fetchWeather(data){
	const latitude = data.lat;
	const longitude = data.lon;

	grantAccessContainer.classList.remove("active");

	loadingScreen.classList.add("active");

	//api call
	const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`);
       const responseData = await response.json();

	   


}

if ( currentTab == userTab){
  
	grantAccessContainer.classList.add("active");
	searchForm.classList.remove("active");
	loadingScreen.classList.remove("active");
	userInfoContainer.classList.remove("active");

	grantAccessBtn.addEventListener('click',takeLatLon);





}
 
