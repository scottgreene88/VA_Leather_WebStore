import React from 'react'


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

        this.setState({[name]: value});
    }

    handleSubmit(event){
        alert(this.state.itemName+ " " + this.state.price+ " " + this.state.description+ " " + typeof this.state.imageUrl);
    }

    render(){
        return(
            
                <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Item Name:
                        <input type='text' name="itemName" value={this.state.itemName} onChange={this.handleChange} placeholder='Item name here'/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Item Price:
                        <input type='number' name="price" value={this.state.price} onChange={this.handleChange} placeholder='Item price here'/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Item Description:
                        <input type='textarea' rows="5" name="description" value={this.state.description} onChange={this.handleChange} placeholder='Item description here'/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Item Images:
                        <input type="file" name="img" multiple name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} placeholder='Hold shift to select multiple images'/>
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                </div>
                    
        )
    }
}


export default SubmitProduct