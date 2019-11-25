import React, { Component } from 'react';
import './movieList.css';
import MovieCard from '../MovieCard/MovieCard';
import { Link, BrowserRouter as Router, } from 'react-router-dom';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
        this.changeSearchValue = this.changeSearchValue.bind(this);
        this.onSearchMovie = this.onSearchMovie.bind(this);
        this.navigateToDetail = this.navigateToDetail.bind(this);
    }

    changeSearchValue(searchValue) {
        this.setState({searchValue: searchValue.target.value});
    }

    onSearchMovie() {
        if (this.state.searchValue)
            this.props.searchMovie(this.state.searchValue);
    }

    navigateToDetail(imdbId) {
        console.log(imdbId);
    }

    componentDidMount() {
        this.props.searchMovie('test');
    }

    render() {
        const { moviesData } = this.props;
        const isListNotEmpty = moviesData.allMovies && moviesData.allMovies.length;
    return (
        <div className="header">
            <div className="searchBox">
                <input placeholder="Enter Movie Name" onChange={this.changeSearchValue} className="inputBox" />
                <button onClick={this.onSearchMovie} disabled={!this.state.searchValue} className="searchButton">Search</button>
                { moviesData.loading && !moviesData.error ?
                    <div>loading</div> : null
                }
            </div>
            <Router>
                <Link to="/movie-detail/abc">navigate</Link>
            </Router>
            {isListNotEmpty ?
                    <div className="listContainer">
                        <Router>
                            {moviesData.allMovies.map(movie => (
                                <Link to={`/movie-detail/${movie.imdbID}`} key={movie.imdbID}>
                                    <MovieCard movie={movie} />
                                </Link>
                            ))}
                        </Router>
            </div> : null}
        </div>
    );
    }
}
