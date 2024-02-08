const url = 'https://streaming-availability.p.rapidapi.com/countries';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3fb69c45d2mshccc6211e8dddbf0p189436jsnd85b245fdb34',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();