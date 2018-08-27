let inputSearch = document.getElementById('inputSearch').value;
const buttonSearch = document.getElementById('buttonSearch');
const movieCard = document.getElementById('movieCard');
const apiKey = '4e0f0e85';
const apiLink = `http://www.omdbapi.com/?apikey=${apiKey}&s=${inputSearch}`;
let apiSearchWars = 'star+wars'; 
let apiSearchHarry = 'harry+potter';
let apiSearchTrek = 'star+trek';
const apiLinkWars = `http://www.omdbapi.com/?apikey=${apiKey}&s=${apiSearchWars}`;
const apiLinkHarry = `http://www.omdbapi.com/?apikey=${apiKey}&s=${apiSearchHarry}`;
const apiLinkTrek = `http://www.omdbapi.com/?apikey=${apiKey}&s=${apiSearchTrek}`;

let buttonWars = document.getElementById('wars');
let buttonHarry = document.getElementById('harry');
let buttonTrek = document.getElementById('trek');

buttonWars.addEventListener('click', event => {
  fetch(apiLinkWars)
    .then((response)=>{
      return response.json();
    }).then((movies) => {
      printMoviesofWars(movies);
    }).catch(error => {
      console.log('Reporta error');
      return; 
    });
  const printMoviesofWars = (movies) => {
    let print = '';
    for ( i = 0; i < movies.Search.length; i++) {
      let movie = movies.Search[i];
      print += `
      <div class="card fondo" width="500px">
      <img class="card-img-top" src="${movie.Poster}" alt="Card image">
      <div class="elementos">
        <p class="card-title titulo-pelicula">Título: ${movie.Title}</p>
        <p class="card-text titulo-pelicula">Type: ${movie.Type}</p>
        <a href="#" class="btn btn-primary boton-modal" data-toggle="modal" data-target="#${movie.imdbID}">+Info</a>
      </div>
    </div> 
    <!-- Modal -->
        <div class="modal fade" id="${movie.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
              <img class="card-img-top" src="${movie.Poster}" width="50%" alt="Card image">
                <h6 class="modal-title" id="exampleModalCenterTitle">${movie.Title}</h6> <br>                
              </div>
              <p class="card-text titulo-pelicula-modal">Type: ${movie.Type}</p> <br>
                <p class="card-text titulo-pelicula-modal">Year: ${movie.Year}</p> <br>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">X</button>
              <div class="modal-body innerModal">
              </div>
            </div>
          </div>
        </div>
      `;
    }
    movieCard.innerHTML = print;
  };
});

buttonHarry.addEventListener('click', event => {
  fetch(apiLinkHarry)
    .then((response)=>{
      return response.json();
    }).then((movies) => {
      printMoviesofHarry(movies);
    }).catch(error => {
      console.log('Reporta error');
      return; 
    });
  const printMoviesofHarry = (movies) => {
    let print = '';
    for ( i = 0; i < movies.Search.length; i++) {
      let movie = movies.Search[i];
      print += `<div class="card fondo" width="500px">
      <img class="card-img-top" src="${movie.Poster}" alt="Card image">
      <div class="elementos">
        <p class="card-title titulo-pelicula">Título: ${movie.Title}</p>
        <p class="card-text titulo-pelicula">Type: ${movie.Type}</p>
        <a href="#" class="btn btn-primary boton-modal" data-toggle="modal" data-target="#${movie.imdbID}">+Info</a>
      </div>
    </div> 
    <!-- Modal -->
        <div class="modal fade" id="${movie.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
              <img class="card-img-top" src="${movie.Poster}" width="50%" alt="Card image">
                <h6 class="modal-title" id="exampleModalCenterTitle">${movie.Title}</h6> <br>                
              </div>
              <p class="card-text titulo-pelicula-modal">Type: ${movie.Type}</p> <br>
                <p class="card-text titulo-pelicula-modal">Year: ${movie.Year}</p> <br>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">X</button>
              <div class="modal-body innerModal">
              </div>
            </div>
          </div>
        </div>
      `;
    }
    movieCard.innerHTML = print;
  };
});

buttonTrek.addEventListener('click', event => {
  fetch(apiLinkTrek)
    .then((response)=>{
      return response.json();
    }).then((movies) => {
      printMoviesofTrek(movies);
    }).catch(error => {
      console.log('Reporta error');
      return; 
    });
  const printMoviesofTrek = (movies) => {
    let print = '';
    for ( i = 0; i < movies.Search.length; i++) {
      let movie = movies.Search[i];
      console.log(movie);
      print += `
      <div class="card fondo" width="500px">
      <img class="card-img-top" src="${movie.Poster}" alt="Card image">
      <div class="elementos">
        <p class="card-title titulo-pelicula">Título: ${movie.Title}</p>
        <p class="card-text titulo-pelicula">Type: ${movie.Type}</p>
        <a href="#" class="btn btn-primary boton-modal" data-toggle="modal" data-target="#${movie.imdbID}">+Info</a>
      </div>
    </div> 
    <!-- Modal -->
        <div class="modal fade" id="${movie.imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
              <img class="card-img-top" src="${movie.Poster}" width="50%" alt="Card image">
                <h6 class="modal-title" id="exampleModalCenterTitle">${movie.Title}</h6> <br>                
              </div>
              <p class="card-text titulo-pelicula-modal">Type: ${movie.Type}</p> <br>
                <p class="card-text titulo-pelicula-modal">Year: ${movie.Year}</p> <br>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">X</button>
              <div class="modal-body innerModal">
              </div>
            </div>
          </div>
        </div>
      `;
    }
    movieCard.innerHTML = print;
  };
});

const getMovies = (apiKey, inputSearch) => {
  fetch(apiLink)
    .then(response => response.json())
    .then(res => { 
      let data = res;
      console.log(data);
      // printAllMovies(data);         
    });
};
getMovies(apiKey, inputSearch);

document.getElementById('clearPage').addEventListener('click', event => {
  location.href = './index.html'
})

/* const printAllMovies = (data) => {
  let print = '';
  for ( item in data.Search) {
    let movie = data.Search[item];
    // console.log(movie);
    print +=
      `<div class="card fondo" width="500px">
      <img class="card-img-top" src="${movie.Poster}" alt="Card image">
      <div class="elementos">
        <p class="card-title titulo-pelicula">Título: ${movie.Title}</p>
        <p class="card-text titulo-pelicula">Type: ${movie.Type}</p>
        <a href="#" class="btn btn-primary boton-modal">+Info</a>
      </div>
    </div>
      `;
  }
  movieCard.innerHTML = print;
};

buttonSearch.addEventListener('click', event => {
  getMovies(apiKey, inputSearch);
}); */
