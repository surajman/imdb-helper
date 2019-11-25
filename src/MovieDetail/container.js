import { connect } from 'react-redux';
import movieDetail from './MovieDetail';
import {
    fetchMovieDetail,
    fetchMovieDetailSuccess,
    fetchMovieDetailError,
} from '../redux/actions'

const mapStateToProps = state => {
    const selectedMovie = state.movieList.selectedMovie;
    return { selectedMovie };
}

const mapDispatchToProps = {
    fetchMovieDetail,
    fetchMovieDetailSuccess,
    fetchMovieDetailError,
};

export default connect(mapStateToProps, mapDispatchToProps)(movieDetail);