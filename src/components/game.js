import React, {useState, useEffect, useMemo} from 'react';
import Board from './board';

function Game() {

    const tilesArray = useMemo(() => (
        ['cow', 'cow', 'pig', 'pig', 'horse', 'horse', 'duck', 'duck']
    ), []);
    // const [ clicked, setClicked ] = useState(tilesArray.map(() => ({flipped: false, matched: false})));  
    const [ clicked, setClicked ] = useState(tilesArray.map(() => false));
    const [ calculating, setCalculating] = useState(false);
    console.log('clicked', clicked);
    const [ matched, setMatched ] = useState(tilesArray.map(() => false));
    console.log('matched', matched);
    // const [ classAllocation, setClassAllocation ] = useState(); 

    function flip(index) {   
        if (calculating || clicked[index]) {
            return;
        }  else {
            setClicked([
                ...clicked.slice(0, index),
                true,
                ...clicked.slice(index + 1),
            ]);
        }
    }

    useEffect(() => {
        let first = clicked.indexOf(true);
        let last = clicked.lastIndexOf(true);
        console.log(first, last);
        if (first === last) {
            return;
        } else if (first !== last && first >= 0 && last >= 0) {
            if (tilesArray[first] === tilesArray[last]) {
                setCalculating(true);
                setTimeout(() => {
                    setClicked(tilesArray.map(() => false));
                    setMatched(m => [
                        ...m.slice(0, first),
                        true,
                        ...m.slice(first + 1, last),
                        true,
                        ...m.slice(last + 1),
                    ]);
                    setCalculating(false);
                }, 1500);
            } else {
                setCalculating(true);
                setTimeout(() => {
                    setClicked(tilesArray.map(() => false));
                    setCalculating(false);
                }, 1500);
            }
        }
    }, [clicked, tilesArray]);

    // useEffect(() => {

    // }, [clicked])
        
        return (
            <div>
                <Board 
                    flip={flip}
                    clicked={clicked}
                    tilesArray={tilesArray}
                    matched={matched}
                />
            </div>
        )
    }



export default Game;