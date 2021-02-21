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
  pomodoroMusic: HTMLAudioElement;
  breakTimeMusic: HTMLAudioElement;
  usrMusic: HTMLAudioElement;
  usrVolume: number;
  onMusicChange: (music: HTMLAudioElement) => void;
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
  const [second, setSecond] = useState<number>(0);
  const [minute, setMinute] = useState<number>(props.pomodoroTime);
  const [initialSec, setInitialSec] = useState<number>(minute * 60 + second);

  const [musicStart, setMusicStart] = useState<boolean>(false);

  useEffect(() => {
    if (!musicStart) {
      props.onMusicChange(
        isPomodoro ? props.pomodoroMusic : props.breakTimeMusic
      );
    }
    if (!isPlay) {
      let time = isPomodoro ? props.pomodoroTime : props.breakTime;
      setSecond(0);
      setMinute(time);
      setInitialSec(time * 60);
    }
    props.usrMusic.volume = props.usrVolume / 100;
  }, [props.usrVolume, props.pomodoroMusic, props.breakTimeMusic, isPomodoro, musicStart, isPlay, props]);
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
  useInterval(
    () => {
      if (second <= 0) {
        if (minute === 0) {
          if (isPomodoro) {
            setMinute(props.breakTime);
            setInitialSec(props.breakTime * 60);
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
                {isPomodoro ? "作業中" : "休憩中"}
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
    </React.Fragment>
  );
};

export default Timer;
