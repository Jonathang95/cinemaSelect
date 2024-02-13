const url2 = 'https://streaming-availability.p.rapidapi.com/countries';
const option = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'e0d50732d8msh7419f36b1d58555p109063jsn80207a7023fd',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

async function fetchData() {
    try {
        const response = await fetch(url2, option);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();

