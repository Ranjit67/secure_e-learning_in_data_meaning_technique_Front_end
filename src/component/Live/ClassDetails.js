import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import io from "socket.io-client";
import Peer from "simple-peer";
import PeerVideo from "./PeerVideo";
import { makeStyles, Button, Grid, Divider, Avatar } from "@material-ui/core";
// import { COLORS } from "../config";
// import { useAuth } from "../config/AuthContext";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 100,
  },
  leaveMeetingBtn: {
    backgroundColor: "#ff7675",

    margin: 10,
    transition: "1s",

    "&:hover": {
      backgroundColor: "#ff7675",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
      width: 103,
    },
  },
  leftSideDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  subjectDetailsDiv: {
    width: "90%",
    fontFamily: "sans-serif",
    marginBottom: "20px",
    "& h3": {
      marginBottom: 10,
    },
  },
  dividerCs: {
    marginTop: 10,
    backgroundColor: "gray",
  },
  avatarAndMentor: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    marginBottom: 10,
    fontFamily: "sans-serif",
    "& h3": {
      marginLeft: 10,
    },
  },
  mentorTimeStamp: {
    color: "gray",
  },
}));
const LiveClassesDetails = () => {
  const history = useHistory();
  const { id, id2 } = useParams();
  const [mentorPeer, setMentorPeer] = useState("");
  const socketRef = useRef();
  // const [mentorId, setMentorId] = useState("");
  const [mentor, setMentor] = useState({});

  const [subjectName, setSubjectName] = useState("");
  const [mentorScreenPeer, setMentorScreenPeer] = useState({});
  const [mentorStartDate, setMentorStartDate] = useState({});
  const [muteOption, setMuteOption] = useState(true);
  const [mentorCamera, setMentorCamera] = useState(true);
  const [endStreamMessage, setEndStreamMessage] = useState("");

  //   const { currentUser } = useAuth();
  useEffect(() => {
    // if (currentUser.uid) {
    window.onbeforeunload = function () {
      return alert("data lose");
    };
    //http://localhost:4000/
    //https://videotaliap.herokuapp.com/
    socketRef.current = io.connect("https://videotaliap.herokuapp.com/");
    // console.log(currentUser.uid);
    socketRef.current.emit("student want to connect", {
      mentorUuid: id,
      studentUuid: cookies.get("sI_L"),
      staticId: id2,
    });
    socketRef.current.on("mentor send to student", (payload) => {
      const {
        mentorFrontId,
        mentorSignal,
        subjectName,
        timeStamp,
        muteStatus,
        videoStatus,
        data,
      } = payload;
      // console.log(payload);
      setMentorCamera(videoStatus);
      setMuteOption(muteStatus);
      // setMentorId(mentorUuid);
      setSubjectName(subjectName);
      setMentorStartDate(timeStamp);

      const peer = addPeer(mentorSignal, mentorFrontId, data);

      if (!data) {
        setMentorPeer({
          mentorId: mentorFrontId,
          peer,
        });
        setMentorScreenPeer({});
      } else {
        console.log(data);
        setMentorScreenPeer({
          mentorId: mentorFrontId,
          peer,
        });
      }
    });
    // for share screen side
    socketRef.current.on("for add peer for student side", (payload) => {
      console.log(payload);
    });

    socketRef.current.on("connected host leave", (data) => {
      console.log("connection leave..");

      setMentorPeer("");
      console.log("message");
      // setEndStreamMessage("End the Stream");
      history.push("/classes");
    });
    socketRef.current.on("mute signal", (payload) => {
      setMuteOption(payload.mute);
    });
    socketRef.current.on("video signal", (payload) => {
      console.log(payload.cameraStatus);
      setMentorCamera(payload.cameraStatus);
    });
    // }
  }, [cookies.get("sI_L"), history, id, id2, endStreamMessage]);

  function addPeer(incomingSignal, mentorFrontId, data) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
    });

    peer.on("signal", (signal) => {
      socketRef.current.emit("returning signal", {
        signal,
        mentorFrontId,
        data,
      });
    });

    peer.signal(incomingSignal);

    return peer;
  }
  const classes = useStyles();
  const leaveMeeting = () => {
    setMentorPeer("");
    setEndStreamMessage("");
    socketRef.current.emit("student leave the meeting", {
      studentId: cookies.get("sI_L"),
      mentorUuid: id,
    });
    history.push("/classes");
  };

  return (
    <Grid container>
      <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
        <div className={classes.root}>
          {mentorPeer && (
            <PeerVideo
              peer={mentorPeer.peer}
              muteStatus={muteOption}
              mentorCamera={mentorCamera}
              mentorProfileImage={mentor.photoURL}
              screenSharePeer={mentorScreenPeer.peer}
              message={endStreamMessage}
            />
          )}

          {mentorPeer && (
            <Button className={classes.leaveMeetingBtn} onClick={leaveMeeting}>
              Leave meeting
            </Button>
          )}

          {subjectName && (
            <div className={classes.subjectDetailsDiv}>
              <h3>{subjectName}</h3>
              {mentorStartDate && (
                <h5 className={classes.mentorTimeStamp}>
                  {` ${mentorStartDate.date} ${mentorStartDate.month} ${mentorStartDate.year} ${mentorStartDate.hr}. ${mentorStartDate.min} `}
                </h5>
              )}
              <Divider classes={{ root: classes.dividerCs }} />
            </div>
          )}
          {mentor.displayName && (
            <div className={classes.avatarAndMentor}>
              <Avatar
                alt=""
                src={mentor.photoURL}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
              <h3>{mentor.displayName}</h3>
            </div>
          )}
        </div>
      </Grid>
      <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
        <div className={classes.leftSideDiv}>name print div</div>
      </Grid>
    </Grid>
  );
};

export default LiveClassesDetails;
