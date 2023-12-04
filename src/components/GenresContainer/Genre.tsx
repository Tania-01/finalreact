import React from 'react';
import {Genre} from "../../interfaces/GenreInterfaces";

interface IProps {
    genre:Genre
}

const Genred: React.FC<IProps> = ({genre}) => {
    const{id,name}=genre
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export default Genred;
