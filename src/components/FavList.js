import { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button'



export default function FavList(props){
    const[favMovie,setMovies]=useState();

    async function getFavMovies(){
    let url=`${process.env.REACT_APP_SERVER}/getMovies`

    let response= await fetch(url,{
      method:"GET",

    })
    let favMovie= await response.json()
    
    setMovies(favMovie);
   
    console.log(favMovie)
}
async function handleDelete(e,id){
    e.preventDefault();
    let url=`${process.env.REACT_APP_SERVER}/deleteMovies/${id}`;
    let response= await fetch(url,{
        method:"DELETE",
  
      })
      getFavMovies()
      alert("Movie Deleted")
     
}
/* const[update,setUpdate]=useState();
async function handleUpdate(e,id){
    e.preventDefault();
    let url=`${process.env.REACT_APP_SERVER}/updateMovies/${id}`;
    let response= await fetch(url,{
        method:"UPDATE",
  
      })

     prompt("Update Your Comment!")
     
} */


useEffect(()=>{
    getFavMovies();
},[]);
return(
    <>
    <h2>Favourit Movies</h2>
    {favMovie && favMovie.map((movie)=>{
        return(
            <Card style={{ width: '18rem'}}>
                 {/* <Card.Img variant="top" src={movie.poster_path} />  */}
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                
                    <Card.Text>
                        {movie.date}
                    </Card.Text>
                    <Button variant="primary" onClick=
                        {(e) => { handleDelete(e,movie.id) }}>
                        Delete </Button>
                {/*         <Button variant="primary" onClick=
                        {(e) => { handleUpdate(e,movie.id) }}>
                        Update </Button> */}
                    

                </Card.Body>
            </Card>

        )

        
    }
    )}
    </>
)
}
