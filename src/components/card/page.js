
'use client'
import React from "react";
const Card = ({ title, description, imageUrl, onClick,width, height, titleClass }) => {
    return (
        <div className="">
            <img src={imageUrl} alt="Card Image" width={width} height={height} />
            <div className="card-content">
                {title && <h3 className={"card-title " + titleClass}>{title}</h3>}
                {description && <p className="card-description">{description}</p>}
                {onClick && <button className="card-button" onClick={onClick}></button>}
            </div>
        </div>
    );
}

export default Card;
