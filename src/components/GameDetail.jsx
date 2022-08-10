import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import igdb, { BASE_IMG_URL } from '../apis/igdb'
import GameCards from './GameCards'

const GameDetail = () => {
 let { id } = useParams()
 const [game, setGame] = useState({})

 const fetchGame = async (id) => {
  try {
   const fetchData = await igdb.get(`games/${id}`,
    {
     params: {
      fields: "*,franchises.*,platforms.*,platforms.platform_logo.*,cover.*,screenshots.*,themes.*,release_dates.*",
     }
    });
   setGame(fetchData.data[0]);
   console.log(fetchData.data[0])
  } catch (error) {
   console.log(error);
   setGame([]);
  }
 }

 useEffect(() => {
  fetchGame(id)
 }, [])

 return (
  <Container>
   <Row>
    <Col sm={8}>
     <h1>{game?.name}</h1>
    </Col>
   </Row>
   <Row>
    <Col>
     {game?.screenshots?.length > 0 && <Image
      style={{ width: "100%" }}
      src={`${BASE_IMG_URL}${game?.screenshots[0]?.image_id}.jpg`} />}
    </Col>
   </Row>
   <br />

   <Row>
    {game?.franchises?.length > 0 && (
     <>
      <Row>
       <h1>Franchises</h1>
      </Row>
      {game?.franchises?.map((f, i) => (
       <Row>
        <h3>{f?.name}</h3>
        {f?.games?.length > 0 && (
         f?.games?.map((g, i) => (
          <GameCards id={g} />
         ))
        )}
       </Row>
      ))}
     </>
    )}

   </Row>
  </Container>
 )
}

export default GameDetail