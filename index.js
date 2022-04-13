'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const filmOne = prompt('Один из последних просмотренных фильмов', ''),
      gradeOne = +prompt('Какую оценку поставите?', ''),

      filmTwo = prompt('Один из последних просмотренных фильмов', ''),
      gradeTwo = +prompt('Какую оценку поставите?', '');

personalMovieDB.movies[filmOne] = gradeOne;
personalMovieDB.movies[filmTwo] = gradeTwo;
