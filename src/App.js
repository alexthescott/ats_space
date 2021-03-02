import './App.css';
import React from 'react'

import alex_photo from './static/imgs/alex_0.JPG';
import github_icon from './static/icons/github-icon.svg';
import linkedin_icon from './static/icons/linkedin-icon.svg';
import email_icon from './static/icons/email-icon.svg';
import spotify_icon from './static/icons/spotify-icon.svg';

import {Typography, Grid} from '@material-ui/core';
import Typed from 'react-typed';

function draw_my_info(){
  return(
    <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    spacing="2"
    >
    <Grid item
      style={{"margin":"5px"}}>
      <Typography
        variant='h1'>
          <Typed 
          strings={["<b>Alex Scott</b>"]} 
          typeSpeed={75}
          startDelay={20}
          style={{'color':'white', 'weight':'bold'}}
          ></Typed>
      </Typography>
    </Grid>
    <Grid item 
      style={{"margin":"5px"}}> 
      <Typography
        id="me_page_city"
        variant='h4'>
          Carlsbad, CA
      </Typography>
    </Grid>
  </Grid>
  );
}



function App() {
  return (
    <div className="App"> 
      {draw_my_info()}
      <img id="alex_head_shot" src={alex_photo} alt="Alex holding his cat Blake"></img>
      <h1 id="me_page_my_name"><b>Alex Scott</b></h1>
      <h4 id="me_page_city">Carlsbad, CA</h4>
      <div class="me_page_icon_links">
        <img 
          class="page_icon" 
          src={github_icon} 
          alt="github icon"
          style = {{'position':'relative', 'down':'10px', 'width': '35px', 'height': '35px'}}
          onClick={() => openNewTab("https://github.com/alexthescott")}>
        </img>
        <img 
          class="page_icon" 
          src={linkedin_icon} 
          alt="linkedin icon"
          style={{'up': '5px'}}
          onClick={() => openNewTab("https://www.linkedin.com/in/alex-scott-b1a591152/")}>
        </img>
        <img 
          class="page_icon"
          src={email_icon}
          alt="email icon"
          style={{'height': '30px'}}
          onClick={() => openNewTab("mailto:atscott@ucsc.edu")}>
        </img>
        <img 
          class="page_icon"
          src={spotify_icon}
          alt="spotify icon"
          onClick={() => openNewTab("https://open.spotify.com/user/bassguitar1234")}>
        </img>
      </div>
      <div style={{'max-width': '1000px', 'margin-left':'auto', 'margin-right':'auto'}}>
        <p id="me_page_bio">
          Howdy 👋🏻! My name is Alex, and I am a programmer, music enthusiast and runner. In 2020, I graduated from UCSC
          with a BS in Computer Science. I currently work for iDTech as an online private instructor, and am looking to start
          my professional programming career. My long term interests lie in the intersection of music and technology.
        </p>
      </div>
    </div>
  );
}

function openNewTab(url){
  console.log("opening ", url, "in a new tab");
  var win = window.open(url);
  win.focus();
}

export default App;
