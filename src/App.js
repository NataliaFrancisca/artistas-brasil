import './App.css';

import {data} from "./db";

import {BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom'

import Information from "./components/Information"
import Home from "./components/Home"

function App() {

  const navigate = useNavigate();

  return (
    <main className="App">
        <section className='container-routes'>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route>
              {data.map((artist, index) => (
                <Route 
                  path={`/${artist['container-name']}`} 
                  exact 
                  key={index}
                  element={<Information state={artist} />} 
                />
              ))}
            </Route>
          </Routes>
        </section>
    </main>
  );
}

export default App;
