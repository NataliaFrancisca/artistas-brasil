import React from 'react'

import "./Home.css";
import {data} from "../db";

import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate();

  return (
    <main>

      <h1>brasil</h1>
      <section className='container-grid'>
          {data.map((artist, index) => (
              <div 
                  key={index}
                  className={`${artist['container-name']} image-card`} 
                  onClick={() => navigate(`/${artist['container-name']}`)}
              />
          ))}
      </section>
    </main>
  )
}

export default Home;