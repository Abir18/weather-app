const form = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');  
const icon = document.querySelector('.icon img');
  

const getDetails = async (city) => {
    const citydata = await getCity(city);
    const weatherdata = await getWeather(citydata.Key);

    return { citydata, weatherdata };
};


form.addEventListener('submit', e => {
    e.preventDefault();

    const city = form.city.value.trim();

    getDetails(city)
        .then(data => {
            updateUI(data);
        })
        .catch(err => {
            console.log('Not Found', err);
        });

    // form.reset();
});


const updateUI = (data) => {

    const { citydata, weatherdata } = data;

    const html = `
        <h5 class="my-3">${citydata.EnglishName}</h5>
        <div class="my-3">${weatherdata.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherdata.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    details.innerHTML = html;

    // Update the Day & Night icon images
    let timesrc = weatherdata.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timesrc);

    // Update weather icons
    const iconSrc = `img/icons/${weatherdata.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // Remove the d-none class  if present
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};