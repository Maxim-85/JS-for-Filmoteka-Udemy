'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false,
};


for (let i = 0; i < 2; i++) {
	const film = prompt('Один из последних просмотренных фильмов', ''),
				grade = +prompt('Какую оценку поставите?', '');
	if (film != '' && grade != '' && film != null && grade != null && film.length < 50) {
		personalMovieDB.movies[film] = grade;
		console.log('Done!');
	} else {
		console.log('Error');
		i--;
	}			
	// (film != '' && grade != '' && film != null && grade != null && film.length < 50) ? personalMovieDB.movies[film] = grade : i--, console.log('Error');
}

if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
	alert('Вы киноман');
} else {
	alert('Произошла ошибка');
}

console.log(personalMovieDB);
