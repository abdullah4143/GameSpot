import genres from '../data/genre.ts'

export interface Genre{
    id : number,
    name: string,
    image_background: string;
}

const useGenre = () => ({data : genres  , Loading : false , error : null});

export default useGenre