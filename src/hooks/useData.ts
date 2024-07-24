import { useEffect, useState } from "react";
import apiClient from "../services/api-client";



interface FetchResponse<T>{
    count : number;
    results : T[];

}



const useData = <T>(endpoint :string) => {
    const [data,setData] = useState<T[]>([]);
    const [error,setError] = useState('');
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint)
            .then(res => {
                setData(res.data.results)
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

    return {data , error , Loading}
}

export default useData