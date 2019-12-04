import React from "react";
import styled from "styled-components";


class About extends React.Component {

  constructor(){
    super();
    this.state = {
      aboutText:''
    }
  }

  componentDidMount()
  {
    fetch('http://localhost:3000/getSiteInfo')
    .then((data) => data.json())
    .then((res) =>{ 
        this.setState({ 
          aboutText: res.data[0].about }); 
        })
    .catch(function (error) {
      alert(error);});

}

  render(){
    return (
      <Wrapper>
        <span>About VA Leather Co.</span>
        <section>
          <p>
              {this.state.aboutText}
          </p>
        </section>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #4bc9c0;
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

export default About;
