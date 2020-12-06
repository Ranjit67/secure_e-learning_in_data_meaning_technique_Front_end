import "./Button.css";
const Button=(props)=>(
    <button className={props.clas+" each"} onClick={props.click}>{props.children} </button>
);
export default Button;