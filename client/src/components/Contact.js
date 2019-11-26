import React from "react";
import styled from "styled-components";

function Contact() {

  return (
    <Wrapper>
      <span>Contact</span>
      <section>
        <p>
            CONTACT STUFF HERE
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #f76565;
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

export default Contact;
