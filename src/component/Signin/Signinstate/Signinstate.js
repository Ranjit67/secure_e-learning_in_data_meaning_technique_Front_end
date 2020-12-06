import {Component} from "react";
import Signin from "../Signin";
import Context from "../../../Context/Context";

class Signinstate extends Component{
    state={
        username:"",
        password:"",
        signup:
         { 
           entername:"",
          enteremail:"",
          enterpassword:"",
          reenterpassword:""
         }
        
      }
      signupStateHandler=(event)=>{
        const {name,value}=event.target;
    if(name === "entername"){
        this.setState({
            signup:{
             entername: value,
             enteremail: this.state.signup.enteremail,
          enterpassword: this.state.signup.enterpassword,
          reenterpassword: this.state.signup.reenterpassword
            }   
          });
        }
         else if(name === "enteremail"){
            this.setState({
              signup:{
                entername: this.state.signup.entername ,
             enteremail:value,
          enterpassword: this.state.signup.enterpassword,
          reenterpassword: this.state.signup.reenterpassword
              }   
            });
          }

          else if(name === "enterpassword"){
            this.setState({
              signup:{
                entername: this.state.signup.entername,
             enteremail: this.state.signup.enteremail,
          enterpassword:value,
          reenterpassword: this.state.signup.reenterpassword
              }   
            });
          }

          else if(name === "reenterpassword"){
            this.setState({
              signup:{
                entername: this.state.signup.entername,
                enteremail: this.state.signup.enteremail,
             enterpassword: this.state.signup.enterpassword,
             reenterpassword: value
              }   
            });
          }
     
       
      }
      signupHandel=()=>{
        console.log(this.state.signup);
      }

      emailHandler=(event)=>{
       
        this.setState({
          username:event.target.value
        });
      }
      passwordHandler= (event)=>{
        
        this.setState({
          password:event.target.value
        })}
        clickHandler=()=>{
          alert(this.state.username+" "+this.state.password);
        }
    render(){
        return(
<div>
  <Context.Provider value={{
    change : this.signupStateHandler,
    click : this.signupHandel
  }}>
            <Signin
            emailHandler={this.emailHandler}
            passwordHandler={this.passwordHandler}
            clickHandler={this.clickHandler}
            />
            </Context.Provider>
            </div>
        )
    }
}
export default Signinstate;