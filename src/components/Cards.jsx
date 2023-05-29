import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import iph13promax from "../assets/13promax.jpeg";
import { v4 } from "uuid";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { image: iph13promax, title: "IPhone11", price: "500 $" },
        { image: iph13promax, title: "IPhone12", price: "800 $" },
        { image: iph13promax, title: "IPhone13", price: "1000 $" },
        { image: iph13promax, title: "IPhone13 Promax", price: "1200 $" },
      ],
    };
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          {/* <Card image={iph13promax} name="IPhone11" price="500 $" />
          <Card image={iph13promax} name="IPhone12" price="800 $" />
          <Card image={iph13promax} name="IPhone13" price="1000 $" />
          <Card image={iph13promax} name="IPhone13 Promax" price="1200 $" /> */}
          {this.state.phoneData.map((phone) => (
            <Card
              key={v4()}
              image={phone.image}
              title={phone.title}
              price={phone.price}
            />
          ))}
        </div>
      </>
    );
  }
}
