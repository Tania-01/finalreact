const baseURL = 'https://api.themoviedb.org/3';

const movie = '/discover/movie';
const budget='/genre/movie/list'

const urls = {
    movie: {
        base: `${movie}`,
    },
    budget:{
        base:`${budget}`
    }
};
export { baseURL, urls };
