import './App.css';
import React, { Component } from 'react'
import Typed from 'react-typed';
import {Typography, Grid, CssBaseline, Container} from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import StickyFooter from './components/footer'

import P5Wrapper from 'react-p5-wrapper'
import tiny_noise from '../src/sketches/tiny_noise.js'
import pond_water from '../src/sketches/pond_water.js'

// TODO -> Address mobile sized version of this site, putting the side_nav bar @ the top

const useStyles = makeStyles((theme) => ({
  root: { 
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#1b3756',
  },
  main: {
    padding: theme.spacing(2)
  },
}));

function getSketch(){
  const sketch_index = Math.round(Math.random(0, 1) * 1)
  console.log(sketch_index)

  if (sketch_index === 0){
    return (<Grid item xs={12}><P5Wrapper sketch={tiny_noise}></P5Wrapper></Grid>)
  } else{
    return <Grid item xs={12}><P5Wrapper sketch={pond_water}></P5Wrapper></Grid>
  }
}

export default function App() {
  const classes = useStyles()


  return (
    <div className={classes.root}> 
      <CssBaseline/>
        <Container component="main" className={classes.main} maxWidth="sm">
          <Typography
            variant='h6'
            id="me_page_my_name">
              <Typed 
              strings={[
                "<b>Alex Scott,</b> UCSC Grad", 
                "<b>Alex Scott, </b> Programmer",
                "<b>Alex Scott, </b> Music Nerd",
                "<b>Alex Scott, </b> Runner",
                "<b>Alex Scott </b>"
              ]} 
              typeSpeed={75}
              showCursor={true}
              backDelay={1000}
              backSpeed={60}
              smartBackspace={true}
              loop={true}
              loopCount={3}
              style={{'color':'white', 'weight':'bold'}}
              ></Typed>
          </Typography>
        </Container>
        <Container maxWidth="sm">
          <Grid container>
            {getSketch()}
            <Grid item xs={12}>
              {/* 
            <p id="me_page_bio">
            👋🏻 Howdy! I am a programmer, music enthusiast 
            and runner, and in 2020, I graduated from UCSC with a BS in Computer 
            Science. I currently work for iDTech as an online private instructor,
            and am excited to start my professional programming career. 
            </p>
            */}
          </Grid>
          </Grid>
          {/*           <p id="me_page_bio">
            👋🏻 Howdy! I am a programmer, music enthusiast 
            and runner, and in 2020, I graduated from UCSC with a BS in Computer 
            Science. I currently work for iDTech as an online private instructor,
            and am excited to start my professional programming career. 
          </p>
          */}

        </Container>
      <StickyFooter/>
    </div>
  )
}