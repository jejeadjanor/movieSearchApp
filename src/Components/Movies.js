import React, {Component} from 'react'
import moviesapifetch from './../apicalls/moviesapifetch'



class Movies extends Component{
   
    constructor(props){
    super(props)

    this.state = {
        search: []
    }

}

componentDidMount(){
    let searchButton = document.getElementById('search')
    searchButton.addEventListener('click', ()=>{this.moviesOMovies()})
}

async moviesOMovies(){
    try {
        let searchInput = document.getElementById('searchMovie')
    let title = searchInput.value

    const m = await moviesapifetch.displayMovieDetails(title)
    const data = await m.json()
    console.log(data)
    this.setState({search: data.Search})
    } catch (error) {
        console.log(error)
    }
    

}



render(){
    const myMovieSearch = this.state.search.map(movie => (
        <div className="wrapper" key={movie.imdbID}>
            <p className="styleHead">{movie.Title}</p> 
            <img src={movie.Poster} alt=""/> 
        </div>
   
    ))
    
    return(
    
    <div className='container'>
            <div className='searchDiv'>
                <input type='text' id='searchMovie' className='searchBox' placeholder='Search movie...' />
                <button className='searchButton' type='button' id='search'>Search</button>
            </div>
            <div className='movieDisplayInfo'>

               {myMovieSearch}
               
            </div>
            
</div>
           
    
    )   
}

}    




export default Movies
