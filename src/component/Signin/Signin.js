
import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid,Paper} from "@material-ui/core";
import Logo from "./Logo/Logo";
import Right from "./Right/Right";
import "./Signin.css";



const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
    top:"0"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    
    width:"100%",
   top:"5.7%",
   position:"relative",
   [theme.breakpoints.down('lg')]: {
    height:"700px",
  },
  [theme.breakpoints.down('md')]: {
    height:"600px",
  },
 
  
  [theme.breakpoints.between('md','sm')]: {
    height:"300px",
  },

   
  },
})
);



const Signin =(props)=>{
  const classes = useStyles();

  return(
<div className="Signin">


<div className={classes.root}>
<Grid container spacing={0}>
      <Grid item lg={6} sm={12} md={12} xs={12}>
      <Paper className={classes.paper}>
          <div className="left">
          <Logo />

          </div>
           
            </Paper>
      </Grid>
      <Grid item lg={6} sm={12} md={12} xs={12}>
      <Paper className={classes.paper}>

        <Right 
        user={props.emailHandler}
        pass={props.passwordHandler}
        clickback={props.clickHandler}
        />  

            </Paper>
      </Grid>
</Grid>
</div>
</div>
    );
  }

  

export default Signin;