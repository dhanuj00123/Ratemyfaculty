import axios from "axios";
import React, { Component } from "react";
import { Search as _Search } from "react-feather";
import "../css/search.css";

class Searchbar extends Component {
  state = {
    query: "",
    results: [],
  };

  getInfo = () => {
    axios
      .get(`http://ratemyfaculty.herokuapp.com/search/${this.state.query}`)
      .then(({ data }) => {
        // console.log(data);
        this.setState({
          results: data,
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else {
          this.setState({ results: [] });
        }
      }
    );
  };
  render() {
    return (
      <div className="search-wrapper">
        <div className="search-box">
          <_Search size={30} />
          <input
            type="text"
            placeholder="faculty name"
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="search-suggestion-box">
          <span className="search-items">
            {this.state.results.map((faculty) => (
              <li key={faculty.id}>{faculty.faculty_name}</li>
            ))}
          </span>
        </div>
      </div>
    );
  }
}
export default Searchbar;
