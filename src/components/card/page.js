
'use client'
import React from "react";
import styles from "./style.module.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Card = ({ title, description, imageUrl, buttonText,width, height, titleClass,link,btnclass,date }) => {
    return (
        <div className="">
            <img src={imageUrl} alt="Card Image" width={width} height={height} />
            <div className={styles["card-content"]}>
                {title && <h3 className={titleClass}>{title}</h3>}
                {date && <div className='flex'><AccessTimeIcon className="text-base mr-2 "/><p className='text-sm text-sm-black8'>{date}</p></div>}
                {description && <p>{description}</p>}
                {buttonText && <a href={link} className={btnclass}>{buttonText}</a>}
            </div>
        </div>
    );
}

export default Card;
