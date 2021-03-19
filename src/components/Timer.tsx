import React, { useEffect, useState } from "react";
import {
  Restore,
  PauseCircleOutline,
  PlayCircleOutline,
} from "@material-ui/icons";
import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import useInterval from "use-interval";
import InCircleText from "./InCircleText";
import Progress from "./Progress";
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
  }, [props.pomodoroTime]);
  useEffect(() => {
    toggleBreakTime();
  }, [props.pomodoroCount]);
  useEffect(() => {
    props.usrMusic.volume = props.usrVolume / 100;
  }, [props.usrMusic, props.usrVolume]);
  // useEffect(() => {
  //   if (!musicStart) {
  //     props.onMusicChange(
  //       isPomodoro ? props.pomodoroMusic : props.breakTimeMusic
  //     );
  //   }
  // }, [props.pomodoroMusic, props.breakTimeMusic, isPomodoro, musicStart]);
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

  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ marginBottom: "20px" }}
      >
        <Box position="relative" display="inline-flex">
          <Progress minute={minute} second={second} initialSec={initialSec} />
          <InCircleText
            isPlay={isPlay}
            isPomodoro={isPomodoro}
            minute={minute}
            second={second}
          />
        </Box>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <PlayCircleOutline
          onClick={() => {
            setIsPlay(true);
            if (isFirstPlay) {
              setInitialSec(minute * 60 + second);
            }
            setIsFirstPlay(false);
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
          Pomodoro Count : {props.pomodoroCount}
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Timer;
