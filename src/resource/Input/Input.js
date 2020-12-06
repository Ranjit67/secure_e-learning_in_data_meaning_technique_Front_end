
import {
  createStyles,

  Theme,
 
  withStyles,
  makeStyles,
 
} from '@material-ui/core/styles';


import TextField from '@material-ui/core/TextField';



const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);







const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    margin: {
      margin: theme.spacing(1),
      width:"70%"
    },
    cssLabel:{
      borderColor:"white",
      color:"#6D214F",
      fontStyle: "italic",
     
    },
    cssFocused:{
      color: "green !important",
      textAlign:"center !important"
    },
    cssOutlinedInput:{
      "&$cssFocused $notchedOutline": {
        borderColor: "#6D214F !important",
       
      }
    },
    notchedOutline:{
      borderWidth: "1px",
      borderColor: "rgb(50, 168, 82) !important",
      textAlign:"center !important"
    }
  }),
)





 function Input(props) {
 
  const classes = useStyles();

  return (
      <CssTextField
        className={classes.margin}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          }
        }}
        label={props.lable}
        variant="outlined"
        id="custom-css-outlined-input"
        type={props.type}
        name={props.name}
        onChange={(e)=>(props.fn(e))}
      />
  

  );
}
export default Input;