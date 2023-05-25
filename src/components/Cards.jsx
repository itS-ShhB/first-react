import React, { Component } from "react";
import Card from "./Card";
import styles from "./Cards.module.css";
import iph13promax from "../assets/13promax.jpeg";
import {v4} from 'uuid'

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { images: iph13promax, name: "IPhone11", cost: "500 $" },
        { images: iph13promax, name: "IPhone12", cost: "800 $" },
        { images: iph13promax, name: "IPhone13", cost: "1000 $" },
        { images: iph13promax, name: "IPhone13 Promax", cost: "1200 $" },
      ],
    };
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          {/* <Card images={iph13promax} name="IPhone11" cost="500 $" />
          <Card images={iph13promax} name="IPhone12" cost="800 $" />
          <Card images={iph13promax} name="IPhone13" cost="1000 $" />
          <Card images={iph13promax} name="IPhone13 Promax" cost="1200 $" /> */}
          {this.state.phoneData.map((phone) => (
            <Card key={v4()} images={phone.images} name={phone.name} cost={phone.cost} />
          ))}
        </div>
      </>
    );
  }
}
