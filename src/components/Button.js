import React from "react";

const Button = ({socialMedia, url, icon}) => {

    return(
        <div className="social-media">
            <button className={`button-social-media ${socialMedia.toLowerCase()}`}>
                <a href={url} target="_blank">
                    {icon ?
                        <span className="material-icons">{icon}</span>
                    : null}
                </a>
            </button>
            <span className="name-social-media">{socialMedia}</span>
        </div>
    )
}

export default Button;