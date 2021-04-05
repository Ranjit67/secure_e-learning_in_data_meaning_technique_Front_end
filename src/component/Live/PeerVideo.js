import { makeStyles, Paper, Avatar } from "@material-ui/core";
import { useRef, useEffect } from "react";
import { Fullscreen, FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    position: "relative ",
  },
  videoContDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
    position: "relative ",
    "& video": {
      "&::-webkit-media-controls": {
        display: "none",
      },
    },
  },
  peerVideoTag: {
    width: "100%",
    height: "calc(.5625*80vw)",
    // marginBottom: 40,
    objectFit: "cover",
  },
  peerVideoHidden: {
    height: 0,
    width: 0,
  },
  afterVideoOff: {
    width: "90%",
    height: "calc(.5625*80vw)",
    // marginBottom: 40,
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  smallVideo: {
    position: "absolute",
    left: 10,
    bottom: 0,
    [theme.breakpoints.down("sm")]: {
      width: "20%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "20%",
      // height: "30%",
    },
  },
  smallVideoOn: {
    width: "100%",
  },
  zoomIcon: {
    color: "white",
    position: "absolute",
    right: 20,
    bottom: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  video: {},
}));
export default function PeerVideo(props) {
  const peerRef = useRef();
  const screenShareRef = useRef();
  const smallPeerRef = useRef();

  useEffect(() => {
    // props.peer.destroy();

    props.peer.on("stream", (stream) => {
      peerRef.current.srcObject = stream;
      smallPeerRef.current.srcObject = stream;

      console.log(stream);
    });
    if (props.screenSharePeer) {
      props.screenSharePeer.on("stream", (stream) => {
        screenShareRef.current.srcObject = stream;

        console.log(stream);
      });
    }
  }, [props.peer, props.screenSharePeer, props.message]);
  //   const destroy = () => {
  //     props.peer.destroy();
  //   };  context api

  const fullScreen = () => {
    const mentor = peerRef.current;
    const share = screenShareRef.current;
    if (props.screenSharePeer) {
      share.requestFullscreen();
    } else {
      mentor.requestFullscreen();
    }
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.videoContDiv}>
        <video
          playsInline
          autoPlay
          // controls
          // controlsList="foobar"
          // className={classes.peerVideoTag}

          className={
            props.mentorCamera && !props.screenSharePeer
              ? classes.peerVideoTag
              : classes.peerVideoHidden
          }
          muted={!props.muteStatus}
          ref={peerRef}
        />
        {props.screenSharePeer && (
          <video
            playsInline
            autoPlay
            // className={classes.peerVideoTag}
            className={
              props.mentorCamera
                ? classes.peerVideoTag
                : classes.peerVideoHidden
            }
            muted={!props.muteStatus}
            ref={screenShareRef}
          />
        )}
        {/* it display only Screen share time */}

        <div className={classes.smallVideo}>
          <video
            playsInline
            autoPlay
            // className={classes.peerVideoTag}

            className={
              props.screenSharePeer
                ? classes.smallVideoOn
                : classes.peerVideoHidden
            }
            muted={!props.muteStatus}
            ref={smallPeerRef}
          />
        </div>

        <Fullscreen onClick={fullScreen} className={classes.zoomIcon} />
      </div>

      {!props.mentorCamera && (
        <Paper elevation={3} className={classes.afterVideoOff}>
          <Avatar
            style={{
              width: 200,
              height: 200,
            }}
            src={props.mentorProfileImage}
            alt=" "
          />
        </Paper>
      )}
      {props.message && (
        <Paper elevation={3} className={classes.afterVideoOff}>
          <Avatar
            style={{
              width: 200,
              height: 200,
            }}
            src={props.mentorProfileImage}
            alt=" "
          />
          <h3>{props.message}</h3>
        </Paper>
      )}
    </div>
  );
}
