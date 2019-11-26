import React from 'react'
import axios from 'axios';


class SubmitSiteInfo extends React.Component{

    constructor(){
        super();
        this.state={
            about: '',
            contactMessage:'',
            contactEmail: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    componentDidMount(){
        fetch('http://localhost:3000/getSiteInfo')
        .then((data) => data.json())
        .then((res) =>{ this.setState({ about: res.data[0].about, contactMessage: res.data[0].contactMessage, contactEmail: res.data[0].contactEmail })})
        .catch(function (error) {
          alert(error);});

    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/submitSiteInfo', this.state).then(function (response) {
            alert("Info submitted successfully!");
        })
        .catch(function (error) {
            alert(error);})
       
    }

    render(){
        return(
            
                <div>
                <form >
                    <label>
                        About:
                        <br/>
                        <textarea   rows='8' cols='50' name="about" value={this.state.about} onChange={this.handleChange} placeholder='Write your about page here'/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Contact Info:
                        <br/>
                        <textarea   rows='8' cols='50' name="contactMessage" value={this.state.contactMessage} onChange={this.handleChange} placeholder='Item description here'/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Contact Email:
                        <input type='text' name="contactEmail" value={this.state.contactEmail} onChange={this.handleChange} placeholder='Contact email here'/>
                    </label>
                    <br/>
                    <br/>
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
                    
        )
    }
}


export default SubmitSiteInfo