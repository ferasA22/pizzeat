import React,{Component} from "react";

export class Product extends Component {
    render(){
        const style = {
            main:{
            margin:5,
            padding:5,
            width:"auto"
            },
            sub:{
                padding:5
            }
        }
        return (
            <div style={style.main}>
                <div style={style.sub}>
                    <label>Product Name</label>
                    <input type='text' value={this.props.name} readOnly />
                </div>
                <div style={style.sub}>
                    <label>Product Price</label>
                    <input type='text' value={this.props.price} readOnly />
                </div>
            </div>
        );
    }
}