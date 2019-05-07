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
<<<<<<< HEAD
=======
    this.moviesOMovies()
>>>>>>> 5ea4c2e85dc09e929cd9705c5406dac563a7cc86
    let searchButton = document.getElementById('search')
    searchButton.addEventListener('click', ()=>{this.moviesOMovies()})
}

<<<<<<< HEAD

=======
>>>>>>> 5ea4c2e85dc09e929cd9705c5406dac563a7cc86

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
<<<<<<< HEAD

               {myMovieSearch}
               
=======
                <a target='_blank' href={this.state.search.Website} alt='www.youtube.com'><img src={this.state.search.Poster}/></a>
                <p>{this.state.search.Plot}</p>
                <a target='_blank' href={this.state.search.Website}>{this.state.search.Website}</a>
>>>>>>> 5ea4c2e85dc09e929cd9705c5406dac563a7cc86
            </div>
            
</div>
           
    
    )   
}

}    




export default Movies
