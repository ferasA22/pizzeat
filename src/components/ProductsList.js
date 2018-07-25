import React,{ Component  } from "react";
import { Product } from "./Product";
export class ProductsList extends Component {
    render(){
        
        return (
            <div>
            {this.props.products.map((product,index)=>{
              return <Product {...product} />
             }) 
            }
          </div>  
        );
    }
}