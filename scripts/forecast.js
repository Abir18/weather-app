const apiKey = 'ngbLTHwKzfeA8WPpUlU2TbpePJ7ke6GJ';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getWeather = async (locationkey) => {

    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationkey}?apikey=${apiKey}`;

    // const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
    // const query = `${locationkey}?apikey=${apiKey}`;
    // const response = await fetch(base + query);

    const response = await fetch(url);
    const data = await response.json();

    return data[0];
};



// getCity('new york')
//     .then(data => {
//         console.log(data);
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Not Found', err);
//     });