import React from 'react';

import './styles.css';

const Animate = () => {
    setTimeout(() => {
        document.getElementById('bg-animate').style = "display: none";
    },  2500)
    return (
        <div className="bg-animate" id="bg-animate">
            <div className="animate">
                <h2>Luke Code</h2>
            </div>
        </div>
    )
}

export default Animate;