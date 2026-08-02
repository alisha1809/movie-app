// ===============================
// CINEFLIX
// script.js
// ===============================

const profileScreen = document.getElementById("profiles");
const homeScreen = document.getElementById("home");

const trending = document.getElementById("trending");
const topRated = document.getElementById("topRated");
const action = document.getElementById("action");
const comedy = document.getElementById("comedy");

const search = document.getElementById("searchMovie");

// Profile Selection

document.querySelectorAll(".profile").forEach(profile=>{

profile.addEventListener("click",()=>{

profileScreen.style.display="none";

homeScreen.style.display="block";

window.scrollTo(0,0);

});

});
function createMovieCard(movie){

return `

<div class="movie">

<img src="${movie.poster}" alt="${movie.title}">

<div class="movie-info">

<h3>${movie.title}</h3>

<p>${movie.genre}</p>

<p>⭐ ${movie.rating}</p>

</div>

</div>

`;

}

function renderMovies(){

trending.innerHTML="";

topRated.innerHTML="";

action.innerHTML="";

comedy.innerHTML="";

movies.forEach(movie=>{

if(movie.category==="Trending"){

trending.innerHTML+=createMovieCard(movie);

}

if(movie.category==="Top"){

topRated.innerHTML+=createMovieCard(movie);

}

if(movie.category==="Action"){

action.innerHTML+=createMovieCard(movie);

}

if(movie.category==="Comedy"){

comedy.innerHTML+=createMovieCard(movie);

}

});

}

renderMovies();
search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".movie").forEach(movie=>{

const title=movie.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

movie.style.display="block";

}

else{

movie.style.display="none";

}

});

});
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.background="#111";

}

else{

header.style.background="linear-gradient(to bottom,#000,transparent)";

}

});