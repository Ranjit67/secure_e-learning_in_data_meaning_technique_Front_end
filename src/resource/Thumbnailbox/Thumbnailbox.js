import React from "react";
import "./Thumbnailbox.css";


const Thumbnailbox=(props)=>{

 let manageclassThomnel=null;
let manageClassContent= null;
let imageContClas=null;
 if(props.stateId===props.id){
    manageclassThomnel="tempMouseOver"
    manageClassContent="contDisplay"
    imageContClas="imageContChange"
 }
    console.log(props.id+" "+manageclassThomnel);
    
    return (
    <div 
    className={"thomnel "+ manageclassThomnel}  key={props.key}
    onMouseOver={()=>props.over(props.id)}

       onMouseOut={()=>props.remove(props.id)}
    >
        
        <div className= {imageContClas+ " thomnelImage"} >
        {props.in}
            </div>

            <div className={"thamnailCont "+manageClassContent} >
                <p>Props.cont</p>
                </div>
        
         </div>

    

    

  
)}
export default Thumbnailbox;