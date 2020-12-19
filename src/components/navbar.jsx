import React, { Component } from "react";
import axios from "axios";

class Nav extends Component {
  render() {
    return (
      <VictoryChart domainPadding={100}>
        <VictoryBar data={this.props.posts} x="category" y="expenditure" />
      </VictoryChart>
    );
  }
}

export default Nav;
