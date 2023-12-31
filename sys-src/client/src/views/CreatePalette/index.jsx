import "./index.css";

import React, {useState, useEffect } from "react";
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
  const [colors, setColors] = useState(["#ffffff", "#ffffff"]);

  //active color which should change
  const [activeColor, setActiveColor] = useState(0);

  //name of the palette user created
  const [paletteName, setPaletteName] = useState("");

  //if the save dialog is visible or not
  const [visible, setVisible] = useState(false);

  //state handles if name is entered or not
  const [noName, setNoName] = useState();

  //state handles if user want to add more than 5 Colors.
  const [tooMuchColors, setTooMuchColors] = useState(false);

  //state handles if user want to delete too many colors < 2.
  const [tooLessColors, setTooLessColors] = useState(false);

  //handles the opening and closing of the too-much-colors-dialog.
  const handleTooMuchColors = () => {
    setTooMuchColors(!tooMuchColors);
  }

  //handles the opening and closing of the too-less-colors-dialog.
  const handleTooLessColors = () => {
    setTooLessColors(!tooLessColors);
  }

  useEffect(() => {createRandomPalette(); }, [])

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

  // updates active color value in state
  const updateHexValue = (hexValue) => {
    let colorss = [...colors];
    colorss[activeColor] = hexValue;
    setColors(colorss);
  };

  // adds color to colorarray in state
  const handleAdd = () => {
    if (colors.length < 5) {
      let colorss = [...colors];
      colorss.push(getRandomColor());
      setColors([...colorss]);
    }
    else handleTooMuchColors();
  };


  // creates a random hexstring

  const getRandomColor = () => {
    var letters = "0123456789abcdef";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // changes active color in state
  const changeActiveColor = (number) => {
    setActiveColor(number);
  };

  const deleteColor = (number) => {
    // changes active color to 0 -> avoids error that active color is not defined
    changeActiveColor(0);
    // always at least 2 colors have to exist
    if (colors.length > 2) {
      // save state.colors in new array, change new array, change state.colors to new array
      let colorss = [...colors];
      colorss.splice(number, 1);
      setColors([...colorss]);
    } else handleTooLessColors();
  };

  // creates a new palette with a random amount (2-5) of colors
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

      {/**Too much colors Dialog */}
      <Dialog open={tooMuchColors} onClose={handleTooMuchColors}>
        <DialogTitle>Sie haben bereits 5 Farben.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Es ist nicht möglich eine Palette mit mehr als 5 Farben zu erstellen.
          </DialogContentText>
          <DialogActions>
            <Button title="Ok" onClick={handleTooMuchColors} />
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/**Too less colors Dialog */}
      <Dialog open={tooLessColors} onClose={handleTooLessColors}>
        <DialogTitle>Es müssen mindestens 2 Farben vorhanden sein.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Es ist nicht möglich eine Palette mit weniger als 2 Farben zu erstellen.
          </DialogContentText>
          <DialogActions>
            <Button title="Ok" onClick={handleTooLessColors} />
          </DialogActions>
        </DialogContent>
      </Dialog>

      {/**View Content */}
      <div className="container-large shadow">
          <Picker
            colors={colors}
            activeColor={activeColor}
            updateHexValue={updateHexValue}
          />
          <ColorContainer
            colors={colors}
            handleAdd={handleAdd}
            changeActiveColor={changeActiveColor}
            deleteColor={deleteColor}
            activeColor={activeColor}
          />
      </div>
      <div className="container-small shadow">
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
