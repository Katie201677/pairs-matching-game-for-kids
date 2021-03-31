import React, {useState, useEffect, useMemo} from 'react';
import Board from './board';

function Game() {

    const tilesArray = useMemo(() => (
        ['cow', 'cow', 'pig', 'pig', 'horse', 'horse', 'duck', 'duck']
    ), []);
    const [ clicked, setClicked ] = useState(tilesArray.map(() => false));  
    console.log(clicked);

    function flip(index) {   
        if (clicked[index]) {
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
                console.log('match');
                setClicked([
                    ...clicked.slice(0, first),
                    'match',
                    ...clicked.slice(first + 1, last),
                    'match',
                    ...clicked.slice(last + 1),
                ]);
                console.log(clicked);
            } else {
                setTimeout(() => {
                    setClicked([
                        ...clicked.slice(0, first),
                        false,
                        ...clicked.slice(first + 1, last),
                        false,
                        ...clicked.slice(last + 1),
                    ]);
                }, 1500);
            }
        }
    }, [clicked, tilesArray]);
        
        return (
            <div>
                <Board 
                    flip={flip}
                    clicked={clicked}
                    tilesArray={tilesArray}
                />
            </div>
        )
    }



export default Game;