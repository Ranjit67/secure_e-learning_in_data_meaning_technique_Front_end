import "./Tabbox.css";

const Tabbox = (props) =>(
   
   
    <div className={props.clas+ " model"}>
        <div className ="boxElement">  <p>Profile</p> </div>
        <div className ="boxElement">  <p>My Course</p> </div>
        <div className ="boxElement">  <p>My Cart</p> </div>
        {/* <div className ="boxElement">  <p>Setting</p> </div> */}
        <div className ="boxElement">  <p>About</p> </div>
        
       
        
   
</div>




)
export default Tabbox;