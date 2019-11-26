import React from 'react';

import styled from "styled-components";

import SubmitProductPresentation from '../SubmitProduct/SubmitProductPresentation';
import SubmitSiteInfo from '../SubmitSiteInfo/SubmitSiteInfo';

class AdminPage extends React.Component{

    constructor(){
        super();
        this.state={
            currentPage: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name} = event.target;

        if(name === "subProd")
            this.setState({currentPage: <SubmitProductPresentation/>});
        else if(name === "siteInfo")
            this.setState({currentPage: <SubmitSiteInfo/>});
    }

    

    render(){
        return(
        <Wrapper>
            <span>
                <button type='button' name='subProd' onClick={this.handleChange}>Submit Product</button>
                <button type='button' name='siteInfo' onClick={this.handleChange}>Site Info</button>

            </span>
            <br/>
            <br/>
            {this.state.currentPage}
        </Wrapper>
        );
    }

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

export default AdminPage;