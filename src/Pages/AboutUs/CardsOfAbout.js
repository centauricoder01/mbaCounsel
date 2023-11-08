import React from 'react'
import Card from 'react-bootstrap/Card';
import "./About.css";


const CardsOfAbout = ({image, head, para}) => {
  return (
    <div className='number-of-mine' >
       <Card style={{ width: '20rem', height: '30rem', padding:'1rem', gap:'2rem',fontFamily:'Times New Roman' }} className='cards-of-about' >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title style={{color:"#107E7D", fontWeight:"900", fontFamily:"Times New Roman"}} >{head}</Card.Title>
        <Card.Text>
          {para}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardsOfAbout;
