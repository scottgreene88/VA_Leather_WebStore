import React from 'react'
import './ProductsContainer.css'

import Product from '../StaticProduct/StaticProduct'

class ProductsContainer extends React.Component{

    constructor(){
        super();
        this.state={
            products: []
        }
    }

    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
          let interval = setInterval(this.getDataFromDb, 5000);
          this.setState({ intervalIsSet: interval });
        }
      }

    componentWillUnmount() {
        if (this.state.intervalIsSet) {
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet: null });
        }
      }

    getDataFromDb = () => {
        fetch('http://localhost:3000/getProducts')
          .then((data) => data.json())
          .then((res) => this.setState({ products: res.data }))
          .catch(function (error) {
            alert(error);});
      };

    render(){

        const bucketUrl = 'https://valeatherco.s3-us-west-2.amazonaws.com/'
        const { products } = this.state;
        return(
            <div id="productContainer" >
                <ul id="productList">
                    {products.length <= 0
                        ? 'No Products'
                        : products.map((dat) => (
                            <li display= 'inline-block' style={{ padding: '10px' }} key={products._id}>
                                <Product itemName={dat.itemName} price={dat.price} description={dat.description} bucketUrl={bucketUrl} imageUrl={dat.imageUrl} />
                            </li>
                        ))}
                </ul>            
            </div>           
        )
    }
}


export default ProductsContainer