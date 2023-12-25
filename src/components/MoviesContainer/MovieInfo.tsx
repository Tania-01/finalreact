import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelectore } from '../../hooks/reduxHooks';
import { MovieAction } from '../../redux/slices/MovieSlices';
import { useParams } from 'react-router-dom';

import style from './MovieInfo.module.css'
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
                <div className={style.main} key={selectedMovie.id}>
                    <img className={style.image} src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                    <div className={style.main_title}>
                        <h2>{selectedMovie.title}</h2>
                        <p className={style.title}>{selectedMovie.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieInfo;
