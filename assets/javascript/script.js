var submitButton = document.querySelector("#searchButton")
var resultsEL = document.querySelector("#TitleResults")

async function fetchData() {
    var availabilityEL = document.querySelector("#searchInput")
    var availability = availabilityEL.value
    const url2 = `https://streaming-availability.p.rapidapi.com/countries?services=` + availability;
    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3fb69c45d2mshccc6211e8dddbf0p189436jsnd85b245fdb34',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url2, option);
        const data = await response.json();
        var newDiv = document.createElement("div");
        newDiv.setAttribute('id' , 'logoWrapper');
        newDiv.innerHTML = "";
        for (key in data.result.us.services) {
            var newImg = document.createElement("img");
            newImg.setAttribute("src" , data.result.us.services[key].images.darkThemeImage);
            newDiv.appendChild(newImg);
            var platform = key;
            console.log(platform)
        }
        resultsEL.appendChild(newDiv);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

submitButton.addEventListener("click", fetchData)
