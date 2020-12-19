import React, { Component } from "react";
import { VictoryBar, VictoryChart } from "victory";

class Chart extends Component {
  render() {
    const isChart = this.props.state.isChart;
    if (isChart) {
      return (
        <VictoryChart domainPadding={100}>
          <VictoryBar
            data={this.props.state.posts}
            x="category"
            y="expenditure"
          />
        </VictoryChart>
      );
    }
    return "";
  }
}

export default Chart;
