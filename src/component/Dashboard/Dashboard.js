import React, { Component } from "react";
import Button from "../../resource/Button/Button";
import Thumbnailbox from "../../resource/Thumbnailbox/Thumbnailbox";
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { Grid,Box,Paper} from "@material-ui/core";
import axios from "axios";
import "./Dashboard.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Dashboard extends Component {
  state = {
    inputboolean: false,
    id: "",
    courses: [],
  };

  animationHandler = () => {
    this.setState({ inputboolean: true });
  };

  classAdd = (id) => {
    console.log("add class " + id);
    this.setState({ id: id });
  };
  classRemove = (id) => {
    console.log("remove class " + id);
    this.setState({ id: "" });
  };
  componentDidMount() {
    cookies.get("myCat");
    this.getAllCourse();
  }
  getAllCourse = async () => {
    try {
      const getCourses = await axios.post(
        "https://sqlnbackend.herokuapp.com/getAllMentorPlaylist",
        {},
        {
          headers: {
            Authorization: `Basic ${cookies.get("sI_L")}`,
          },
        }
      );
      this.setState({ courses: getCourses.data.data });
      console.log(getCourses);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    // temporary class management
    let inputclas = ["searchInput"];
    let innboxclas = ["inn"];
    let buttontempclas = ["searchButton"];
    if (this.state.inputboolean) {
      inputclas = ["tempinputclas", ...inputclas];
      innboxclas = ["tempinnboxclas", ...innboxclas];
      buttontempclas = ["tempButtonclas", ...buttontempclas];
    }
    return (
      <div className="dasboarduperdiv">
        <div className="searchcont">
          <div className={innboxclas.join(" ")}>
            {this.state.inputboolean ? (
              <Button clas={buttontempclas.join(" ")}> SEARCH</Button>
            ) : null}

            <input
              type="text"
              placeholder="Search"
              className={inputclas.join(" ")}
              onClick={this.animationHandler}
            />
          </div>
        </div>

        <div className="thomeouter">
          {this.state.courses.map((e, index) => {
            return (
              <Thumbnailbox
                key={index}
                course={e}
                over={this.classAdd}
                remove={this.classRemove}
                id={index}
                stateId={this.state.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Dashboard;
