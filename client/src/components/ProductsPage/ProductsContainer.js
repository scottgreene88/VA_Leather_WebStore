import React from 'react'

import Product from '../StaticProduct/StaticProduct'

class ProductsContainer extends React.Component{

    constructor(){
        super();
        this.state={
            
        }
    }

    componentDidMount(){



    }

    render(){
        return(
            <div id="productContainer" display= 'inline-block' overflow= 'auto'>
                
                    <Product 
                    itemName="Black Purse" 
                    imageUrl="https://valeatherco.s3-us-west-2.amazonaws.com/black_large_01.jfif"
                    price="$250"
                    description="A sweet black purse"
                    />
                    <Product 
                    itemName="Brown Purse" 
                    imageUrl="https://valeatherco.s3-us-west-2.amazonaws.com/brown_small_01.jfif"
                    price="$150"
                    description="A sweet brown purse"
                    />
                
            </div>
            
        )
    }
}


export default ProductsContainer