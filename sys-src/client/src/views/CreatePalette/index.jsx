import "./index.css";

import React, {useState } from "react";
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

//view that enables user to create their own palette and save it to the database
export default function CreatePalette(params) {

  //Array contains all created colors
  const [colors, setColors] = useState(["#e33a10", "#edc71c"]);

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
          handleSaveProcess()
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
  };

  const handleAdd = () => {
    if (colors.length < 5) {
      let colorss = [...colors];
      colorss.push(getRandomColor());
      setColors([...colorss]);
    }
  };

  const getRandomColor = () => {
    var letters = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeActiveColor = (number) => {
    setActiveColor(number);
  };

  const deleteColor = (number) => {
    changeActiveColor(0);

    if (colors.length > 2) {
      let colorss = [...colors];
      colorss.splice(number, 1);
      setColors([...colorss]);
    } else console.log("Immer Mind. 2 Colors");
  };

  const createRandomPalette = () => {
    let colorss = [];
    for (var i = 0; i < Math.floor(Math.random() * (5 - 2 + 1)) + 2; i++) {
      colorss.push(getRandomColor());
    }
    setActiveColor(0);
    setColors(colorss);
  };


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
          <Picker
            colors={colors}
            activeColor={activeColor}
            updateHexValue={updateHexValue}
            changeColor={changeColor}
          />
          <ColorContainer
            colors={colors}
            handleAdd={handleAdd}
            changeActiveColor={changeActiveColor}
            deleteColor={deleteColor}
          />
      </div>
      <div className="container-small">
        <div className="container-preview">
          <div><Preview colors={colors} /></div>
        </div>
        <div className="container-save-button">
          <div className="button-left-align">
            <Button
              title={"Random Palette"}
              onClick={() => createRandomPalette()}
            ></Button>
          </div>
          <div className="button-right-align">
            <Button
              title={"Palette Speichern"}
              onClick={handleSaveProcess}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
