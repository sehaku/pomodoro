import React, { useEffect, useState } from "react";
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
import { Settings } from "@material-ui/icons";
import Popup from "reactjs-popup";
import Timer from "./Timer";
import UploadButton from "./UploadButton";
import TimeSetter from "./TimeSetter";
import VolumeSlider from "./VolumeSlider";
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
  })
);
const App: React.FC = () => {
  // 時間設定
  const [pomodoroTime, setPomodoroTime] = useState<number>(25);
  const [breakTime, setBreakTime] = useState<number>(5);
  // 設定画面で画面を暗くする
  const [fade, setFade] = useState<boolean>(false);
  // 音楽ファイルの設定
  const defaultMusicUrl = "http://www.ne.jp/asahi/music/myuu/wave/hana.mp3";
  const [pomodoroMusic, setPomodoroMusic] = useState(
    new Audio(defaultMusicUrl)
  );
  const [breakTimeMusic, setBreakTimeMusic] = useState(
    new Audio(defaultMusicUrl)
  );
  const [usrMusic, setUsrMusic] = useState(new Audio(defaultMusicUrl));
  const [usrVolume, setUsrVolume] = useState<number>(100);
  const [volBeforeMute, setVolBeforeMute] = useState<number>(100);
  const [isMute, setIsMute] = useState(false);

  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className="root">
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
            setFade(false);
            if (isNaN(pomodoroTime)) {
              setPomodoroTime(1);
            } else if (isNaN(breakTime)) {
              setBreakTime(1);
            }
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
                    } else if (isNaN(breakTime)) {
                      setBreakTime(1);
                    }
                  }}
                >
                  OK
                </Button>
              </Grid>
            </Grid>
          )}
        </Popup>
        <Timer
          pomodoroTime={pomodoroTime}
          breakTime={breakTime}
          usrMusic={usrMusic}
          pomodoroMusic={pomodoroMusic}
          breakTimeMusic={breakTimeMusic}
          usrVolume={usrVolume}
          onMusicChange={(music) => {
            setUsrMusic(music);
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
