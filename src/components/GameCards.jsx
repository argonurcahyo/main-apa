import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import igdb from '../apis/igdb';

const GameCards = ({ id }) => {
 const [game, setGame] = useState({})

 const fetchGame = async (id) => {
  try {
   const fetchData = await igdb.post("games", `fields *; where id = ${id}`);
   setGame(fetchData.data);
   console.log(fetchData.data)
  } catch (error) {
   console.log(error);
   setGame([]);
  }
 }

 useEffect(() => {
  fetchGame(id)
 }, [id]);

 return (
  <Card style={{ padding: '0', width: '18rem' }}>
   <Card.Img variant="top" src="http://placekitten.com/286/180" />
   <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
     Some quick example text to build on the card title and make up the
     bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
   </Card.Body>
  </Card>
 )
}

export default GameCards