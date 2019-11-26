import React from 'react'
import axios from 'axios';

class SubmitProduct extends React.Component{

    constructor(){
        super();
        this.state={
            itemName: '',
            price:'',
            description: '',
            imageUrl: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;

        if(name === "imageUrl")
        {
            var fileInput = document.getElementById("fileInput");
            var files = fileInput.files;
            var file;

            // loop through files
            for (var i = 0; i < files.length; i++) {
                // get item
                file = files.item(i);

                this.state.imageUrl.push(file.name);
                //console.log(file.name);
            }
        }
        else if(name === "price")
        {
            this.setState({[name]: Number(value)});
        }
        else
            this.setState({[name]: value});
    }


    handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/submitProduct', this.state).then(function (response) {
            alert("Item submitted successfully!");
        })
        .catch(function (error) {
            alert(error);})

        this.setState({ itemName: '', price:'', description: '', imageUrl: []});
        
    }

    render(){
        return(
            
                <div>
                <form >
                    <label>
                        Item Name:
                        <input type='text' name="itemName" value={this.state.itemName} onChange={this.handleChange} placeholder='Item name here'/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Item Price:
                        <input type='number' min='0' name="price" value={this.state.price} onChange={this.handleChange} placeholder='Item price here'/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Item Description:
                        <br/>
                        <textarea   rows='8' cols='50' name="description" value={this.state.description} onChange={this.handleChange} placeholder='Item description here'/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Item Images:
                        <input type="file" multiple name="imageUrl" id="fileInput"  onChange={this.handleChange} placeholder='Hold shift to select multiple images'/>
                    </label>
                    <br/>
                    <br/>
                    <button type="button" onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
                    
        )
    }
}


export default SubmitProduct