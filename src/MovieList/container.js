import { connect } from 'react-redux';
import movieList from './movieList';
import {
    fetchMovie,
    fetchMovieSuccess,
    fetchMovieError,
    searchMovie,
} from '../redux/actions'

const mapStateToProps = state => {
    const moviesData = state.movieList;
    return { moviesData };
}

const mapDispatchToProps = {
    fetchMovie,
    fetchMovieSuccess,
    fetchMovieError,
    searchMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(movieList);