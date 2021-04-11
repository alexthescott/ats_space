import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

import github_icon from '../static/icons/github-icon.svg';
import linkedin_icon from '../static/icons/linkedin-icon.svg';
import email_icon from '../static/icons/email-icon.svg';
import spotify_icon from '../static/icons/spotify-icon.svg';
import twitter_icon from '../static/icons/twitter-icon.svg';

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
            <a href="https://github.com/alexthescott" target="_blank" rel="noopener noreferrer">
              <img 
                class="page_icon" 
                src={github_icon} 
                alt="github icon">
              </img>
            </a>
            <a href="https://www.linkedin.com/in/alexthescott/" target="_blank" rel="noopener noreferrer">
              <img 
                class="page_icon" 
                src={linkedin_icon} 
                alt="linkedin icon">
              </img>
            </a>
            <a href="https://open.spotify.com/user/bassguitar1234" target="_blank" rel="noopener noreferrer">
              <img 
                class="page_icon"
                src={spotify_icon}
                alt="spotify icon">
              </img>
            </a>
            <a href="https://twitter.com/mralexthescott" target="_blank" rel="noopener noreferrer">
              <img 
                class="page_icon"
                src={twitter_icon}
                alt="twitter icon">
              </img>
            </a>
            <a href="mailto:atscott@ucsc.edu" target="_blank" rel="noopener noreferrer">
              <img 
                class="page_icon"
                src={email_icon}
                alt="email icon">
              </img>
            </a>
          </div>
        </Container>
      </footer>
  )
}