import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GameCards from './GameCards'

const Home = () => {
 return (
  <Container>
   <Row>
    <Col sm={8}>
     <h1>Home</h1>
    </Col>
   </Row>
   <Row>
    <GameCards id="1942" />
   </Row>
  </Container>
 )
}

export default Home