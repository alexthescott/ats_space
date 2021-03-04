import './App.css';
import React from 'react'

import draw_side_nav from './components/side_bar'

import {Typography, Grid} from '@material-ui/core';

function App() {
  return (
    <div className="App"> 
      <Grid
      container
      direction="row"
      justify="flex-start"
      xs={12}
      style={{'height':'100%'}}
      >
      {draw_side_nav()}
      <Grid item xs={10} spacing={2}>
        <div style={{'max-width': '1000px'}}>
          <p id="me_page_bio">
            Howdy 👋🏻! My name is Alex, and I am a programmer, music enthusiast and runner. In 2020, I graduated from UCSC
            with a BS in Computer Science. I currently work for iDTech as an online private instructor, and am looking to start
            my professional programming career. My long term interests lie in the intersection of music and technology.
          </p>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
