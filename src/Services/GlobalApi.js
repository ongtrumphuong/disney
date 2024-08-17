import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3"
// const api_key = 'e9e9d8da18ae29fc430845952232787c'
const getTrendingVideos = axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')

export default {
    getTrendingVideos
}