const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/%7Bgen%7D/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bf819c497mshd24237e2102709cp11306fjsne28ef4f0886f',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

function getData() {
	const response = await fetch('https://moviesminidatabase.p.rapidapi.com/movie/byGen/%7Bgen%7D/');
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}