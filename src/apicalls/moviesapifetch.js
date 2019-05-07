import moviesParams from './../config/moviesconfig'

export default {
    displayMovieDetails(title){
        let url = `${moviesParams.baseUrl}?apikey=${moviesParams.apiKey}&s=${title}`
        return fetch(url)
    }
}