import React from 'react';
import { IMovie } from "../../../interfaces/movieInterfaces";
import { Link } from "react-router-dom";

interface IProps {
    movie: IMovie;
}
const Movieests: React.FC<IProps> = ({ movie }) => {
    const { id, original_title, title, poster_path } = movie;

    return (
        <Link to={`/movieInfo/${id}`}>
            <div>
                <div>{original_title}</div>
                <div>{title}</div>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            </div>
        </Link>
    );
};

export default Movieests;
