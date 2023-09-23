
document.addEventListener('DOMContentLoaded' , () =>{

   let apiKey = '4f4b140a'
    let searchInput = document.getElementById('searchInput');
    let searchButton = document.getElementById('searchButton');
    let movieData = document.getElementById('movieData')

    searchButton.addEventListener('click' , () => {

        let searchTerm = searchInput.value;
        if(searchTerm){
            movieData.innerHTML = '';

            fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
            .then(response => response.json() )
            .then(data =>{
                if(data.Response === 'True'){

                    let movieTitle = document.createElement('h2');
                    movieTitle.textContent = data.Title

                    let moviePoster = document.createElement('img');
                    moviePoster.src = data.Poster

                    let movieDetails = document.createElement('p');
                    movieDetails.textContent = `Year : ${data.Year}, Rated : ${data.Rated}, Genre : ${data.Genre}`

                    movieData.appendChild(movieTitle)
                    movieData.appendChild(moviePoster)
                    movieData.appendChild(movieDetails)
                }else{
                    movieData.textContent = 'Movie not Found!';
                }
            })
            .catch(error => {
                console.log("Error :" , error)
                movieData.textContent = 'An error occurred while fetching data.';
            })
        }

    })
})

