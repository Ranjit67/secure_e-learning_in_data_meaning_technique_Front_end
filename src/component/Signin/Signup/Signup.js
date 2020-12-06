import React, {useContext} from "react";
import Input from "../../../resource/Input/Input";
import Button from "../../../resource/Button/Button";
import Context from "../../../Context/Context";

const Signup = (props)=>{
  const auth = useContext(Context);
  return (
<div className={props.flipstate+" fup"}>

<h2 className="headsignin">SIGNUP</h2>
    <Input
    type="text"
    lable="ENTER NAME"
    name="entername"
    fn={auth.change}
    />
      <Input
    type="text"
    lable="ENTER EMAIL"
    name="enteremail"
    fn={auth.change}
    />
   <Input
    type="password"
    lable="ENTER PASSWORD"
    name="enterpassword"
    fn={auth.change}
    />
      <Input
    type="password"
    lable="RE-ENTER PASSWORD"
    name="reenterpassword"
    fn={auth.change}
    />
<Button
clas="signinButton"
click={auth.click}
>Signup </Button>

<div className="create">

<h6>Already have an Account </h6>

<Button
clas="createSignup"
click={props.flipfun}
>Signin </Button>

</div>
</div>
);}
export default Signup;