import {useState,useEffect} from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import  MovieList  from "./MovieList";


export default function Home(){
    const [movies, setMovies]=useState([]);

    async function getMovies(){
        let url =process.env.REACT_APP_SERVER;

        let response=await fetch(`${url}/trending`);
        let Data=await response.json();
        setMovies(Data);

    }

    function updateMovie(newMovie, id){
        let updatedMovie=movies.map(movie=>{
            if (movie.id===id){
                movie.comment=newMovie.userComment;
                return movie;

            }else{
                return movie;
            }
        })
            setMovies(updatedMovie);
       

    }


    useEffect(() => {
        getMovies();},[])
    

return(
    <>
    <h1>Movies Home Page</h1>
    <MovieList  movies={movies} updateMovie={updateMovie}/>
    </>
)




}