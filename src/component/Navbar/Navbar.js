import React, {Component} from "react";
import "./Navbar.css";
import { Dehaze,House} from '@material-ui/icons';
import Tabbox from "../../resource/Drawer/Tabbox/Tabbox";
import Tabclose from "../../resource/Drawer/Tabclose/Tabclose";
import Avatar from "../../resource/Avatar/Avatar";
import Bcart from "../../resource/Bcart/Bcart";

import Axcious from "../../hoc/Axcious";

class Navbar extends Component{
    state={
        inputBoolean:false,
        homeMenuBoolean:false,
        avatarOverMouse:false,
        fixAvatarModal:false
    }
    inputBooleanHandler = ()=>{
        this.setState({
            inputBoolean: true,
            
        });
    }
    homeMenuHandler = ()=>{
       
            this.setState({
                homeMenuBoolean: !this.state.homeMenuBoolean
            });  
    }

    avatarHandler=()=>{
        this.setState({
            avatarOverMouse: true
        });  
    }
    avatarOuter= ()=>{
       
            this.setState({
                avatarOverMouse: false
            }); 
       
            
  
    }

    coseEvent=()=>{
        this.setState({
            fixAvatarModal: false
        }); 
    }
    clickFixedModal =()=>{
        this.setState({
            fixAvatarModal: !this.state.fixAvatarModal
        }); 
    }
    render(){
        let Dehazetempclassmanager = ["navDhaze"];
       let Housetempclassmanger = ["navHouse"];
       let searcContentadjest=["navbarsearchcont"];
       
            
            if(this.state.homeMenuBoolean){
                Dehazetempclassmanager= [...Dehazetempclassmanager,"navDhazetemp"];
                Housetempclassmanger = [...Housetempclassmanger, "navHousetemp"];
            }

            if(this.state.inputBoolean){
                searcContentadjest = [...searcContentadjest,"tempSearchCont"];
            }

         
        return (
    <Axcious>
    <div className="Navbar">
            
              {this.state.homeMenuBoolean ? 
              <Tabbox 
              clas="navmodal"
              />:null  } 
               {this.state.homeMenuBoolean ? 
              <Tabclose 
              clas="navclose"
              closeEvent={this.homeMenuHandler}
              />:null  } 
                

        <div className="Home">HOME</div>
        <div className="About">ABOUT</div>
        <div className="About">COURSE</div>


                {/* avatar controler only desktop */}
        {(this.state.avatarOverMouse || this.state.fixAvatarModal)? <div
        onMouseOver={this.avatarHandler}
        onClick={this.clickFixedModal}
        ><Tabbox
         
        clas="avatarmodal"
                /></div> : null}

                {/* {this.state.fixAvatarModal ?<Tabclose
                clas="avatarClosemodal"
                closeEvent={this.coseEvent}
                /> : null } */}

        


                <div className="cartAvatar">

                <Bcart 
                    budgeNum={4}
                    clas="cartIco"
                    />
                 
                <div 
                onMouseOver={this.avatarHandler}
                onMouseOut={this.avatarOuter}
                onClick={this.clickFixedModal}
                >
                <Avatar
                clas="navbarAvatar"
                image="https://m.media-amazon.com/images/I/91LlO1g8ArL._SS500_.jpg"
                /></div>
               
                    </div>

       <House className={Housetempclassmanger.join(" ")}
        onClick={this.homeMenuHandler}
        />  

         <Dehaze className={Dehazetempclassmanager.join(" ")}
         onClick={ this.homeMenuHandler}
         />
       
        
        <div className={searcContentadjest.join(" ")}>
            <input
            className="navbarInput"
            onClick={this.inputBooleanHandler}
            placeholder="Search"
            type="text" name="search" />
            
            {this.state.inputBoolean ? <button className="navbarSearch">search</button> : null }
            
            
        </div>
        

        </div>
        </Axcious>
);
}
}
export default Navbar;