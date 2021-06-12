/**
 * Die Anzeige aller Farbpaletten kommt nach hier.
 * Enthält: 
 *  -(evtl. Row mit 4 Plätzen für Paletten, dann ist Palette teil von Row), 
 *  -Palette
 */

import React, { useState, useEffect } from 'react';
import Palette from "../../components/Palette/index"
import Pagination from '@material-ui/lab/Pagination';
import "./schemes.css"

const url = 'http://localhost:5000/palette/all';

function ShowSchemes() {

    const dataLimit = 4;

    const [palettes, setPalettes] = useState([]);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        fetch(url)
          .then((response) => {
            if (response.ok) return response.json();
            throw new Error('something went wrong while requesting posts');
          })
          .then((palettes) => {
              setPalettes(palettes)
              setPageCount(Math.ceil(palettes.length / dataLimit))
            })
          .catch((error) => setError(error.message));
    }, []);

    const handleChange = (event,value) => {
        console.log(value)
        setCurrentPage(value);
    };

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        console.log("index " + startIndex + " " + endIndex)
        return palettes.slice(startIndex, endIndex);
    };

    return (
        <>
            <div>
                <h2 className="schemes">ShowSchemes</h2>
            </div>
            <div className="paletteContainer">
                {getPaginatedData().map(d => (<Palette key={d._id} colors={d.color} avgRating={d.avg_rating}/>))}
            </div>
            <div className="paginationContainer">
                <Pagination count={pageCount} page={currentPage} onChange={handleChange} />
            </div>
        </>
    );
}
export default ShowSchemes;