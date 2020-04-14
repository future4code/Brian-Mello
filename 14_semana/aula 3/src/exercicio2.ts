import axios, { AxiosResponse } from "axios";

const URL: string = "https://jsonplaceholder.typicode.com/posts/"

const id1: string = URL + (process.argv[2])
const id2: string = URL + (process.argv[3])
const id3: string = URL + (process.argv[4])


axios.get(id1).then ((resp: AxiosResponse) => {
    console.log(resp.data.title);
}).catch((error:Error) => {
    console.log(error);
})
axios.get(id2).then ((resp: AxiosResponse) => {
    console.log(resp.data.title);
}).catch((error:Error) => {
    console.log(error);
})
axios.get(id3).then ((resp: AxiosResponse) => {
    console.log(resp.data.title);
}).catch((error:Error) => {
    console.log(error);
})


