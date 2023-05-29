import React, { Component } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Card from "./Card";
import styles from "./Products.module.css";

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
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          products.map((products) => (
            <Card
              key={v4()}
              image={products.image}
              title={products.title}
              price={`${products.price} $`}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
