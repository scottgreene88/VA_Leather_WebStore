import React from "react";
import styled from "styled-components";

class Contact extends React.Component {

  constructor(){
    super();
    this.state = {
      contactText:'',
      contactEmail: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/getSiteInfo')
    .then((data) => data.json())
    .then((res) =>{ 
        this.setState({ 
          contactText: res.data[0].contactMessage, 
            contactEmail: res.data[0].contactEmail }); 
        })
    .catch(function (error) {
      alert(error);});

}

  render(){
    return (
      <Wrapper>
        <span>Contact</span>
        <section>
          <p>
              {this.state.contactText}
          </p>
          <br/>
          <p>
              Email: {this.state.contactEmail}
          </p>
        </section>
      </Wrapper>
    );
  }
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
