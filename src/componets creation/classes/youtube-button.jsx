import { Component } from "react";
import "./youtube-color.css";
import CustomCards from "../card/cards";
import Counter from "./counters";

class YoutubeButton extends Component {

  state = {
    isClick: false,
    text1: "Subscribe",
    text2: "Subscribed",
    cards: [], // Array to hold data for cards
  };

  ClickStatus = () => {
    this.setState((State) => ({
      isClick: !State.isClick,
    }));
  };

  addCard = () => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, {}], // Add an empty object as data for a new card
    }));
  };

  render() {
    return (
      <>
        <button
          className={this.state.isClick ? "subscribed" : "subscribe"}
          onClick={this.ClickStatus}
        >
          {this.state.isClick ? this.state.text2 : this.state.text1}
        </button>
        {this.state.isClick ? (
          <h2>Thanks for subscribing</h2>
        ) : (
          <h2>Please subscribe</h2>
        )}

        {this.state.isClick===true && (<>
          <button onClick={this.addCard}>Add Cards</button>
          <Counter/>
        </>
        )}
       

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.state.cards.map((_, index) => (
            <CustomCards key={index} />
          ))}
        </div>
      </>
    );
  }
}

export default YoutubeButton;
