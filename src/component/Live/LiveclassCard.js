import { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
// import COLORS from "../config/COLORS";
import { useHistory } from "react-router";
// import { database } from "../config";

const useStyles = makeStyles((theme) => ({
  cardaction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  attendClass: {
    backgroundColor: "blue",
  },
}));
function LiveClassCard(props) {
  const history = useHistory();
  const classes = useStyles();
  const [mentorName, setMentorName] = useState("");
  useEffect(() => {
    // database
    //   .ref(`Users/${props.mentorUuid}/displayName`)
    //   .on("value", (snap) => {
    //     setMentorName(snap.val());
    //   });
  }, [props.mentorUuid]);
  return (
    <Card elevation={5}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" align="center" component="h2">
            {props.subjectName}
          </Typography>
          <Typography gutterBottom variant="h5" align="center" component="h2">
            {/* {mentorName} */}
          </Typography>
          <Typography gutterBottom variant="h6" align="center" component="h2">
            {` ${props.timeStamp.date} ${props.timeStamp.month} ${props.timeStamp.year} ${props.timeStamp.hr}. ${props.timeStamp.min} `}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes={{ root: classes.cardaction }}>
        <Button
          classes={{ root: classes.attendClass }}
          onClick={() => {
            history.push(
              `/classesDetails/${props.mentorUuid}/${props.mentorId}`
            );
          }}
          // onClick={() => props.attendClass(props.mentorId)}
        >
          Attend class
        </Button>
      </CardActions>
    </Card>
  );
}
export default LiveClassCard;
