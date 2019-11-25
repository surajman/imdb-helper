import { put, takeEvery, all } from 'redux-saga/effects';
import { fetchMovieSuccess, searchMoviesSuccess, fetchMovieDetailSuccess } from '../actions';
import {
    FETCH_MOVIES_REQUEST,
    SEARCH_MOVIES_REQUEST,
    FETCH_MOVIES_DETAIL_REQUEST,
} from '../actionTypes';
import { fetchMovies, searchMovies, fetchSelectedMovieApi } from '../api/movie';

export function* fetchMovieList() {
    const res = yield fetchMovies();
    yield put(fetchMovieSuccess(res.Title));
}

export function* fetchSelectedMovie(action) {
    const res = yield fetchSelectedMovieApi(action.payload);
    yield put(fetchMovieDetailSuccess(res));
}

export function* searchMovie(action) {
    const res = yield searchMovies(action.payload);
    yield put(searchMoviesSuccess(res));
}

export function* watchfetchMovieList() {
    yield takeEvery(FETCH_MOVIES_REQUEST, fetchMovieList);
}

export function* watchSearchMovieList() {
    yield takeEvery(SEARCH_MOVIES_REQUEST, searchMovie);
}

export function* watchFetchSelectedMovie() {
    yield takeEvery(FETCH_MOVIES_DETAIL_REQUEST, fetchSelectedMovie);
}

export default function* rootSaga() {
    yield all([
        watchfetchMovieList(),
        watchSearchMovieList(),
        watchFetchSelectedMovie(),
    ])
}