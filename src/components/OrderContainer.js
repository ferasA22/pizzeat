import React,{ Component  } from "react";
import { ProductsList } from "./ProductsList";
export class OrderContainer extends Component {
    
    render(){
        const products = [
            {name:'test',price:799},
            {name:'t6est',price:899},
            {name:'teyst',price:7999},
            {name:'teust',price:7909},
            {name:'teyst',price:7989}
        ]
        return (
          <ProductsList products={products}/>
        );
    }
}