import React, { useEffect, useState } from 'react'
import { Button, Card, Image, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import igdb, { BASE_IMG_URL } from '../apis/igdb';
import LoadingCard from './LoadingCard';

const GameCards = ({ id }) => {
 const [game, setGame] = useState({})
 const [open, setOpen] = useState(false)
 const [modalImageLoading, setModalImageLoading] = useState(true)

 const fetchGame = async (id) => {
  try {
   const fetchData = await igdb.get(`games/${id}`,
    {
     params: {
      fields: "*,platforms.*,platforms.platform_logo.*,cover.*,screenshots.*,themes.*,release_dates.*",
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
 const handleLoad = () => setModalImageLoading(false)
 return (
  <>

   <Card style={{ padding: '0', width: '10rem' }} onClick={handleClick} className="game-card">
    <Card.Img
     variant="top"
     src={`${BASE_IMG_URL}${game?.cover?.image_id}.jpg`}
    />
    <Card.Body>
     <Card.Subtitle>{game?.name}</Card.Subtitle>
    </Card.Body>
   </Card>

   <Modal show={open} onHide={handleClose}>
    <Modal.Header closeButton>
     <Modal.Title>
      <Link to={`/game/${id}`}>
       {game?.name}
      </Link>
     </Modal.Title>
    </Modal.Header>
    <Modal.Body>
     {game?.platforms?.length > 0 && (
      <>
       {game.platforms?.map((p, i) => (
        <Image
         style={{ width: "2rem", marginRight: "5px" ,marginBottom:"10px"}}
         src={`${BASE_IMG_URL}${p.platform_logo?.image_id}.jpg`} />
       ))}
       <br />
      </>
     )}
     {game?.screenshots ?
      <>
       <div style={{ display: modalImageLoading ? 'block' : 'none' }}>
        <LoadingCard />
       </div>

       <div style={{ display: modalImageLoading ? 'none' : 'block' }}>
        <Image
         src={`${BASE_IMG_URL}${game?.screenshots[0]?.image_id}.jpg`}
         style={{ width: "100%", borderRadius: "5px", marginBottom: '10px' }}
         onLoad={handleLoad}
        />
       </div>
      </>
      : <>No Image<br /></>
     }

     <div style={{ padding: "1rem" }}>
      {game?.summary ? game.summary : "No summary"}
     </div>


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