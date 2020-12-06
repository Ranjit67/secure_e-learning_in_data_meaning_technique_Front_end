import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
 function Avatarround(props) {
  const classes = useStyles();

  return (
    <div className={classes.root+" props.clas"}>
     
      <Avatar alt="Dote learner profile" src={props.image} />
    </div>
  );
}

export default Avatarround;