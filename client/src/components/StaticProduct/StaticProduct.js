import React from "react";
import styled from "styled-components";

//maybe have to turn into a class and store the image array as part of the state and then allow user to get new images
function StaticProduct(props) {
  return (
    <Wrapper>
        <h1>{props.itemName}</h1>
        <img src={props.imageUrl} alt="Pic1" height="300px" width="300px"/>
        <h2>Price: {props.price}</h2>
        <p>{props.description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
  background-color: #f76565;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10px

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default StaticProduct;