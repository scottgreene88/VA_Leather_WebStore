import React from "react";
import styled from "styled-components";

//maybe have to turn into a class and store the image array as part of the state and then allow user to get new images
class StaticProduct extends React.Component {

  constructor(props){
    super();
    this.state = {
      bucketUrl: props.bucketUrl,
      itemName: props.itemName,
      imageUrl: props.imageUrl,
      description: props.description,
      price: props.price,

      currentImage: props.imageUrl[0],
      currentImageNum: 0

    }
    this.handleButtonCLick = this.handleButtonCLick.bind(this);
  }

  handleButtonCLick(event)
  {
    const {name} = event.target;

    let imageNum = this.state.currentImageNum;

    if(name === "nextImage")
    {
      console.log("next" + imageNum);
      imageNum = (imageNum + 1) % (this.state.imageUrl.length);
      console.log(imageNum);
    }
    else if(name === "prevImage")
    {
      console.log("prev" + this.state.imageUrl.length);
      imageNum = (imageNum - 1) % (this.state.imageUrl.length);
      console.log(imageNum);
    }

    this.setState({
      currentImage: this.state.imageUrl[imageNum],
      currentImageNum: imageNum
    });

  }

  render(){
    return (
      <Wrapper>
          <h1>{this.state.itemName}</h1>
          <img src={this.state.bucketUrl + this.state.currentImage} alt="Pic1" height="300px" width="300px"/>
          <span>
            <button type='button' name="prevImage" onClick={this.handleButtonCLick}>Previous Image</button>
            <button type='button' name="nextImage" onClick={this.handleButtonCLick}>Next Image</button>
          </span>
          <h2>Price: {this.state.price}</h2>
          <p>{this.state.description}</p>
      </Wrapper>
    );
  }
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