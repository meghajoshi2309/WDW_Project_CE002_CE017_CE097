const key = 'cac47dee31d532833b1d6f919f2576d2';

// const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Junagadh&appid=cac47dee31d532833b1d6f919f2576d2';

// fetch(baseURL)
//     .then((data) => {console.log('responce', data.json())})
//     .catch((error) =>{
//         console.log(error);
//     })

const requestCity = async (city) =>{
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    // const query = '?q='+city+'&appid='+key;  //both are same
    const query = `?q=${city}&appid=${key}`;

    // Make fetch call (promise call)
    const response = await fetch(baseURL+query);

    // Promise Data
    const data = await response.json();
    console.log(data);

    return data;
}

// requestCity('Rajkot');