import React, { Component } from "react";

class Table extends Component {
  render() {
    const isTable = this.props.state.isTable;
    if (isTable) {
      return (
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount Spend</th>
            </tr>
          </thead>
          <tbody>
            {this.props.state.values.map((post) => (
              <tr key={post.id}>
                <td>{post.category}</td>
                <td>{post.expenditure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return "";
  }
}

export default Table;
