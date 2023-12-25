import React from 'react';
import { IMovie } from "../../interfaces/movieInterfaces";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

import style from "./Movie.module.css"
interface IProps {
    movie: IMovie;
}
 const Movie: React.FC<IProps> = ({ movie }) => {
    const { id, original_title, poster_path } = movie;
     const navigate=useNavigate()
    const navi=()=>{
         navigate(`/movieInfo/${id}`)
     }
    return (
            <div className={style.title}>
                <div className={style.main}onClick={navi}>
                    <img className={style.photo} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} />
                    <div className={style.main_title}>{original_title}</div>
                </div>
                </div>
    );
};

export default Movie;
