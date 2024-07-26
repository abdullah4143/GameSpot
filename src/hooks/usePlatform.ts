import platforms from '../data/platform.ts'
export interface Platform {
    id: number;
    name:string;
    slug:string;
}
const usePlatform = () => ({data : platforms , Loading : false , error : null});

export default usePlatform