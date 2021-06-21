/**
 * Die Vorschauwebsite.
 * Enthält:
 *  - tbc...
 */

 import React, {useState} from 'react';
 import './Preview.css';
//  import { SketchPicker } from 'react-color';
//  import { ReactComponent as Header } from './header.svg';
//  import { ReactComponent as Headline } from './headline.svg';
//  import { ReactComponent as Container } from './container.svg';
//  import { ReactComponent as Line } from './line.svg';
//  import { ReactComponent as ReactLogo } from './react_logo.svg';
//  import { ReactComponent as Subtitle } from './subtitle.svg';
//  import { ReactComponent as Text }  from './text.svg';

 import { SketchPicker } from 'react-color';
 import Header from './header.svg';
 import Headline from './headline.svg';
 import Container from './container.svg';
 import Line from './line.svg';
 import ReactLogo from './react_logo.svg';
 import Subtitle from './subtitle.svg';
 import Text  from './text.svg';
 
 
 export function Preview () {
     const [color, setColor] = useState('#ff000');
     return (
        <div className="preview-container">

            {/* SketckPicker zum testen der Farben */}
            {/* <SketchPicker color={color} onChangeComplete={ (color) => {setColor(color.hex)} }/>
            <div style={{color}}>Test</div> */}

            <div className="preview_row"> 
                {/* <Header/>
                <Headline/>
                <Subtitle/> */}
                <img src={Header} id="header"/>
                <img src={Headline} id="headline"/>
                <img src={Subtitle} id="subtitle"/>
            </div>
            <div className="preview_row">
                {/* <Container/>
                <Line/>
                <ReactLogo/>
                <Text/> */}
                <img src={Container} id="container"/>
                <img src={Line} id="line"/>
                <img src={ReactLogo} id="reactLogo"/>
                <img src={Text} id="text"/>
            </div>
            
        </div>

        );

    
     }