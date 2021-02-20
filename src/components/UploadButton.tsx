import { IconButton } from "@material-ui/core";
import { LibraryMusic } from "@material-ui/icons";

import React from "react";
type Props = {
  onMusicChange: (selectMusic: File) => void;
};
const BreakTime: React.FC<Props> = (props) => {
  return (
    <IconButton component="label">
      <input
        accept="audio/*"
        id="pomodoro-music"
        type="file"
        style={{ display: "none" }}
        onChange={(event) => {
          const selectMusic =
            event.target.files !== null ? event.target.files[0] : null;
          if (selectMusic === null) return;
          if (selectMusic.type.indexOf("audio") === -1) {
            alert("オーディオファイルを選んでください");
            return;
          }
          props.onMusicChange(selectMusic);
        }}
      />
      <LibraryMusic></LibraryMusic>
    </IconButton>
  );
};

export default BreakTime;
