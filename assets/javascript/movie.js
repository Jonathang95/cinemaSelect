const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/%7Bgen%7D/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bf819c497mshd24237e2102709cp11306fjsne28ef4f0886f',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
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

fetchData()