import React from "react";

const Button = ({socialMedia, url}) => {

    return(
        <div className="social-media">
            <button className={`button-social-media ${socialMedia.toLowerCase()}`}>
                <a href={url} target="_blank">
                </a>
            </button>
            <span className="name-social-media">{socialMedia}</span>
        </div>
    )
}

export default Button;