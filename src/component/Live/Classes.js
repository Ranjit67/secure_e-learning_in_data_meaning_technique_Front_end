import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
import LiveClassCard from "./LiveclassCard";

const useStyles = makeStyles((theme) => ({
  cardCont: {
    marginTop: "100px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(19rem,1fr))",
    gridGap: "1rem",
  },
}));
const LiveClasses = () => {
  const classes = useStyles();
  const [liveClass, setLiveClass] = useState([]); //json have mentorId, subjectname
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("https://videotaliap.herokuapp.com/");
    socketRef.current.emit("First browse this page", "first");
    socketRef.current.on("send class already exit", (payload) => {
      let roomTemp = [];
      //   console.log(payload);
      Object.keys(payload.roomToName).forEach((key, index) => {
        const arrange = {
          mentorId: payload.roomToId[key],
          subjectName: Object.values(payload.roomToName)[index],
          mentorUuid: key,
          timeStamp: payload.mentorStart[key],
        };
        roomTemp = [...roomTemp, arrange];
      });

      setLiveClass(roomTemp);
    });
    socketRef.current.on("new mentor comme", (payload) => {
      console.log(payload);
      const { id, subjectName, mentorUuid, timeStamp } = payload;
      const mentorClass = {
        mentorId: id,
        subjectName,
        mentorUuid,
        timeStamp,
      };
      setLiveClass((prev) => [mentorClass, ...prev]);
    });

    socketRef.current.on("host take leave", (payload) => {
      // console.log("host leave");
      const liveOnMentor = liveClass.filter(
        (mentor) => mentor.mentorId !== payload.id
      );

      setLiveClass(liveOnMentor);
    });
  }, []);

  return (
    <div>
      <Container>
        <div className={classes.cardCont}>
          {console.log(liveClass)}
          {liveClass.map((key, index) => (
            <LiveClassCard
              key={key.mentorId}
              mentorId={key.mentorId}
              subjectName={key.subjectName}
              mentorUuid={key.mentorUuid}
              timeStamp={key.timeStamp}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LiveClasses;
