import { makeStyles } from "@material-ui/core";
import React from "react";
import "./Thumbnailbox.css";
const useStyles = makeStyles((theme) => ({
  imagerTag: {
    width: "100%",
    height: "100%",
  },
  courseNameDiv: {
    color: "white",
    position: "absolute",
    width: "100%",
    background:
      "linear-gradient(to right, rgba(6, 190, 182,0.7), rgba(72, 177, 191,0.5))",
    height: "40px",
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const Thumbnailbox = (props) => {
  let manageclassThomnel = null;
  let manageClassContent = null;
  let imageContClas = null;
  if (props.stateId === props.id) {
    manageclassThomnel = "tempMouseOver";
    manageClassContent = "contDisplay";
    imageContClas = "imageContChange";
  }
  //  console.log(props.id+" "+manageclassThomnel);
  const classes = useStyles();
  return (
    <div
      className={"thomnel " + manageclassThomnel}
      key={props.key}
      onMouseOver={() => props.over(props.id)}
      onMouseOut={() => props.remove(props.id)}
    >
      <div className={imageContClas + " thomnelImage"}>
        <img
          src={props.course.thumbnail}
          className={classes.imagerTag}
          alt=""
        />
        <div className={classes.courseNameDiv}>{props.course.title}</div>
        {/* {props.in} */}
      </div>

      <div className={"thamnailCont " + manageClassContent}>
        <div className="nameCourse">
          <p>Props.course.name</p>
          <p>Props.course.namedhfgdshgdhgfsdhg</p>
        </div>

        <div className="price">
          <p>price:12000</p>
        </div>
      </div>
    </div>
  );
};
export default Thumbnailbox;
