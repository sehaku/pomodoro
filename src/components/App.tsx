import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { DoubleArrowTwoTone, Settings } from "@material-ui/icons";
import Popup from "reactjs-popup";
import { db } from "../db";
import { useLiveQuery } from "dexie-react-hooks";
import Timer from "./Timer";
import UploadButton from "./UploadButton";
import TimeSetter from "./TimeSetter";
import VolumeSlider from "./VolumeSlider";
import { convertCompilerOptionsFromJson } from "typescript";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    settingBtn: {
      fontSize: "10vmin",
    },
    fadeBox: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#000",
      opacity: 0.5,
      zIndex: 1,
    },
    resetPomodoro: {
      paddingTop: "10px",
    },
  })
);
const App: React.FC = () => {
  // 時間設定
  // const [pomodoroTime, setPomodoroTime] = useState<number>(0);
  // const [breakTime, setBreakTime] = useState<number>(0);
  const [pomodoroTime, setPomodoroTime] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);
  const [longBreakTime, setLongBreakTime] = useState<number>(25);
  const [longBreakInterval, setLongBreakInterval] = useState<number>(4);
  // 設定画面で画面を暗くする
  const [fade, setFade] = useState<boolean>(false);
  // 音楽ファイルの設定
  const defaultMusicURL = "./alarmBreak.mp3";
  const [pomodoroMusic, setPomodoroMusic] = useState(
    new Audio(defaultMusicURL)
  );
  const [breakTimeMusic, setBreakTimeMusic] = useState(
    new Audio(defaultMusicURL)
  );
  const [usrMusic, setUsrMusic] = useState(new Audio(defaultMusicURL));
  const [usrVolume, setUsrVolume] = useState<number>(100);
  const [volBeforeMute, setVolBeforeMute] = useState<number>(100);
  const [isMute, setIsMute] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState<number>(0);
  const classes = useStyles();
  console.log(pomodoroMusic)
  console.log("Yay")
  // const settings = useLiveQuery(() => db.settings.toArray(), []);
  // console.log(settings);
  const settingCount = useLiveQuery(()=>db.settings.count());
  // console.log(settingCount);
  // console.log(db.settings.where("id").equals(1).toArray());
  const handleClick = () => {
    console.log("click");
    db.transaction("rw", db.settings, ()=>{
    if (settingCount === 0) {
      db.settings.add(
        {
          id: 1,
          usrVolume: usrVolume,
          pomodoroCount: pomodoroCount,
          pomodoroTime: pomodoroTime,
          breakTime: breakTime,
          longBreakTime: longBreakTime,
          longBreakInterval: longBreakInterval,
          pomodoroSrc: pomodoroMusic.src,
          breakTimeSrc: breakTimeMusic.src,
        })
    } else {
      db.settings.update(1,{
        id: 1,
        usrVolume: usrVolume,
        pomodoroCount: pomodoroCount,
        pomodoroTime: pomodoroTime,
        breakTime: breakTime,
        longBreakTime: longBreakTime,
        longBreakInterval: longBreakInterval,
        pomodoroSrc: pomodoroMusic.src,
        breakTimeSrc: breakTimeMusic.src,
      })
      // console.log("Success to update settings.")
    }
    }).then(() => {
      console.log("Success to udpate settings.");
    }).catch((error) => {
      alert("Failed to update settings.");
    })
  };
  useEffect(() => {
    // console.log("effect");
    if (settingCount === 0) {
      // pass
    } else {
      db.transaction('r', db.settings, async () => {
        const set = await db.settings.get({ id: 1 });
        setUsrVolume(() => {
          return set?.usrVolume || usrVolume
        });
        setPomodoroCount(() => {
          return set?.pomodoroCount || pomodoroCount
        });
        setPomodoroTime(() => {
          return set?.pomodoroTime || pomodoroTime
        });
        setBreakTime(() => {
          return set?.breakTime || breakTime
        });
        setLongBreakTime(() => {
          return set?.longBreakTime || longBreakTime
        });
        setLongBreakInterval(() => {
          return set?.longBreakInterval || longBreakInterval
        });
        setPomodoroMusic(() => {
          return new Audio(set?.pomodoroSrc) || pomodoroMusic
        });
        setBreakTimeMusic(() => {
          return new Audio(set?.breakTimeSrc) || breakTimeMusic
        });
        // console.log("effectDone")
      })
    }
  },[]); // componentDidMount
  return (
    <React.Fragment>
      <Container className="root">
        <button onClick={
          handleClick
        }
        >Click</button>
        <Popup
          trigger={
            <IconButton
              style={{
                color: "#eeeeee",
                position: "relative",
                top: 0,
                left: "80%",
              }}
            >
              <Settings className={classes.settingBtn} />
            </IconButton>
          }
          modal
          onOpen={() => {
            setFade(true);
          }}
          onClose={() => {
            if (isNaN(pomodoroTime)) {
              setPomodoroTime(1);
            }
            if (isNaN(breakTime)) {
              setBreakTime(1);
            }
            if (isNaN(longBreakTime)) {
              setLongBreakTime(1);
            }
            if (isNaN(longBreakInterval)) {
              setLongBreakInterval(1);
            }
            setFade(false);
          }}
        >
          {(close: () => void) => (
            <Grid
              style={{
                backgroundColor: "#eeeeee",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Grid container alignItems="center" justify="center">
                <TimeSetter
                  time={pomodoroTime}
                  setTime={setPomodoroTime}
                  label="作業時間(min)"
                />
                <UploadButton
                  onMusicChange={(selectMusic) => {
                    const musicUrl = window.URL.createObjectURL(selectMusic);
                    setPomodoroMusic(new Audio(musicUrl));
                  }}
                />
              </Grid>
              <Grid container alignItems="center" justify="center">
                <TimeSetter
                  time={breakTime}
                  setTime={setBreakTime}
                  label="休憩時間(min)"
                />

                <UploadButton
                  onMusicChange={(selectMusic) => {
                    const musicUrl = window.URL.createObjectURL(selectMusic);
                    setBreakTimeMusic(new Audio(musicUrl));
                  }}
                />
              </Grid>
              <Grid container alignItems="center" justify="flex-start">
                <TimeSetter
                  time={longBreakTime}
                  setTime={setLongBreakTime}
                  label="長めの休憩時間(min)"
                />
              </Grid>
              <Grid container alignItems="center" justify="flex-start">
                <TimeSetter
                  time={longBreakInterval}
                  setTime={setLongBreakInterval}
                  label="長めの休憩頻度"
                />
              </Grid>
              <VolumeSlider
                volume={usrVolume}
                setUsrVolume={setUsrVolume}
                volBeforeMute={volBeforeMute}
                setVolBeforeMute={setVolBeforeMute}
                isMute={isMute}
                setIsMute={setIsMute}
              />
              <Grid container alignItems="center" justify="center">
                <Button
                  variant="outlined"
                  onClick={() => {
                    setFade(false);
                    close();
                    if (isNaN(pomodoroTime)) {
                      setPomodoroTime(1);
                    }
                    if (isNaN(breakTime)) {
                      setBreakTime(1);
                    }
                    if (isNaN(longBreakTime)) {
                      setLongBreakTime(1);
                    }
                    if (isNaN(longBreakInterval)) {
                      setLongBreakInterval(1);
                    }
                  }}
                >
                  OK
                </Button>
              </Grid>
              <Grid
                container
                alignItems="center"
                justify="center"
                className={classes.resetPomodoro}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    setFade(false);
                    close();
                    setPomodoroCount(0);
                  }}
                >
                  Reset Pomodoro Count
                </Button>
              </Grid>
            </Grid>
          )}
        </Popup>
        <Timer
          pomodoroTime={pomodoroTime}
          breakTime={breakTime}
          longBreakTime={longBreakTime}
          longBreakInterval={longBreakInterval}
          usrMusic={usrMusic}
          pomodoroMusic={pomodoroMusic}
          breakTimeMusic={breakTimeMusic}
          usrVolume={usrVolume}
          onMusicChange={(music) => {
            setUsrMusic(music);
          }}
          pomodoroCount={pomodoroCount}
          onPomodoroCountChange={(cnt) => {
            setPomodoroCount(cnt + 1);
          }}
        />
      </Container>
      <Box
        className={classes.fadeBox}
        style={{ visibility: fade ? "visible" : "hidden" }}
      ></Box>
    </React.Fragment>
  );
};

export default App;
