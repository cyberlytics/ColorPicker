/**
 * Enthält später die View die es ermöglicht eine
 * Palette zu erstellen.
 * Enthält:
 *  -Picker
 *  -Choose
 *  -Preview
 */
import "./index.css";

import React, { useEffect, useState } from "react";
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

  //Array contains all created colors
  const [colors, setColors] = useState([
    "#e33a10",
    "#edc71c",
  ]);

  //active color which should change
  const [activeColor, setActiveColor] = useState(0);

  //name of the palette user created
  const [paletteName, setPaletteName] = useState("");

  //if the save dialog is visible or not
  const [visible, setVisible] = useState(false);

  //state handles if name is entered or not
  const [noName, setNoName] = useState();

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
  };

  const changeColor = (color) => {
    let colorss = [...colors];
    colorss[activeColor] = color.hexString;
    setColors(colorss);
  }

  const handleAdd = () => {
    if (colors.length < 5 ) {
      let colorss = [...colors];
      colorss.push("#ABBBFF");
      setColors([...colorss]);
    }
  };

  const changeActiveColor = (number) => {
    setActiveColor(number);
  }

  const deleteColor = (number) => {

    changeActiveColor(0);
    
    if (colors.length > 2 ) {
 
      let colorss = [...colors];
      colorss.splice(number,1);
      setColors([...colorss]);
    }
    else (console.log("Immer Mind. 2 Colors"));
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
        {console.log(activeColor)}
        <Picker
          colors={colors}
          activeColor={activeColor}
          updateHexValue={updateHexValue}
          changeColor = {changeColor}
        />
        <ColorContainer
        colors={colors}
        handleAdd={handleAdd}
        changeActiveColor={changeActiveColor}
        deleteColor={deleteColor}
        />
      </div>
      <div className="container-small">
        <Preview colors={colors} />
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
