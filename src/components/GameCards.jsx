import React, { useEffect, useState } from 'react'
import { Button, Card, Image, Modal } from 'react-bootstrap'
import igdb, { BASE_IMG_URL } from '../apis/igdb';

const GameCards = ({ id }) => {
 const [game, setGame] = useState({})
 const [open, setOpen] = useState(false)

 const fetchGame = async (id) => {
  try {
   const fetchData = await igdb.get(`games/${id}`,
    {
     params: {
      fields: "*,platforms.*,cover.*,screenshots.*,themes.*",
     }
    });
   setGame(fetchData.data[0]);
   // console.log(fetchData.data[0])
  } catch (error) {
   console.log(error);
   setGame([]);
  }
 }

 useEffect(() => {
  fetchGame(id)
 }, [id]);

 const handleClick = () => {
  setOpen(true)
  console.log(game)
 }
 const handleClose = () => setOpen(false)

 return (
  <>

   <Card style={{ padding: '0', width: '10rem' }} onClick={handleClick}>
    <Card.Img
     variant="top"
     src={`${BASE_IMG_URL}${game?.cover?.image_id}.jpg`}
    />
    <Card.Body>
     <Card.Title>{game?.name}</Card.Title>
    </Card.Body>
   </Card>

   <Modal show={open} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>{game?.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     {game?.screenshots ?
      <Image
       src={`${BASE_IMG_URL}${game?.screenshots[0]?.image_id}.jpg`}
       style={{ width: "100%" }}
      /> : <>No Image<br /></>
     }

     {game?.summary ? game.summary : "No summary"}
    </Modal.Body>
    <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
      Close
     </Button>
    </Modal.Footer>
   </Modal>
  </>
 )
}

export default GameCards