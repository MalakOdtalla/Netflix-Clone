import Movie from "../components/Movie"

export default function MovieList(props){
    return(
        <>
      {  props.movies.map((movieData) => {
            return(
                <>
                <Movie movieData={movieData}  updateMovie={props.updateMovie}/>
               
                </>
            )
        })
    }
        </>

    )
    
}