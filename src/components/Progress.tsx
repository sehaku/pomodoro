import {
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
type Props = {
  minute: number;
  second: number;
  initialSec: number;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progressBottom: {
      color: theme.palette.grey[200],
    },
    progressTop: {
      color: "#aaaaaa",
      position: "absolute",
      left: 0,
    },
  })
);
const Progress: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CircularProgress
        size="50vmin"
        variant="determinate"
        value={100}
        className={classes.progressBottom}
      />
      <CircularProgress
        size="50vmin"
        variant="determinate"
        value={
          100 * (1 - (props.minute * 60 + props.second) / props.initialSec)
        }
        className={classes.progressTop}
      />
    </React.Fragment>
  );
};
export default Progress;
