import alex_photo from '../static/imgs/alex_0.JPG';
import github_icon from '../static/icons/github-icon.svg';
import linkedin_icon from '../static/icons/linkedin-icon.svg';
import email_icon from '../static/icons/email-icon.svg';
import spotify_icon from '../static/icons/spotify-icon.svg';

import {Typography, Grid, Paper} from '@material-ui/core';
import Typed from 'react-typed';

function draw_side_nav(){
	return(
	  <Grid container xs='2' justify="flex-start" direction="column" style={{'height':'100%', 'textAlign':'center'}}>
		<Paper square={true} elevation={5}  style={{'height':'100%', 'backgroundColor':'#15283d'}}>
		  <Grid item spacing={2}>
			<img id="alex_head_shot" src={alex_photo} alt="Alex holding his cat Blake"></img>
		  </Grid>
		  <Grid item spacing={2}>
			<Typography
			  variant='h6'
			  id="me_page_my_name">
			  <b>A</b>
				<Typed 
				strings={["<b>lex Scott</b>"]} 
				typeSpeed={35}
				showCursor={false}
				style={{'color':'white', 'weight':'bold'}}
				></Typed>
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
		</Paper>
	  </Grid>
	);
}

function openNewTab(url){
  console.log("opening ", url, "in a new tab");
  var win = window.open(url);
  win.focus();
}

export default draw_side_nav;