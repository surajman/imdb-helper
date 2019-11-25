import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_LOADING,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILED,
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    FETCH_MOVIES_DETAIL_REQUEST,
    FETCH_MOVIES_DETAIL_SUCCESS,
    FETCH_MOVIES_DETAIL_FAILED,
} from "./actionTypes";


export const fetchMovie = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMovieLoading = () => ({
  type: FETCH_MOVIES_LOADING,
});

export const fetchMovieSuccess = (data) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: data,
});

export const fetchMovieError = (error) => ({
    type: FETCH_MOVIES_FAILED,
    payload: error,
});

export const searchMovie = (searchValue) => ({
    type: SEARCH_MOVIES_REQUEST,
    payload: searchValue,
});

export const searchMoviesSuccess = (data) => ({
    type: SEARCH_MOVIES_SUCCESS,
    payload: data,
});

export const fetchMovieDetail = (id) => ({
    type: FETCH_MOVIES_DETAIL_REQUEST,
    payload: id,
});

export const fetchMovieDetailSuccess = (data) => ({
    type: FETCH_MOVIES_DETAIL_SUCCESS,
    payload: data,
});

export const fetchMovieDetailError = (error) => ({
    type: FETCH_MOVIES_DETAIL_FAILED,
    payload: error,
});
