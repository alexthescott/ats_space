import './App.css';
import React from 'react'

import alex_photo from './static/imgs/alex_0.JPG';
import github_icon from './static/icons/github-icon.svg';
import linkedin_icon from './static/icons/linkedin-icon.svg';
import email_icon from './static/icons/email-icon.svg';
import spotify_icon from './static/icons/spotify-icon.svg';

import {Typography, Grid} from '@material-ui/core';
import { sizing } from '@material-ui/system'
import Typed from 'react-typed';

function draw_my_info(){
  return(
    <Grid container xs="3" justify="flex-start" direction="column" style={{'maxWidth':'225px', 'height':'100%', 'backgroundColor':'black'}}>
      <Grid item spacing={2}>
        <img id="alex_head_shot" src={alex_photo} alt="Alex holding his cat Blake"></img>
        <Typography
          variant='h5'
          id="me_page_my_name">
            <Typed 
            strings={["<b>Alex Scott</b>"]} 
            typeSpeed={35}
            showCursor={false}
            style={{'color':'white', 'weight':'bold'}}
            ></Typed>
        </Typography>
      </Grid>
      <Grid item spacing={2}>
        <Typography
          id="me_page_city"
          variant='subtitle1'>
            Carlsbad, CA
        </Typography>
      </Grid>
      <Grid item>
        <div class="me_page_icon_links">
            <img 
              class="page_icon" 
              src={github_icon} 
              alt="github icon"
              onClick={() => openNewTab("https://github.com/alexthescott")}>
            </img>
            <img 
              class="page_icon" 
              src={linkedin_icon} 
              alt="linkedin icon"
              onClick={() => openNewTab("https://www.linkedin.com/in/alex-scott-b1a591152/")}>
            </img>
            <img 
              class="page_icon"
              src={email_icon}
              alt="email icon"
              onClick={() => openNewTab("mailto:atscott@ucsc.edu")}>
            </img>
            <img 
              class="page_icon"
              src={spotify_icon}
              alt="spotify icon"
              onClick={() => openNewTab("https://open.spotify.com/user/bassguitar1234")}>
            </img>
          </div>
      </Grid>
    </Grid>
  );
}

function App() {
  return (
    <div className="App"> 
      <Grid
      container
      direction="row"
      justify="flex-start"
      spacing="0"
      style={{'height':'100%'}}
      >
      {draw_my_info()}
      <Grid item xs="9">
        <div style={{'max-width': '1000px', 'margin-left':'auto', 'margin-right':'auto'}}>
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

function openNewTab(url){
  console.log("opening ", url, "in a new tab");
  var win = window.open(url);
  win.focus();
}

export default App;
