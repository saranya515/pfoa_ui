import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import http from "./services/httpService";
import config from "./config.json";
import Chart from "./components/chart";
import Table from "./components/table";

class App extends Component {
  state = {
    success: false,
    posts: [],
    values: [],
    isTable: false,
    isChart: false,
  };

  async componentDidMount() {
    // pending > resolved (success) OR rejected (failure)
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }

  changeTableState = () => {
    this.setState({
      values: this.state.posts,
      success: true,
      isTable: true,
      isChart: false,
    });
  };

  changeGraphState = () => {
    this.setState({
      values: this.state.posts,
      success: false,
      isChart: true,
      isTable: false,
    });
  };

  render() {
    let table_btn_class = this.state.success ? "btn btn-dark" : "btn btn-light";
    let graph_btn_class = this.state.success ? "btn btn-light" : "btn btn-dark";
    return (
      <React.Fragment>
        <ToastContainer />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Dashboard
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <button
                  className={graph_btn_class}
                  onClick={this.changeGraphState.bind(this)}
                >
                  Graph View
                </button>
              </li>
              <li class="nav-item">
                <button
                  className={table_btn_class}
                  onClick={this.changeTableState.bind(this)}
                >
                  Table Data
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <Table state={this.state}></Table>
        <Chart state={this.state}></Chart>
      </React.Fragment>
    );
  }
}

export default App;
