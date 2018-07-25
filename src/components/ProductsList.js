import React,{ Component  } from "react";
import { Product } from "./Product";
export class ProductsList extends Component {
    render(){
        
        return (
            <div className='row'>
            {this.props.products.map((product,index)=>{
              return <Product {...product} className='col-3 bg-danger' />
             }) 
            }
          </div>  
        );
    }
}