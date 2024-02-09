var submitButton = document.querySelector("#searchButton")

async function fetchData() {
var movienameEL = document.querySelector("#searchInput")
var moviename = movienameEL.value
const url = `https://imdb_api4.p.rapidapi.com/get_movies_by_name?Movie_name=${moviename}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8bf819c497mshd24237e2102709cp11306fjsne28ef4f0886f',
		'X-RapidAPI-Host': 'imdb_api4.p.rapidapi.com'
	}
};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		resultsEL.innerHTML = `<h1>${result[0].title}</h1>`
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

submitButton.addEventListener("click", fetchData)


var resultsEL = document.querySelector("#TitleResults")