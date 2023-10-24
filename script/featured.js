const container = document.getElementById('home_content');
const baseUrl = 'https://image.tmdb.org/t/p/w185/';

function getMovie() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTA5N2IxMzdlNWU5YmFjZDZlZmI4NTExMTA3MTI4NCIsInN1YiI6IjY0OWRiMjc5YzlkYmY5MDE0OGNlOWEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OMrSVb7yTmFJTVyFiLDodnLvc2g91bLOLKpzRoWvWy0",
      },
    };
  
    const apiKey = '18e37030bfc2aa7b42911ad5fad06395';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=vote_count.desc`;

    fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
        console.log(response);
        for (let i = 0; i < response.results.length; i++) {
            let title = response.results[i].title;
            let release_date = response.results[i].release_date;
            let poster_pat = response.results[i].poster_path;
            let overveiw = response.results[i].overview;

        //   call the method to render dom
        populate(title, release_date, poster_pat, overveiw);
        }
        })
        .catch((err) => console.error(err));
}

function populate(title, release_date, poster_pat, overveiw){

    // start of component creation //append in home_content
    const movie_component = document.createElement('div');
    movie_component.classList.add('movie_component');

    // append in movie_component
    const thubbnail = document.createElement('div');
    thubbnail.classList.add('thubbnail');
    thubbnail.setAttribute("style", "background-image: url("+baseUrl+poster_pat+")")

    const decription = document.createElement('div');
    decription.classList.add('decription');

    // append in description
    const movie_title = document.createElement('h4');
    movie_title.classList.add('title');
    movie_title.innerText = title;

    const txt = document.createElement('text');
    txt.classList.add('text');
    txt.innerText = overveiw;

    const time_of_upload = document.createElement('section');
    time_of_upload.classList.add('time_of_upload');

    // append in section
    const clock_icon = document.createElement('div');
    clock_icon.classList.add('clock_icon');

    const hr = document.createElement('hr');

    const time = document.createElement('p');
    time.classList.add('time');
    time.innerText = release_date;

    //appending items
    time_of_upload.append(clock_icon, hr, time);
    decription.append(movie_title, txt, time_of_upload);
    movie_component.append(thubbnail, decription);
    container.append(movie_component);
}

// function call
getMovie();
