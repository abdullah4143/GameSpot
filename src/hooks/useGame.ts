import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}


export interface Game{
    id: number;
    name: string;
    background_image : string;
    parent_platforms : {platform :Platform} [];
    metacritic : number;
   
}

interface FetchGameResponse{
    count: number;
    results: Game[];
}
const useGame = () => {
    const [games,setGames] = useState<Game[]>([]);
    const [error,setError] = useState('');
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        apiClient.get<FetchGameResponse>('/games')
            .then(res => {
                setGames(res.data.results)
                console.log(res.data.results) 
                setLoading(false);   

            })
            .catch(err => {
                setError(err)
                setLoading(false);   

            })
            .finally(()=>{
                setLoading(false);   
            })
    },[])

    return {games , error , Loading}
 
}

export default useGame