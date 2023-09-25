const ApiKey = "6e5a8c866b2dabc4a47fb3bac44c1000";
const Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const temp = document.querySelector(".temp h1");
const cityName = document.getElementsByTagName("input")[0]; 
const cityhead= document.querySelector(".temp h2")
const search = document.querySelector("#btn");
const windSpeed = document.querySelector("#windspeed");
const humidity = document.querySelector("#humiperc");
const weatherIcon=document.querySelector(".sun")

const generateTemp = (city) => {
  fetch(Url + city + `&appid=${ApiKey}`)
    .then((response) => response.json())
    .then((data) => {
      temp.innerHTML = data.main.temp + "°C";
       // Update the city name
      cityhead.innerHTML= data.name;
      windSpeed.innerHTML = data.wind.speed + "km/h";
      humidity.innerHTML = data.main.humidity + "%";
if(data.weather[0].main=='clouds'){

    weatherIcon.src="/clouds.png"
}
else if(data.weather[0].main=='Clear'){
    weatherIcon.src="/clear.png";
}

else if(data.weather[0].main=='Rain'){
    weatherIcon.src="/rain.png";
}

else if(data.weather[0].main=='Drzzle'){

    weatherIcon.src="/drizzle.png";
}

else if(data.weather[0].main=='snow'){

    weatherIcon.src="/snow.png";
}

    })

  
};

search.addEventListener('click', function() {
  generateTemp(cityName.value); // Pass the input value to generateTemp
});

// You can also call generateTemp with a default city name if needed
// generateTemp("Bangalore");
