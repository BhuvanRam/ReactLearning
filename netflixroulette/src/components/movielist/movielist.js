import React from 'react'
import Movie from '../movie/movie'
import moviesList from './movies.json'
let movies = moviesList.movies
const movieList = () => (
    <>
        {
            movies.map((movie) =>
                <Movie key={movie.MovieTitle}
                    MovieTitle={movie.MovieTitle}
                    MovieImage={movie.MovieImage}
                    ReleaseYear={movie.ReleaseYear}
                    Genre={movie.ReleaseYear}
                >
                </Movie>)
        }
    </>
)

export default movieList