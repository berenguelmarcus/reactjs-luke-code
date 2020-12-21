import React from 'react';
import './styles.css';

const CardCategory = (props) => {
    return (
        <div className="category-card">
        <div className="category-card-img" style={{background: props.color}}>

        </div>
        <div className="category-card-content">
            <h4>{props.title}</h4>
            <p>{props.courses}</p>
        </div>
    </div>
    );
}

export default CardCategory;