import React from "react";

import "./Information.css"
import Button from "./Button";


const Information = ({state}) => {
 
    const { name, image, text, socialMedia, referencias } = state;
    const { instagram, youtube, spotify } = socialMedia;
    const codeSpotifyArtist = spotify.split("/").slice(-1);

    return(
        <main className="container-artist">
                <section className="image">
                 <img src={`${image}`} />
                </section>

                <section className="info-about">
                    <h1 className="title-artist">{name}</h1>
                    <p>{text}</p>

                    <iframe 
                    src={`https://open.spotify.com/embed/artist/${codeSpotifyArtist}?utm_source=generator&theme=0`}
                    width="100%" height="80" frameBorder="0" allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
              
                    <hr />
                    
                    <h2 className="title-social-media">Social Media</h2>

                    <div className="group-buttons-social-media">
                        {instagram ? instagram.map((data, index) => (
                            <div className="social-media">
                                <button className="button-social-media instagram">
                                    <a href={data.user} target="_blank"></a>
                                </button>
                                <span className="name-social-media">{data.name}</span>
                        </div>
                        )) : null}

                        <Button socialMedia={'Youtube'} url={youtube}></Button>
                        <Button socialMedia={'Spotify'} url={spotify}></Button>
                        <Button socialMedia={'Referências'} url={referencias} icon={'articles'}></Button>
                    </div>
                </section>
        </main>
        
    )
}

export default Information;