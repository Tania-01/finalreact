import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelectore } from '../../hooks/reduxHooks';
import { MovieAction } from '../../redux/slices/MovieSlices';
import { useSearchParams} from 'react-router-dom';

import Movie from './Moviests'
import style from "./Movie.module.css"
const Movies = () => {
    const{movies}=useAppSelectore(state => state.movie)
    const dispatch=useAppDispatch()

    useEffect(()=>{

            dispatch((MovieAction.getMovieBygenres(with_genres)))

    })
    const [query,setQuery]=useSearchParams()
    const with_genres=Number(query.get('with_genres')) || 1;


    return (
        <div className={style.title}>
            {movies.results.map(movie=><Movie key={movie.id} movie={movie}/>)}

        </div>
    );
};
export default Movies;
