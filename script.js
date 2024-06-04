const apiKey = "e10db9a915516c207955d9a80b6b3ea5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".weatherIcon")

async function checkWeather(city){
	const Url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
	const response = await fetch(Url);

	if(response.status == 404){
		document.querySelector(".error").style.display = "block"
		document.querySelector(".weather").style.display = "none"
	}else{

		var data = await response.json();

	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

	if(data.weather[0].main == "Clouds"){
		icon.src = "clouds.png";
	}else if(data.weather[0].main == "Haze"){
		icon.src = "drizzle.png";
	}else if(data.weather[0].main == "Mist"){
		icon.src = "mist.png";
	}else if(data.weather[0].main == "Rain"){
		icon.src = "rain.png";
	}else if(data.weather[0].main == "Snow"){
		icon.src = "snow.png";
	}else if(data.weather[0].main == "Clear"){
		icon.src = "clear.png";
	}

	document.querySelector(".weather").style.display = "block";

	document.querySelector(".error").style.display = "none"

	}
	
}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value)
})

