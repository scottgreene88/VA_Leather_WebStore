import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
        <img src="https://valeatherco.s3-us-west-2.amazonaws.com/logo.png" alt="logo" height="50px" width="50px"/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

    const Wrapper = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
  
    ul {
      margin: 0;
      padding: 0;
    }
  
    li {
      display: inline-block;
      margin-left: 20px;
  
      a {
        text-decoration: none;
        font-size: 20px;
        color: #333;
      }
    }
  `;
  
  export default Header;