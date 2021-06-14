/**
 * Enthält das Farbrad.
 */

 import iro from '@jaames/iro';
 //import ColorPicker from 'irojs-react'

function ColorWheel() {
    var colorPicker = new iro.ColorPicker('#picker');

    return (
        <div id="picker"></div>
    );
  }

  export default ColorWheel;


  
 /*class Example extends Component {
  render() {
    return <ColorPicker />
  }
}*/