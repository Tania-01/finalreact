import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelectore } from '../../../hooks/reduxHooks';
import { MovieAction } from '../../../redux/slices/MovieSlices';
import { IMovie } from '../../../interfaces/movieInterfaces';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
    const { movies } = useAppSelectore((state) => state.movie);
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(MovieAction.getMovieById(Number(id)));
    }, [dispatch, id]);

    const selectedMovie = movies.results.find((movie) => movie.id === Number(id));
    return (
        <div>

            {selectedMovie && (
                <div key={selectedMovie.id}>
                    <h2>{selectedMovie.title}</h2>
                    <p>{selectedMovie.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                </div>
            )}
        </div>
    );
};

export default MovieInfo;
