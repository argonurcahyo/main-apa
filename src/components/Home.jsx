import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import igdb from '../apis/igdb'
import GameCards from './GameCards'

const Home = () => {
 const [games, setGames] = useState([])

 const fetchGames = async () => {
  try {
   const fetchData = await igdb.get("games",
    {
     params: {
      fields: "name,rating",
      limit: 20,
      order: "rating:desc",
      'filter[platforms][eq]': 48,
      'filter[rating][gt]': '0'
     }
    });
   setGames(fetchData.data);
   console.log(fetchData)
  } catch (error) {
   console.log(error);
   setGames([]);
  }
 }

 useEffect(() => {
  fetchGames()
 }, []);

 return (
  <Container>
   <Row>
    <Col sm={8}>
     <h1>Home</h1>
    </Col>
   </Row>
   <Row>
    {games && games.map((g, i) => {

     return <Col key={i} xs={6} sm={4} md={3} lg={2} xl={2}>
      <GameCards id={g?.id} />
     </Col>


    })}

   </Row>
  </Container>
 )
}

export default Home