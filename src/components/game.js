import React, {useState} from 'react';
import Board from './board';

function Game() {

    const tilesArray = ['cow', 'cow', 'pig', 'pig', 'horse', 'horse', 'duck', 'duck'];
    const [ clicked, setClicked ] = useState(tilesArray.map(() => false));  

    function flip(index) {   
        const tile = document.getElementById(index);
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