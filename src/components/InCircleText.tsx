import {
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
type Props = {
  isPlay: boolean;
  isPomodoro: boolean;
  minute: number;
  second: number;
};

const useStyles = makeStyles({
  in_circle: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
});
const InCircleText: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.in_circle}>
      <Typography component="div" color="textSecondary">
        <Grid container justify="center">
          <Typography style={{ fontSize: "5vmin", color: "#eeeeee" }}>
            {props.isPlay ? (props.isPomodoro ? "作業中" : "休憩中") : "停止中"}
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Typography style={{ fontSize: "5vmin", color: "#eeeeee" }}>
            {props.minute}:
            {Math.floor(props.second / 10) === 0
              ? "0" + props.second
              : props.second}
          </Typography>
        </Grid>
      </Typography>
    </Box>
  );
};

export default InCircleText;
