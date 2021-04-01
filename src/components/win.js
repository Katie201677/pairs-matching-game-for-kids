import React from 'react';

function WinMessage(props) {

    const clicked = props;

    if (!clicked.includes(false)) {
        return (
            <div>Winner</div>
        )
    }
}

export default WinMessage;