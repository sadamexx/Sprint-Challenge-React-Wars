import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';
import { Col } from 'reactstrap';  

const StarWarsCard = props => {
    console.log(props);
  return (
    <Col xs="12" s="6" md="4">
      <Card>
        <CardImg
          top width="100%"
          src= "https://images.unsplash.com/photo-1558793588-a82336c8a9b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="May The Force Be with You"
        />
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardSubtitle>Birth year: {props.birth_year}</CardSubtitle>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
          <CardSubtitle>Eye Color:{props.eye_color}</CardSubtitle>
          <CardSubtitle>Hair Color: {props.hair_color}</CardSubtitle>
          <CardSubtitle>Height (cm): {props.height}</CardSubtitle>
          <CardSubtitle>Weight (kg): {props.mass}</CardSubtitle>          
        </CardBody>
      </Card>
    </Col>
  );
};
export default StarWarsCard;