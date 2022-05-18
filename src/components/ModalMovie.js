import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react'

export default function ModalMovie(props){

  let commentRef= useRef()
  function handleComment(e){
    e.preventDefault();
    let userComment=commentRef.current.value;
    console.log(userComment)
    let newMovie={...props.choosenCard,userComment}
    props.updateMovie(newMovie,newMovie.id);


  }
  async function handleAddToFav(e,movieData){
    e.preventDefault();
    let url=`${process.env.REACT_APP_SERVER}/postMovies`
    let data ={
      title:movieData.title,
       date:movieData.release_date,
      comment:movieData.comment,
    }
    let response= await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data),

    })
    let addedmovie=await response.json();
    alert("Movie Added")
    console.log("addedmovie",addedmovie)

  }


    return(
        <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.choosenCard.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.choosenCard.poster_path} alt="movieData" style={{ width: "100%" }} />
          <br/>
          <p>{props.choosenCard.release_date}</p>
          <br/>
          {props.choosenCard.comment?  props.choosenCard.comment : "no comment"}
          
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Comment</Form.Label>
              <Form.Control ref={commentRef} type="text" placeholder="Enter comment" />
              <Form.Text className="text-muted">
                Add Your Comment    </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=>handleComment(e)}>
              Submit comment
            </Button>
            <Button variant="primary" type="submit" onClick={(e)=>handleAddToFav(e,props.choosenCard)}>
              Add to favourit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.FooterhandleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
    </>
  )
}
