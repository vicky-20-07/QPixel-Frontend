import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID Kgfmbp74ktJuGUyZZoFE37dSGl7vA1MjjRGebtEG2l4"
    }
})