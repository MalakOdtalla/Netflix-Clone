import {useState,useEffect} from "react";
import  MovieList  from "./MovieList";

export default function Home(){
    const [movies, setMovies]=useState([]);

    async function getMovies(){
        let url =process.env.REACT_APP_SERVER;
        console.log(url)

        let response=await fetch(`${url}/trending`);
        let Data=await response.json();
        console.log(Data)
        setMovies(Data);

    }

    useEffect(() => {
        getMovies();},[])
    

return(
    <>
    <h1>Movies Home Page</h1>
    <MovieList  movies={movies}/>
    </>
)




}