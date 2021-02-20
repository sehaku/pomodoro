import { createStyles, makeStyles, TextField, Theme } from "@material-ui/core";
import React from "react";
type Props = {
  time: number;
  setTime: (num: number) => void;
  label: string;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        fontSize: "20px",
        marginTop: "10px",
        marginBottom: "10px",
      },
    },
  })
);
const TimeSetter: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <TextField
      id="outlined-number"
      label={props.label}
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      value={props.time}
      onChange={(event) => {
        const val = event.target.value;
        if (val) {
          if (Number(val) <= 0) {
            props.setTime(0);
          } else {
            props.setTime(Number(val));
          }
        } else {
          props.setTime(Number(NaN));
        }
      }}
      className={classes.root}
    />
  );
};
export default TimeSetter;
