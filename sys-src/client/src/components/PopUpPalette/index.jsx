/**
 * Das PopUp das angezeigt wird, wenn man eine bestimmte
 * Palette anklickt.
 * Enthält:
 *  -Palette
 *  -CommentContainer
 */

 import React, { Component } from 'react'
 import './index.css'
 import Comment from '../Comment';

 function PopUpPalette (props)  {
        return (props.trigger) ? (
            <div className="popup"> 
                <div className="popupInner">
                    <h3>Hello Popup</h3>
                    <Comment/>
                  <button className="btnPopup" id="btnSave">Speichern</button>
                  <button className="btnPopup" id="btnClose" onClick={() => props.setTrigger(false)}>
                      Schließen
                    </button>                  
                </div>
                
                
            </div>
        ):"";
    
    }

 





export default PopUpPalette;