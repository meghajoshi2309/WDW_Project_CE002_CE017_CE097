const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const cardInfo = document.querySelector('.back-card');

const Celcius = (kelvin) => {
  celc = Math.round(kelvin - 273.15);
  return celc;
}

const isDay = (icon) =>{
  if (icon.includes('d')) {
    return true;
  } else {
    return false;
  }
}

updateWeatherApp = (city) => {
  // console.log(city);
  // console.log(city.name);
  const imageName = city.weather[0].icon;
  const iconSrc = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
  cityName.textContent = city.name;
  cardBody.innerHTML =`
  <div class="card-mid row">
    <div class="col-8 text-center temp">
      <span>${Celcius(city.main.temp)}&deg;C</span>
    </div>
  <div class="col-4 condition-temp">
      <p class="condition">${city.weather[0].description}</p>
      <p class="high">${Celcius(city.main.temp_max)}&deg;C</p>
      <p class="low">${Celcius(city.main.temp_min)}&deg;C</p>
  </div>
  </div>
  <div class="icon-container card shadow mx-auto">
    <img src="${iconSrc}"  alt="">
  </div>
  <div class="card-bottom px-5 py-4 row">
    <div class="col text-center">
      <p>${Celcius(city.main.feels_like)}&deg;C</p>
      <span>Feels Like</span>
    </div>
    <div class="col text-center">
      <p>${city.main.humidity}%</p>
      <span>Humidity</span>
    </div>
  </div>`

  if (isDay(imageName)) {
    console.log('Day');
    timeImage.setAttribute('src', 'img/day_img.jpg');
    if (cityName.classList.contains('text-white')) {
      cityName.classList.remove('text-white');
    } else {
      cityName.classList.add('text-black');
    }
  } else {
    console.log('Night');
    timeImage.setAttribute('src', 'img/night_img.jpg');
    if (cityName.classList.contains('text-black')) {
      cityName.classList.remove('text-black');
    } else {
      cityName.classList.add('text-white');
    }
  }

  cardInfo.classList.remove('d-none');
}

// Add an Event Listner to the Form
searchForm.addEventListener('submit', (event) =>{
  event.preventDefault();
  const citySearched = cityValue.value.trim();
  console.log(citySearched);
  searchForm.reset();

  // Make a Request
  requestCity(citySearched)
    .then((data) => {
      updateWeatherApp(data);
    })
    .catch((error) => {console.log(error)})
})