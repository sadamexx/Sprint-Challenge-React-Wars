import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import StarWarsCard from "./StarWarsCard";


export default function StarWarsList() {
  const [people, setPeople] = useState ([]);

  useEffect(() => {
    axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      console.log(response);
      setPeople(response.data.results);      
    })//ends then
    .catch(error => {
        console.log("The data was not returned", error);
    });
  }, []);//ends useEffect

  return(
    <Container>
      <Row>
        {people.map((people, index) => (
             <StarWarsCard 
             key={index}
             name={people.name}
             birth_year={people.birth_year}
             gender={people.gender}
             eye_color={people.eye_color}
             hair_color={people.hair_color}
             height={people.height}
             mass={people.mass}/>
        )
                    
            
        )
        }
      </Row>
    </Container>
  );//ends return
}//ends function