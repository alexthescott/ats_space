import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

import github_icon from '../static/icons/github-icon.svg';
import linkedin_icon from '../static/icons/linkedin-icon.svg';
import email_icon from '../static/icons/email-icon.svg';
import spotify_icon from '../static/icons/spotify-icon.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#15283d'
  },
}));

export default function StickyFooter() {
  const classes = useStyles()

  return(
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <div>
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
            src={spotify_icon}
            alt="spotify icon"
            onClick={() => openNewTab("https://open.spotify.com/user/bassguitar1234")}>
          </img>
          <img 
            class="page_icon"
            src={email_icon}
            alt="email icon"
            onClick={() => openNewTab("mailto:atscott@ucsc.edu")}>
          </img>
          </div>
        </Container>
      </footer>
  )
}

function openNewTab(url){
  console.log("opening ", url, "in a new tab");
  var win = window.open(url);
  win.focus();
}