import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelectore} from "../../hooks/reduxHooks";
import {movieServices} from "../../services/movieServices";
import {MovieAction} from "../../redux/slices/MovieSlices";
import Movie from "./Moviests";
import {useSearchParams} from "react-router-dom";

export const Moviest = () => {

    const{movies}=useAppSelectore(state => state.movie)
    const dispatch=useAppDispatch()

    useEffect(()=>{

            dispatch(MovieAction.getAll(pages));




    })
    const [query,setQuery]=useSearchParams()
    const pages = Number(query.get('page')) || 1;
const with_genres=Number(query.get('with_genres')) || 1;
    const nextPage = () => {
        const nextPageNumber = pages + 1;
        setQuery({ page: nextPageNumber.toString() });
    };
    const prevPage = () => {
        const prevPageNumber = Math.max(pages - 1, 1).toString(); // Конвертуємо в рядок
        setQuery({ page: prevPageNumber });
    }
    console.log(movies)

    return (
        <div>
             {movies.results.map(movie=><Movie key={movie.id} movie={movie}/>)}
    <button onClick={nextPage}>Next</button>
         <button onClick={prevPage}>prev</button>
        </div>
);
};

    export default Moviest;