import React, { Component } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Card from "./Card";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) =>
      this.setState({
        products: response.data,
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.products.map((products) => (
          <Card
            key={v4()}
            image={products.image}
            title={products.title}
            price={products.price}
          />
        ))}
      </div>
    );
  }
}
