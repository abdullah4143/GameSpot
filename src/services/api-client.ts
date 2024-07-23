import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key : '34f7016315104a85843ae408e68315da'
    }
})