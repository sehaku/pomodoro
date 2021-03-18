// TODO Separate files (per Components)
import React, { useEffect, useState } from "react";
import {
  Restore,
  PauseCircleOutline,
  PlayCircleOutline,
} from "@material-ui/icons";
import {
  Box,
  CircularProgress,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import useInterval from "use-interval";
type Props = {
  pomodoroTime: number;
  breakTime: number;
  longBreakTime: number;
  longBreakInterval: number;
  pomodoroMusic: HTMLAudioElement;
  breakTimeMusic: HTMLAudioElement;
  usrMusic: HTMLAudioElement;
  usrVolume: number;
  onMusicChange: (music: HTMLAudioElement) => void;
  pomodoroCount: number;
  onPomodoroCountChange: (num: number) => void;
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
  })
);
const Timer: React.FC<Props> = (props) => {
  const musicLenLimit = 10;
  const [isPomodoro, setIsPomodoro] = useState<boolean>(true);
  const [isFirstPlay, setIsFirstPlay] = useState<boolean>(true);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  // const [second, setSecond] = useState<number>(10);
  // const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(props.pomodoroTime);
  const [initialSec, setInitialSec] = useState<number>(minute * 60 + second);
  const [musicStart, setMusicStart] = useState<boolean>(false);
  useEffect(() => {
    let time = isPomodoro ? props.pomodoroTime : props.breakTime;
    if (!isPomodoro && props.pomodoroCount % props.longBreakInterval === 0) {
      time = props.longBreakTime;
    }
    setSecond(0);
    setMinute(time);
    setInitialSec(time * 60);
  }, [isPomodoro]);
  useEffect(() => {
    if (isFirstPlay) {
      setMinute(props.pomodoroTime);
      setInitialSec(props.pomodoroTime * 60);
    }
  }, [props.breakTime, props.longBreakTime, props.pomodoroTime]);
  useEffect(() => {
    toggleBreakTime();
  }, [props.pomodoroCount]);
  useEffect(() => {
    props.usrMusic.volume = props.usrVolume / 100;
  }, [props.usrMusic, props.usrVolume]);
  useEffect(() => {
    if (!musicStart) {
      props.onMusicChange(
        isPomodoro ? props.pomodoroMusic : props.breakTimeMusic
      );
    }
  }, [props.pomodoroMusic, props.breakTimeMusic, isPomodoro, musicStart]);
  useInterval(
    () => {
      props.usrMusic.pause();
      props.usrMusic.currentTime = 0;
      setMusicStart(!musicStart);
      props.onMusicChange(
        isPomodoro ? props.pomodoroMusic : props.breakTimeMusic
      );
    },
    musicStart ? musicLenLimit * 1000 : null
  );
  const toggleBreakTime = () => {
    // console.log(props.pomodoroCount, props.longBreakInterval);
    console.log("toggle");
    if (
      props.pomodoroCount !== 0 &&
      props.pomodoroCount % props.longBreakInterval === 0
    ) {
      setMinute(props.longBreakTime);
      setInitialSec(props.longBreakTime * 60);
    } else if (!isFirstPlay) {
      setMinute(props.breakTime);
      setInitialSec(props.breakTime * 60);
    }
  };
  useInterval(
    () => {
      if (second <= 0) {
        if (minute === 0) {
          if (isPomodoro) {
            props.onPomodoroCountChange(props.pomodoroCount);
          } else {
            setMinute(props.pomodoroTime);
            setInitialSec(props.pomodoroTime * 60);
          }
          setMusicStart(!musicStart);
          props.usrMusic.volume = props.usrVolume / 100;
          props.usrMusic.play();
          setIsPomodoro(!isPomodoro);
          setSecond(0);
        } else {
          setMinute((prev) => prev - 1);
          setSecond(59);
        }
      } else {
        setSecond((prev) => prev - 1);
      }
    },
    isPlay ? 1000 : null
  );
  const resetTimer = () => {
    setIsPlay(false);
    setIsFirstPlay(true);
    setMinute(props.pomodoroTime);
    setSecond(0);
    setIsPomodoro(true);
    setInitialSec(props.pomodoroTime * 60);
    // props.onPomodoroCountChange(0);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ marginBottom: "20px" }}
      >
        <Box position="relative" display="inline-flex">
          <CircularProgress
            size="50vmin"
            variant="determinate"
            value={100}
            className={classes.progressBottom}
          />
          <CircularProgress
            size="50vmin"
            variant="determinate"
            value={100 * (1 - (minute * 60 + second) / initialSec)}
            className={classes.progressTop}
          />
          <Box className={classes.in_circle}>
            <Typography component="div" color="textSecondary">
              <Typography style={{ fontSize: "5vmin", color: "#eeeeee" }}>
                {isPlay ? (isPomodoro ? "作業中" : "休憩中") : "停止中"}
              </Typography>
              <Grid container justify="center" className="timer">
                <Typography style={{ fontSize: "5vmin", color: "#eeeeee" }}>
                  {minute}:
                  {Math.floor(second / 10) === 0 ? "0" + second : second}
                </Typography>
              </Grid>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <PlayCircleOutline
          onClick={() => {
            setIsPlay(true);
            if (isFirstPlay) {
              setInitialSec(minute * 60 + second);
            }
          }}
          style={{
            color: "#eeeeee",
            fontSize: "20vmin",
            display: isPlay ? "none" : "",
          }}
        />
        <PauseCircleOutline
          onClick={() => {
            setIsPlay(false);
            setIsFirstPlay(false);
          }}
          style={{
            color: "#eeeeee",
            fontSize: "20vmin",
            display: isPlay ? "" : "none",
          }}
        />
        <Restore
          onClick={resetTimer}
          style={{
            color: "#eeeeee",
            fontSize: "20vmin",
          }}
        />
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Typography style={{ fontSize: "3vmin", color: "#eeeeee" }}>
          Pomomodo Count : {props.pomodoroCount}
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Timer;
