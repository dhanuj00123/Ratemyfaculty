import React from "react";
import Navbar from "./navbar";
import "../css/explore.css";
import Cards from "./cards";
import axios from "axios";
import Searchbar from "./search";

class explore extends React.Component {
  state = {
    results: [],
  };

  componentDidMount() {
    axios
      .get("http://ratemyfaculty.herokuapp.com/get-faculties")
      .then(({ data }) => {
        // console.log(data);
        this.setState({
          results: data,
        });
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="search-box-div">
          <Searchbar />
        </div>
        <div className="cards">
          {this.state.results
            .filter((faculty) => faculty.dept_id === "CSE")
            .map((faculty) => (
              <Cards
                key={faculty.faculty_id}
                name={faculty.faculty_name}
                img={faculty.faculty_img_url}
                rating={faculty.faculty_rating}
                position={faculty.faculty_position}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default explore;
