import { Component } from "react";
import Signin from "../Signin";
import axios from "axios";
import Context from "../../../Context/Context";

import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Signinstate extends Component {
  state = {
    username: "",
    password: "",
    check: false,
    signup: {
      entername: "",
      enteremail: "",
      enterpassword: "",
      reenterpassword: "",
    },
    notMatch: false,
    somthingWent: false,
  };
  signupHandel = async () => {
    // console.log("hit");
    if (this.state.signup.enterpassword === this.state.signup.reenterpassword) {
      // console.log(this.state.signup);
      try {
        const sign = await axios.post(
          "https://sqlnbackend.herokuapp.com/user/signup",
          {
            name: this.state.signup.entername,
            email: this.state.signup.enteremail,
            password: this.state.signup.enterpassword,
          }
        );
        cookies.set("sI_L", sign.data.token);
        console.log(sign.data.token);
        this.props.history.push("/dashboard");
      } catch (error) {
        this.setState({ somthingWent: true });
        console.log(error);
      }

      // this.setState({ notMatch: true });
    } else {
      console.log("not match");
      this.setState({ notMatch: true });
    }
  };
  signupStateHandler = (event) => {
    this.setState({ notMatch: false, somthingWent: false });
    const { name, value } = event.target;
    if (name === "entername") {
      this.setState({
        signup: {
          entername: value,
          enteremail: this.state.signup.enteremail,
          enterpassword: this.state.signup.enterpassword,
          reenterpassword: this.state.signup.reenterpassword,
        },
      });
    } else if (name === "enteremail") {
      this.setState({
        signup: {
          entername: this.state.signup.entername,
          enteremail: value,
          enterpassword: this.state.signup.enterpassword,
          reenterpassword: this.state.signup.reenterpassword,
        },
      });
    } else if (name === "enterpassword") {
      this.setState({
        signup: {
          entername: this.state.signup.entername,
          enteremail: this.state.signup.enteremail,
          enterpassword: value,
          reenterpassword: this.state.signup.reenterpassword,
        },
      });
    } else if (name === "reenterpassword") {
      this.setState({
        signup: {
          entername: this.state.signup.entername,
          enteremail: this.state.signup.enteremail,
          enterpassword: this.state.signup.enterpassword,
          reenterpassword: value,
        },
      });
    }
  };

  emailHandler = (event) => {
    this.setState({
      username: event.target.value,
      check: false,
    });
  };
  passwordHandler = (event) => {
    this.setState({
      password: event.target.value,
      check: false,
    });
  };
  clickHandler = async () => {
    console.log(this.state.username + " " + this.state.password);

    try {
      const getData = await axios.post(
        "https://sqlnbackend.herokuapp.com/user/signIn",
        {
          email: this.state.username,
          password: this.state.password,
        }
      );
      cookies.set("sI_L", getData.data.token);
      console.log(getData.data.token);
      this.props.history.push("/dashboard");
    } catch (error) {
      this.setState({ check: true });
    }
  };
  render() {
    return (
      <div>
        <Context.Provider
          value={{
            change: this.signupStateHandler,
            click: this.signupHandel,
          }}
        >
          <Signin
            emailHandler={this.emailHandler}
            passwordHandler={this.passwordHandler}
            clickHandler={this.clickHandler}
            check={this.state.check}
            notMatch={this.state.notMatch}
            somthingWent={this.state.somthingWent}
          />
        </Context.Provider>
      </div>
    );
  }
}
export default withRouter(Signinstate);
