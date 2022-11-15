import FormalSuit from '../../img/formalsuitblack.png' 
import Star from '../../img/Star.png' 
import Card from 'react-bootstrap/Card';
// import React,{useState,useEffect} from 'react'

function Cards(props) {
  return (
    <Card style={{ width: '208px' }}>
      <Card.Img variant="top" src={FormalSuit} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <h6 className='text-danger'>{props.price}</h6>
        <p className='text-secondary'>{props.toko}</p>
        <div className='star d-flex'>
            <img src={Star} alt=""/>
            <img src={Star} alt=""/>
            <img src={Star} alt=""/>
            <img src={Star} alt=""/>
            <img src={Star} alt=""/>
        </div>
      </Card.Body>
    </Card>
  );
}



export default Cards;

