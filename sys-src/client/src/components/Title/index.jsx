/**
 * Schriftanzeige die in Tab, Button und ColorColumn zum Einsatz kommen kann
 */

import React from 'react';
import './index.css';

export function Title(props){
    return <div className="titleStyle">{props.children}</div>;
}