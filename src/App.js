import './App.css';
import React from 'react'
import Typed from 'react-typed';
import {Typography, Grid, CssBaseline, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

import StickyFooter from './components/footer'

import P5Wrapper from 'react-p5-wrapper'
import tiny_noise from '../src/sketches/tiny_noise.js'
import pond_water from '../src/sketches/pond_water.js'
import random_walk from '../src/sketches/random_walk.js'

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
  // choose and return a grid item containing a p5.js sketch found in ./src/sketches
  var sketch_count = 3;
  var sketch_index = Math.floor(Math.random(0, 1) * (sketch_count))

  if (sketch_index === 0){
    return (<Grid item style={{textAlign:'center'}} xs={12}><P5Wrapper sketch={tiny_noise}></P5Wrapper></Grid>)
  } else if (sketch_index === 1){
    return <Grid item style={{textAlign:'center'}} xs={12}><P5Wrapper sketch={pond_water}></P5Wrapper></Grid>
  } else if (sketch_index === 2){
    return <Grid item style={{textAlign:'center'}} xs={12}><P5Wrapper sketch={random_walk}></P5Wrapper></Grid>
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
                "<b>Alex Scott </b>",
                "<b>Alex Scott,</b> UCSC Grad", 
                "<b>Alex Scott, </b> programmer",
                "<b>Alex Scott, </b> computer enthusiast",
                "<b>Alex Scott, </b> music nerd",
                "<b>Alex Scott, </b> runner",
                "<b>Alex Scott </b>"
              ]} 
              typeSpeed={75}
              showCursor={true}
              backDelay={1750}
              backSpeed={60}
              smartBackspace={true}
              loop={true}
              loopCount={3}
              style={{'color':'white', 'weight':'bold'}}
              ></Typed>
          </Typography>
        </Container>
        <Container maxWidth="sm">
          <Grid container spacing={2} justify="center" alignItems="center">
            {getSketch()}
            <Grid item xs={12}>
              {/*             */}
            <p id="me_page_bio">
            👋🏻 Howdy! I currently work for iDTech as an online private instructor. Check out some
            of the links below, send me an email, or refresh the page for a new random doodle!
            </p>
          </Grid>
          </Grid>
        </Container>
      <StickyFooter/>
    </div>
  )
}