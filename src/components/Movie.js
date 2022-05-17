import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import { useState } from 'react';
import ModalMovie from './ModalMovie';

export default function Movie(props){
    const [show, setShow] = useState(false);
    const [choosenCard, setChoosenCard] = useState();

    const handleShow = (movieData) => {
        setShow(true);
        setChoosenCard(movieData);
    }
   
    const handleClose = () => setShow(false);

    return(
        <>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.movieData.poster_path} />
  <Card.Body>
    <Card.Title>{props.movieData.title}</Card.Title>
    <Card.Text>
      {props.movieData.overview}
    </Card.Text>
    <Button variant="primary" onClick=
    {()=>
    {handleShow(props.movieData)}}>
       View Details </Button>
  </Card.Body>
</Card>
{choosenCard && <ModalMovie show={show} handleClose={handleClose} choosenCard={choosenCard} />
}
        </>
    )
}


