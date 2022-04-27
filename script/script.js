'use strict';


// function start () {
// 	let numberOfFilms;
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {      
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов', '').trim(),
                grade = +prompt('Какую оценку поставите?', '');
            if (film != '' && grade != '' && film != null && grade != null && film.length < 50) {
                personalMovieDB.movies[film] = grade;
                console.log('Done!');
            } else {
                console.log('Error');
                i--;
            }			
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        !personalMovieDB.privat ? personalMovieDB.privat = true : personalMovieDB.privat = false;
    },
    writeYourGenres: function () {
        for(let i = 1; i <= 3; i++) {		
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();              
            if (genre == null || genre === '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {          
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    
};


// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const film = prompt('Один из последних просмотренных фильмов', '').trim(),
// 			grade = +prompt('Какую оценку поставите?', '');
// 		if (film != '' && grade != '' && film != null && grade != null && film.length < 50) {
// 			personalMovieDB.movies[film] = grade;
// 			console.log('Done!');
// 		} else {
// 			console.log('Error');
// 			i--;
// 		}			
// 	}
// }

// rememberMyFilms();

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 		alert('Просмотрено довольно мало фильмов');
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		alert('Вы классический зритель');
// 	} else if (personalMovieDB.count >= 30) {
// 		alert('Вы киноман');
// 	} else {
// 		alert('Произошла ошибка');
// 	}
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
// 	for(let i = 1; i <= 3; i++) {		
// 		const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
// 		if (favoriteGenres == typeof 'string')	{
// 			personalMovieDB.genres[i - 1] = favoriteGenres;
// 		}	else {
// 			console.log('Genres error');
// 			i--;
// 		}
// 	}
// }

// writeYourGenres();

// console.log(personalMovieDB);
