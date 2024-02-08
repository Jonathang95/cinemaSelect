const url = 'https://moviesminidatabase.p.rapidapi.com/movie/byGen/%7Bgen%7D/';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8bf819c497mshd24237e2102709cp11306fjsne28ef4f0886f',
    'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
  }
};

async function getData() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json(); /*change response.text to response.json*/
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getData();

document.addEventListener("DOMContentLoaded", function() {
  const genreLinks = document.querySelectorAll('.dropdown-content a');
  const recommendedSection = document.querySelector('.box:nth-of-type(1)');

  // Add click event listeners to genre links
  genreLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const genre = this.textContent.trim(); // Get the genre text
      getRecommendedMovie(genre);
    });
  });

  // Function to fetch recommended movie based on genre
  function getRecommendedMovie(genre) {
    // Here you should replace this placeholder with your API call to fetch recommended movie based on the selected genre
    // For example:
    fetch(`https://api.example.com/movies?genre=${genre}`)
      .then(response => response.json())
      .then(movie => {
        const movieInfo = `
          <h2>${genre} Movie Recommendation</h2>
          <h3>${movie.title}</h3>
          <p>${movie.description}</p>
          <img src="${movie.poster}" alt="${movie.title}">
        `;
        recommendedSection.innerHTML = movieInfo;
      })
      .catch(error => console.error('Error fetching recommended movie:', error));
  }
});
