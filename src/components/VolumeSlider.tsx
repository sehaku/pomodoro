import { Button, Grid, Slider, Typography } from "@material-ui/core";
import { VolumeOff, VolumeUp } from "@material-ui/icons";
import React, { useState } from "react";
type Props = {
  volume: number;
  setUsrVolume: (volume: number) => void;
};
const VolumeSlider: React.FC<Props> = (props) => {
  const [isMute, setIsMute] = useState(false);
  const [volBeforeMute, setVolBeforeMute] = useState(props.volume);
//   useEffect(() => {
//     console.log(isMute);
//   }, [isMute]);
  return (
    <React.Fragment>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Button
          onClick={(event) => {
            setVolBeforeMute(props.volume);
            props.setUsrVolume(0);
            setIsMute(!isMute);
          }}
          style={{ display: isMute ? "none" : "" }}
        >
          <VolumeUp />
        </Button>
        <Button
          onClick={(event) => {
            props.setUsrVolume(volBeforeMute);
            setIsMute(!isMute);
          }}
          style={{ display: isMute ? "" : "none" }}
        >
          <VolumeOff />
        </Button>
        <Grid item xs>
          <Slider
            value={props.volume}
            onChange={(event, value) => {
              props.setUsrVolume(value as number);
            }}
            aria-labelledby="continuous-slider"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default VolumeSlider;
