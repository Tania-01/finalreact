import React from 'react';
import {Genre} from "../../interfaces/GenreInterfaces";
import {useNavigate} from "react-router-dom";

import style from './genre.module.css'
interface IProps {
    genre:Genre
}

const Genred: React.FC<IProps> = ({genre}) => {
    const{id,name}=genre
    const navigate=useNavigate()
const nav=()=>{
        navigate(`/movies?with_genres=${id}`)
}
    return (
        <div  onClick={nav}>
            <div className={style.text}>{name}</div>
        </div>
    );
};

export default Genred;
