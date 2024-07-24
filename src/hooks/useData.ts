import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";



interface FetchResponse<T>{
    count : number;
    results : T[];
}


const useData = <T>(endpoint :string , requsetConfig?: AxiosRequestConfig , deps?:any[]) => {
    const [data,setData] = useState<T[]>([]);
    const [error,setError] = useState('');
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{

        setLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint ,{...requsetConfig} )
            .then(res => {
                setData(res.data.results)
                setLoading(false);  
            })
            .catch(err => {
                setError(err)
                setLoading(false);   
            });


    },deps ? [...deps]: [])

    return {data , error , Loading}
}

export default useData