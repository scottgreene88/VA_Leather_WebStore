import React from "react";
import styled from "styled-components";

import ProductsContainer from './ProductsContainer'

function ProductsPresentation() {
  return (
    <Wrapper>
        <ProductsContainer/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #d28caa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default ProductsPresentation;