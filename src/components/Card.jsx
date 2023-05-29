import { Component } from "react";
import styles from "./Card.module.css";
import down from "../assets/down.svg";
import up from "../assets/up.svg";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { image, title, price } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="Iphone 11" />
        <h3>{title}</h3>
        <p>
          {price}{" "}
          {counter ? `* ${counter} = ${counter * price.split(" ")[0]} $` : ""}
        </p>
        <div className={styles.counter}>
          <img
            className={!this.state.counter ? styles.deactive : ""}
            src={down}
            alt="down"
            onClick={this.downHandler}
          />
          <span>{counter}</span>
          <img src={up} alt="up" onClick={this.upHandler} />
        </div>
      </div>
    );
  }
}
