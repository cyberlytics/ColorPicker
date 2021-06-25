/**
 * Enthält später die View die es ermöglicht eine
 * Palette zu erstellen.
 * Enthält:
 *  -Picker
 *  -Choose
 *  -Preview
 */
import "./index.css";

import React, { Component, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@material-ui/core";
import ColorContainer from "../../components/ColorContainer";
import { Button } from "../../components/Button";
import { Preview } from "../../components/Preview";
import Picker from "../../components/Picker/index";

export default function CreatePalette(params) {

// state = { colors: ["#8F9C8B", "#FFFFFF"], activeColor: 0, newColor: "" };

  //Array contains all created colors
  const [colors, setColors] = useState(["#8F9C8B", "#FFFFFF"]);

  //active color which should change
  const [activeColor, setActiveColor] = useState(0);

  //new created color in colorwheel or slider
  const [newColor, setNewColor] = useState("");

  //name of the palette user created
  const [paletteName, setPaletteName] = useState("");

  //if the save dialog is visible or not
  const [visible, setVisible] = useState(false);

  //state handles if name is entered or not
  const [noName, setNoName] = useState();

  const getActiveColor = (handleActiveColor) => {
    setActiveColor(handleActiveColor);
  };

  //handles the opening and closing of the Save palette dialog. Ensures that paletteName and noName are reset.
  const handleSaveProcess = () => {
    setVisible(!visible);
    setNoName(false);
    setPaletteName("");
  };

  const submitPalette = (saveName, saveColor) => {
    //before palette can be saved, it is checked if user entered a name or not, when not saving is not possible and an error message occured until user enters a name.
    if (paletteName === "") {
      setNoName(true);
    } else {
      //if name was entered the palette is saved and then resets paletteName and noName and hides the save dialog.
      fetch("http://localhost:5000/palette/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ name: saveName, color: saveColor }),
      }).then(() => {
        setPaletteName("");
        setVisible(!visible);
        setNoName(false);
      });
    }
  };

  const updateHexValue = (hexValue) => {
    let colorss = [...colors];
    colorss[activeColor] = hexValue;
    setColors(colorss);
  }

  return (
    <div className="container-create-palette">
      {/**Save Palette Dialog */}
      <Dialog open={visible} onClose={handleSaveProcess}>
        <DialogTitle>Erstellte Palette wirklich speichern?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Um deine erstellte Palette speichern zu können, musst du ihr
            zunächst noch einen Namen geben.
          </DialogContentText>
          <DialogContentText>
            Bitte beachte das du nachdem Speichern keine Änderungen mehr
            vornehmen kannst!
          </DialogContentText>
          <TextField
            id="palette_name"
            value={paletteName}
            variant="filled"
            required={true}
            placeholder="Name deiner Palette"
            onChange={(event) => setPaletteName(event.target.value)}
            margin="dense"
            label="Wie soll deine Palette heißen?"
            fullWidth={true}
            error={noName}
            color="primary"
          />
          <DialogActions>
            <Button title="Abbrechen" onClick={handleSaveProcess} />
            <Button
              title="Speichern"
              onClick={() => submitPalette(paletteName, colors)}
            />
          </DialogActions>
        </DialogContent>
      </Dialog>
      {/**View Content */}

      <div className="container-large">
        <Picker colors={ colors } activeColor={ activeColor } updateHexValue={updateHexValue} />
        <ColorContainer />
      </div>
      <div className="container-small">
        {/* <Preview /> */}
        <div className="lueckenfueller">FILLER</div>
        <div className="container-save-button">
          <Button
            title={"Palette Speichern"}
            onClick={handleSaveProcess}
          ></Button>
        </div>
      </div>
    </div>
  );
}
