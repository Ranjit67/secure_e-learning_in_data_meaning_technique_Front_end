import {Component} from 'react';
import "./Right.css";
import Input from "../../../resource/Input/Input";
import Button from "../../../resource/Button/Button";
import Signup from "../Signup/Signup";
import {GitHub, LinkedIn, Facebook} from '@material-ui/icons';
class Right extends Component{

  state={
   
      first:"",
      second:""

  }
  firstflicp=()=>{
   
this.setState({

    first:"first",
    second:"second"

});
  }

  secondflicp =()=>{
    this.setState({

      first:"second",
      second:"first"
      
  });
  }
  render(){

    return (
      <div className="right">
        <div className={this.state.first+" sinf"}>
          <h2 className="headsignin">SIGNIN</h2>
          <Input
          type="text"
          lable="ENTER EMAIL"
          fn={this.props.user}
          />
            <Input
          type="password"
          lable="ENTER PASSWORD"
          fn={this.props.pass}
          />
      
      <h6 className="forget">Forget password ?</h6>
      <Button
      clas="signinButton"
      click={this.props.clickback}
      >Signin </Button>
      
      
      <div className="social">
      <GitHub className="socigit" style={{ fontSize: 40 }}/>
      <Facebook className="socifac" style={{ fontSize: 40 }} />
      <LinkedIn className="socilink" style={{ fontSize: 40 }} />
      </div>
      
      <div className="create">
      
      <h6>Creat new Account ? </h6>
      
      <Button
      clas="createSignup"
      click={this.firstflicp}
      >Signup </Button>
      
      </div>
      
      </div>

      <Signup 
      flipfun={this.secondflicp}
      flipstate={this.state.second} />
      
      
      
          </div>
      );
  }
}

export default Right;