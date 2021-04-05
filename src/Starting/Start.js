import React from "react";
import "./Start.css";
import Vcard from "../assert/myweb_pahaoe.mp4";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const Start = () => {
  const history = useHistory();
  const classes = useStyles();
  const vcard =
    "https://res.cloudinary.com/dnrnwqpel/video/upload/v1606651392/learning/myweb_pahaoe.mp4";

  return (
    <div className="v">
      <video autoPlay muted loop className="vcard">
        <source src={Vcard} type="video/mp4" />
        <source src={Vcard} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.root + " back"}>
        <Grid container spacing={1} className="grid">
          <Grid item xs={1} />
          <Grid item xs={8} className="leftgrid">
            <p className="heading">
              {" "}
              <span className="learning"> Learning </span>
              <span className="good">is good</span>
              <span className="practice"> practice</span>
            </p>
          </Grid>
          <Grid item xs={1} />

          <Grid item xs={2} className="rightgrid">
            <button className="start" onClick={() => history.push("/signin")}>
              START
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default React.memo(Start);
