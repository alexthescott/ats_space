import './App.css';
import React, { Component } from 'react'
import Typed from 'react-typed';
import {Typography, Grid, CssBaseline, Container} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import draw_side_nav from './components/side_bar'
import StickyFooter from './components/footer'

// TODO -> Address mobile sized version of this site, putting the side_nav bar @ the top

const useStyles = makeStyles((theme) => ({
  root: { 
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#1b3756',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));



export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}> 
      <CssBaseline/>
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography
            variant='h6'
            id="me_page_my_name">
            <b>A</b>
              <Typed 
              strings={["<b>lex</b>", "<b>lex Scott</b>"]} 
              typeSpeed={85}
              showCursor={false}
              backDelay={10}
              style={{'color':'white', 'weight':'bold'}}
              ></Typed>
          </Typography>
        </Container>
      <StickyFooter/>
    </div>
  )
}