import React,{Component} from "react";
export class Product extends Component {
    render(){
        return (
            <div className="col-2 card m-2">
                <img src='http://via.placeholder.com/350x150' className="card-img-top" alt="text" />
                <div class="card-body">
                        <label className="card-title text-center col-12 font-weight-bold">{this.props.name}</label>
                </div>
                <div className="card-footer">
                <div className="row">
                        <label className="card-title col-9 text-left">${this.props.price} </label>
                        <div className="col-3">
                        <a href="#" class="btn btn-sm btn-success pull-right" style={{borderRadius:"50%",padding:1,width:25,height:25}}>+</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}