import React, { Component } from 'react';

class ReactRefs extends Component {
    constructor() {
        super();
        this.state = { 
            product_name: '',
            qty: 0,
            price: 0,
            total: 0
         }
    }
    addProduct = (e)=>{
       e.preventDefault();
       console.log(this.refs.price.value);
       console.log(e.target.price.value)
       this.setState({
        product_name: this.refs.p_name.value,
        price: this.refs.price.value,
        qty: this.state.qty + 1,
        total: e.target.price.value + parseInt(this.state.total)
       });
       console.log(this.state)
    }
    addQty = ()=> {
        this.setState({
            qty: this.state.qty + 1
        });
    }
    removeQty = ()=> {
        this.setState({
            qty: this.state.qty - 1
        })
    }
    render() { 
        return (  
            <div>
                <h1>React Refs</h1>
                <form onSubmit={this.addProduct}>
                    <label>Product Name:</label>
                    <input type="text" ref="p_name"/>
                    <label>Product Price:</label>
                    <input type="number" ref="price" name="price"/>
                    <button type="submit">Add</button>
                </form>
                <h3>
                    Product: {this.state.product_name}, 
                    {this.state.price} Euro,
                    Quantity: {this.state.qty}
                    Total Price: {this.state.total}
                </h3>
                <button type="submit" onClick={this.addQty}>+1</button>
                <button type="submit" onClick={this.removeQty}>-1</button>
                
            </div>
        );
    }
}
 
export default ReactRefs;