import React, { Component } from 'react';

export default class MovieDetail extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.fetchMovieDetail(`${params.id}`);
    }
    render() {
        const { selectedMovie } = this.props;
        return (
            <div>
                {selectedMovie && selectedMovie.data ? 
                    <div>
                        <img src={selectedMovie.data.Poster} alt={selectedMovie.data.Title} />
                        <div>{selectedMovie.data.Title}</div>
                        <div>Year: {selectedMovie.data.Year}</div>
                        <div>Rated: {selectedMovie.data.Rated}</div>
                        <div>Released: {selectedMovie.data.Released}</div>
                        <div>Runtime: {selectedMovie.data.Runtime}</div>
                        <div>Genre: {selectedMovie.data.Genre}</div>
                        <div>Director: {selectedMovie.data.Director}</div>
                        <div>Writer: {selectedMovie.data.Writer}</div>
                        <div>Actors: {selectedMovie.data.Actors}</div>
                        <div>Plot: {selectedMovie.data.Plot}</div>
                        <div>Language: {selectedMovie.data.Language}</div>
                        <div>Country: {selectedMovie.data.Country}</div>
                        <ul>Ratings: {selectedMovie.data.Ratings && selectedMovie.data.Ratings.map(data => {
                            return (
                                <li key={data.Source}>
                                    {data.Source} : {data.Value}
                                </li>
                                );
                            })}
                        </ul>
                        <div>Metascore: {selectedMovie.data.Metascore}</div>
                        <div>imdbRating: {selectedMovie.data.imdbRating}</div>
                        <div>imdbVotes: {selectedMovie.data.imdbVotes}</div>
                        <div>imdbID: {selectedMovie.data.imdbID}</div>
                        <div>Type: {selectedMovie.data.Type}</div>
                        <div>DVD: {selectedMovie.data.DVD}</div>
                        <div>BoxOffice: {selectedMovie.data.BoxOffice}</div>
                        <div>Production: {selectedMovie.data.Production}</div>
                        <div>Website: {selectedMovie.data.Website}</div>
                        <div>Response: {selectedMovie.data.Response}</div>
                    </div>
                    :
                    null
                }
                {selectedMovie.error ? <div>Something Went Wrong</div> : null}
                {selectedMovie.loading ? <div>Loading</div> : null}
            </div>
        )
    }
}