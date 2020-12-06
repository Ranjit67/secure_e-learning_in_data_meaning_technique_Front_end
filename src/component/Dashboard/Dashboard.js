import React, {Component} from "react";
import Button from '../../resource/Button/Button';
import Thumbnailbox from "../../resource/Thumbnailbox/Thumbnailbox";
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { Grid,Box,Paper} from "@material-ui/core";
import  "./Dashboard.css";

class Dashboard extends Component{

    state={
        inputboolean:false,
        id:""
    }

    animationHandler=()=>{
        this.setState({inputboolean:true});
    }

    classAdd=(id)=>{
        console.log("add class "+id);
        this.setState({id:id});

    }
    classRemove=(id)=>{
        console.log("remove class "+id);
        this.setState({id:""});
    }

    render(){
        // temporary class management
        let inputclas=["searchInput"];
        let innboxclas= ["inn"];
        let buttontempclas= ["searchButton"]
        if(this.state.inputboolean){
            inputclas= ["tempinputclas",...inputclas];
            innboxclas =["tempinnboxclas",...innboxclas];
            buttontempclas= ["tempButtonclas",...buttontempclas]
        }
        return(
            <div className="dasboarduperdiv">
               
          <div className="searchcont">
              <div className={innboxclas.join(" ")}>
                  {this.state.inputboolean ? <Button clas={buttontempclas.join(" ")}> SEARCH</Button> : null }
              
            <input type="text" placeholder="Search"  className={inputclas.join(" ")}
            onClick={this.animationHandler}
            />

            
              </div>
              </div>


             <div className="thomeouter">
                 
            {["he","ft","er","rt","yt","ghdg","ghdghdsf","he","ft","er","rt","yt","ghdg","ghdghdsf","he","ft","er","rt","yt","ghdg","ghdghdsf","he","ft","er","rt","yt","ghdg","ghdghdsf","he","ft","er","rt","yt","ghdg","ghdghdsf"
            ,"ghdg","ghdghdsf","he","ft","er","rt","yt","ghdg","ghdg","ghdghdsf","he","ft","er","rt","yt","ghdg"]
            .map((e,index)=>{
                return <Thumbnailbox key={index} in={e}
                
               over={this.classAdd}
               remove={this.classRemove}
                id={index}
                stateId={this.state.id}
                />
            })}
                

             </div>
            





               </div>
        )
    }
}
export default Dashboard;