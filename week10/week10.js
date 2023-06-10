let myContent = document.getElementById('content');


let movieTitle = document.createElement('form');
let titleLable = document.createElement('label');
let titleInput = document.createElement('input');

myContent.appendChild(movieTitle);
movieTitle.appendChild(titleLable);
movieTitle.appendChild(titleInput);

movieTitle.setAttribute('id', 'my-form');
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('id', 'title-input');
titleLable.setAttribute('for', 'title-input');
titleLable.className = 'fs-4';
titleLable.innerHTML = 'Title: ';

let movieYear = document.createElement('form');
let yearLabel = document.createElement('label');
let yearInput = document.createElement('input');

myContent.appendChild(movieYear);
movieYear.appendChild(yearLabel);
movieYear.appendChild(yearInput);

movieYear.setAttribute('id', 'movie-year');
yearInput.setAttribute('type', 'text');
yearInput.setAttribute('id', 'year-input');
yearLabel.setAttribute('for', 'year-input');
yearLabel.className = 'fs-4';
yearLabel.innerHTML = 'Year: ';

let movieGenre = document.createElement('form');
let genreLabel = document.createElement('label');
let genreInput = document.createElement('input');

myContent.appendChild(movieGenre);
movieGenre.appendChild(genreLabel);
movieGenre.appendChild(genreInput)

movieGenre.setAttribute('id', 'movie-genre');
genreInput.setAttribute('type', 'text');
genreInput.setAttribute('id', 'genre-input');
genreLabel.setAttribute('for', 'genre-input');
genreLabel.className = 'fs-4';
genreLabel.innerHTML = 'Genre: ';


let formBtn = document.createElement('button');
formBtn.setAttribute('id', 'form-button')
myContent.appendChild(formBtn);
formBtn.innerHTML = 'ADD MOVIE!!'
formBtn.className = 'btn btn-danger btn-lg'

let tBody = document.getElementById('table-body');
let tHead = document.getElementById('table-head')

let movieTitleInput = document.getElementById('title-input');
let movieYearInput = document.getElementById('year-input');
let movieGenreInput = document.getElementById('genre-input');


function createTableRow() {
    let tableRow = document.createElement('tr')
    tableRow.innerHTML = `<td>${movieTitleInput.value}</td>
                          <td>${movieYearInput.value}</td>
                          <td>${movieGenreInput.value}</td>`;
    tHead.append(tableRow)
    movieTitleInput.value = '';
    movieYearInput.value = '';
    movieGenreInput.value = '';
}

document.getElementById('form-button').addEventListener('click', createTableRow);

