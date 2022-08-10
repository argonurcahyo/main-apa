import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import igdb from '../apis/igdb'
import { useParams } from 'react-router-dom'
import GameCards from './GameCards'
import Pagination from './Pagination'

const Home = () => {
 let { page } = useParams()
 let itemPerPage = 24
 const [games, setGames] = useState([])

 if (!page) page = 1

 const fetchGames = async () => {
  try {
   const fetchData = await igdb.get("games",
    {
     params: {
      fields: "name,rating",
      limit: itemPerPage,
      offset: itemPerPage * (page - 1),
      order: "rating:desc",
      // 'filter[platforms][eq]': 48,
      'filter[category][eq]': '0',
      'filter[rating][gt]': '0',
      // 'filter[version_parent][eq]': 'null'
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
  setGames([])
  fetchGames()
 }, [page]);

 return (
  <Container>
   <Row>
    <Col sm={8}>
     <h1>Home</h1>
    </Col>
   </Row>
   <Row>
    <Pagination num={10} />
   </Row>
   {games.length > 0 ?
    <>
     <Row>
      <h4>Showing entries {itemPerPage * (page - 1) + 1} - {itemPerPage * (page - 1) + games?.length}</h4>
     </Row>
     <Row>
      {games && games.map((g, i) => (
       <Col key={i} xs={6} sm={4} md={3} lg={2} xl={2}>
        <GameCards id={g?.id} />
       </Col>
      ))}
     </Row>
    </> : <>
     No content available
    </>

   }

   <Row>
    <Pagination num={10} />
   </Row>
  </Container>
 )
}

export default Home