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

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const url = 'http://localhost:5000/palette/all';

function ShowSchemes() {

    const dataLimit = 4;

    const [palettes, setPalettes] = useState([]);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [sorting, setSorting] = useState("desc");
    const [typeSort, setTypeSort] = useState("date");

    useEffect(() => {
        fetch(url + `/?type=${typeSort}&sort=${sorting}`)
          .then((response) => {
            if (response.ok) return response.json();
            throw new Error('something went wrong while requesting posts');
          })
          .then((palettes) => {
              setPalettes(palettes)
              setPageCount(Math.ceil(palettes.length / dataLimit))
            })
          .catch((error) => setError(error.message));
    }, [typeSort,sorting]);

    const handleChange = (event,value) => {
        setCurrentPage(value);
    };

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return palettes.slice(startIndex, endIndex);
    };

    let sortContainer = [];

    const handleSorting = (event) => {
        if(event.target.className === "sortRating"){
            if(typeSort === 'date'){
                setSorting('asc')
            }else{
                setSorting(sorting === 'asc' ? 'desc' : 'asc')
            }
            setTypeSort("rating")
        } else {
            if(typeSort === 'rating'){
                setSorting('asc')
            }else{
                setSorting(sorting === 'asc' ? 'desc' : 'asc')
            }
            setTypeSort("date")
        }
    };

    if(typeSort === "rating"){
        sortContainer.push(<div key="sort1" className="sortDate" onClick={handleSorting}>Datum <ArrowDropUpIcon style={{color:"white"}}/></div>)
        sortContainer.push((sorting === "asc") ? <div key="sort2" className="sortRating" onClick={handleSorting}>Rating <ArrowDropUpIcon/></div> : <div key="sort2" className="sortRating" onClick={handleSorting}>Rating <ArrowDropDownIcon/></div>)
    } else {
        sortContainer.push((sorting === "asc") ? <div key="sort3" className="sortDate" onClick={handleSorting}>Datum <ArrowDropUpIcon/></div> : <div key="sort3" className="sortDate" onClick={handleSorting}>Datum <ArrowDropDownIcon/></div>)
        sortContainer.push(<div key="sort4" className="sortRating" onClick={handleSorting}>Rating <ArrowDropUpIcon style={{color:"white"}}/></div>)
    }

    return (
        <>
            <div className="sortingContainer">
                {sortContainer}
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