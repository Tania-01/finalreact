import axios from "axios";

import {baseURL} from "../contants/url";


const axiosServices=axios.create({baseURL})
axiosServices.interceptors.request.use(request=>{
    request.headers.Authorization='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc1NzliYjM0ZDI4MDE4MGNlN2QxZjZiMmU3ZDkzMiIsInN1YiI6IjVmNmVmYTA3ZTI2N2RlMDAzMzFlMzdmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rbpC0Q9U-3G-9XZbMfrsrfnmcr19oNZxDeU1acqGmM0'
    return request
})

export {axiosServices}