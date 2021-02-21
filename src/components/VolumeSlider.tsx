import React, { useEffect } from "react";
import { Button, Grid, Slider, Typography } from "@material-ui/core";
import { VolumeOff, VolumeUp } from "@material-ui/icons";
type Props = {
  volume: number;
  setUsrVolume: (volume: number) => void;
  volBeforeMute: number;
  setVolBeforeMute: (volume: number) => void;
  isMute: boolean;
  setIsMute: (isMute: boolean) => void;
};

const VolumeSlider: React.FC<Props> = (props) => {
  useEffect(() => {
    if (
      (props.volume === 0 && !props.isMute) ||
      (props.volume !== 0 && props.isMute)
    )
      props.setIsMute(!props.isMute);
  }, [props, props.isMute, props.volume]);

  return (
    <React.Fragment>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Button
          onClick={(event) => {
            props.setVolBeforeMute(props.volume);
            props.setUsrVolume(0);
            props.setIsMute(!props.isMute);
          }}
          style={{ display: props.isMute ? "none" : "" }}
        >
          <VolumeUp />
        </Button>
        <Button
          onClick={(event) => {
            props.setUsrVolume(props.volBeforeMute);
            props.setIsMute(!props.isMute);
          }}
          style={{ display: props.isMute ? "" : "none" }}
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
