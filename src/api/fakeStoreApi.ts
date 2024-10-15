import axios from "axios";

const fakeStoreApi=axios.create({
    baseURL:"https://fakestoreapi.com/products"
})

export default fakeStoreApi;