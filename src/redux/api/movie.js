import axios from 'axios';

export function* fetchMovies() {
    return yield axios.get('http://www.omdbapi.com/?t=galaxy&apikey=9075f344')
        .then(data =>{
            return data.data;
        })
        .catch(err => err);
}

export function* searchMovies(searchText) {
    return yield axios.get(`http://www.omdbapi.com/?apikey=9075f344&s=${searchText}`)
        .then(data =>{
            return data.data;
        })
        .catch(err => err);
}

export function* fetchSelectedMovieApi(id) {
    return yield axios.get(`http://www.omdbapi.com/?apikey=9075f344&i=${id}`)
        .then(data =>{
            return data.data;
        })
        .catch(err => err);
}
