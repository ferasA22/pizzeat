import React,{ Component  } from "react";
import { ProductsList } from "./ProductsList";
export class OrderContainer extends Component {
    
    render(){
        const products = [
            {name:'Product 1',price:799},
            {name:'Product 2',price:899},
            {name:'Product 3',price:7999},
            {name:'Product 4',price:7909},
            {name:'Product 5',price:7989}
        ]
        return (
          <ProductsList products={products}/>
        );
    }
}