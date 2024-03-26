import React, { Component } from "react";
import plusIcon from "../assets/plus_icon.png";

export class NewProgram extends Component {
  handleClick() {
    alert('You have clicked the "New Program" button');
  }
  render() {
    return (
      <div id='button-div'>
        <div id='green-button' onClick={this.handleClick}>
          <img src={plusIcon} alt='+' />
        </div>
        <p>New Program</p>
      </div>
    );
  }
}
