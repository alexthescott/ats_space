(this.webpackJsonpalex=this.webpackJsonpalex||[]).push([[0],{36:function(t,i,e){},37:function(t,i,e){},45:function(t,i,e){"use strict";e.r(i);var s=e(1),n=e.n(s),o=e(22),r=e.n(o),a=(e(36),e(37),e(23)),h=e.n(a),c=e(62),l=e(63),d=e(61),f=e(64),u=e(59),p=e.p+"static/media/github-icon.ff5b408c.svg",b=e.p+"static/media/linkedin-icon.e3403041.svg",g=e.p+"static/media/email-icon.23386db3.svg",m=e.p+"static/media/spotify-icon.261509b7.svg",x=e(2),j=Object(u.a)((function(t){return{footer:{padding:t.spacing(2),marginTop:"auto",backgroundColor:"#15283d"}}}));function v(){var t=j();return Object(x.jsx)("footer",{className:t.footer,children:Object(x.jsx)(d.a,{maxWidth:"sm",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{class:"page_icon",src:p,alt:"github icon",onClick:function(){return w("https://github.com/alexthescott")}}),Object(x.jsx)("img",{class:"page_icon",src:b,alt:"linkedin icon",onClick:function(){return w("https://www.linkedin.com/in/alex-scott-b1a591152/")}}),Object(x.jsx)("img",{class:"page_icon",src:m,alt:"spotify icon",onClick:function(){return w("https://open.spotify.com/user/bassguitar1234")}}),Object(x.jsx)("img",{class:"page_icon",src:g,alt:"email icon",onClick:function(){return w("mailto:atscott@ucsc.edu")}})]})})})}function w(t){console.log("opening ",t,"in a new tab"),window.open(t).focus()}var k=e(18),_=e.n(k);function O(t){var i,e=[["#273043","#F02D3A","#EFF6EE"],["#1E2019","#E2C044","#587B7F"],["#15A0A2","#4A8FE7","#44E5E7"],["#5C95FF","#B9E6FF","#F87575"],["#2C302E","#474A48","#909590"],["#243010","#829E2E","#AFCC66"]],s=e[Math.floor(Math.random()*e.length)],n=0;t.setup=function(){t.createCanvas(400,400),t.noiseDetail(3),t.noStroke(),0===(i=t.map(t.random(0,1),0,1,-1.25,1.25))&&(i=1)},t.draw=function(){t.background(s[0]);for(var e=t.width/8,o=t.height/8,r=0;r<e;r++)for(var a=.05*r/i,h=0;h<o;h++){var c=.05*h*i,l=t.noise(a,c,n);l>=.55?(t.fill(s[1]),t.square(8*r,8*h,8)):l>.455&&(t.fill(s[2]),t.square(8*r,8*h,8))}n+=t.radians(.5)}}var y=e(14),C=e(15);function F(t){var i,e,s=[["#E63946","#4CC9F0"],["#023047","#FFB703"],["#081c15","#52b788"],["#deaaff","#c0fdff"],["#fb5607","#ff006e"],["#355070","#b56576"]],n=s[Math.floor(Math.random()*s.length)];0===Math.floor(2*Math.random())?(i=n[0],e=n[1]):(i=n[1],e=n[0]);var o=Math.floor(4*Math.random()),r=[];t.setup=function(){t.createCanvas(400,400);for(var i=0;i<4;i++)i!==o&&r.push(new a(i));t.noFill()},t.draw=function(){t.background(i),t.stroke(e),t.strokeWeight(12),t.rect(0,0,t.width,t.height),t.strokeWeight(5);for(var s=0;s<r.length;s++){r[s].draw()}};var a=function(){function i(e){Object(y.a)(this,i),this.ripples=[],this.speed=.25,this.max_size=2.25*Math.sqrt(t.width*t.width+t.height*t.height),this.spawn_rate=6;for(var s=this.speed*this.spawn_rate*60,n=1+this.max_size/s;n>0;n--)this.ripples.push(n*s);0===e?(this.x=-t.width/10,this.y=-t.height/10):1===e?(this.x=t.width+t.width/10,this.y=-t.height/10):2===e?(this.x=-t.width/10,this.y=t.height+t.height/10):(this.x=t.width+t.width/10,this.y=t.height+t.height/10)}return Object(C.a)(i,[{key:"draw",value:function(){t.frameCount%(60*this.spawn_rate)===0&&this.ripples.push(0);for(var i=0;i<this.ripples.length;i++)this.ripples[i]>=this.max_size&&this.ripples.shift(),t.circle(this.x,this.y,this.ripples[i]),this.ripples[i]+=this.speed}}]),i}()}function A(t){var i,e,s;1===o(0,1)?(i=255,e=0):(i=0,e=255),t.setup=function(){t.createCanvas(400,400),s=new n,t.frameRate(20),t.strokeCap(t.SQUARE),t.strokeJoin(t.BEVEL),t.stroke(e)},t.draw=function(){t.background(i),s.draw()};var n=function(){function i(){Object(y.a)(this,i),this.steps=100,this.size=Math.max(t.width,t.height),this.min_size=Math.min(t.width,t.height),this.border=this.min_size/10,this.front_x=o(this.border,t.width-this.border),this.front_y=o(this.border,t.height-this.border),this.points=[[this.front_x,this.front_y]],this.strokeWeights=[],this.orientation=o(0,1),this.vert_const=2,this.hori_const=2.75}return Object(C.a)(i,[{key:"draw",value:function(){this.update();for(var i=0;i<this.points.length-1;i++){var e=this.points[i],s=this.points[i+1];t.strokeWeight(this.strokeWeights[i]),t.line(e[0],e[1],s[0],s[1])}}},{key:"update",value:function(){if(this.steps>0){var i=null,e=1;0===this.orientation?(i=o(0,1),o(0,50)<7&&(e=o(3,6))):(i=o(2,3),1===o(0,1)&&(e=o(3,6)));var s=this.front_x,n=this.front_y;if(0===i)n-=o(3,(this.front_y-this.border)/this.vert_const);else if(1===i){n+=o(3,(t.height-this.front_y-this.border)/this.vert_const)}else if(2===i){s+=o(3,(t.width-this.border-this.front_x)/this.hori_const)}else if(3===i){s-=o(3,(this.front_x-this.border)/this.hori_const)}this.points.push([s,n]),this.strokeWeights.push(e),this.front_x=s,this.front_y=n,0===this.orientation?this.orientation=1:this.orientation=0,this.steps--}else this.steps>-100?this.steps--:(this.steps=100,this.points=[[this.front_x,this.front_y]])}}]),i}();function o(t,i){return t+Math.floor(Math.random()*Math.floor(1+i-t))}}var E=Object(u.a)((function(t){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#1b3756"},main:{padding:t.spacing(2)}}}));function M(){var t=Math.floor(3*Math.random(0,1));return 0===t?Object(x.jsx)(c.a,{item:!0,style:{textAlign:"center"},xs:12,children:Object(x.jsx)(_.a,{sketch:O})}):1===t?Object(x.jsx)(c.a,{item:!0,style:{textAlign:"center"},xs:12,children:Object(x.jsx)(_.a,{sketch:F})}):2===t?Object(x.jsx)(c.a,{item:!0,style:{textAlign:"center"},xs:12,children:Object(x.jsx)(_.a,{sketch:A})}):void 0}function S(){var t=E();return Object(x.jsxs)("div",{className:t.root,children:[Object(x.jsx)(l.a,{}),Object(x.jsx)(d.a,{component:"main",className:t.main,maxWidth:"sm",children:Object(x.jsx)(f.a,{variant:"h6",id:"me_page_my_name",children:Object(x.jsx)(h.a,{strings:["<b>Alex Scott </b>","<b>Alex Scott,</b> UCSC Grad","<b>Alex Scott, </b> programmer","<b>Alex Scott, </b> computer enthusiast","<b>Alex Scott, </b> music nerd","<b>Alex Scott, </b> runner","<b>Alex Scott </b>"],typeSpeed:75,showCursor:!0,backDelay:1750,backSpeed:60,smartBackspace:!0,loop:!0,loopCount:3,style:{color:"white",weight:"bold"}})})}),Object(x.jsx)(d.a,{maxWidth:"sm",children:Object(x.jsxs)(c.a,{container:!0,spacing:2,justify:"center",alignItems:"center",children:[M(),Object(x.jsx)(c.a,{item:!0,xs:12,children:Object(x.jsx)("p",{id:"me_page_bio",children:"\ud83d\udc4b\ud83c\udffb Howdy! I currently work for iDTech as an online private instructor. Check out some of the links below, send me an email, or refresh the page for a new random doodle!"})})]})}),Object(x.jsx)(v,{})]})}var W=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,66)).then((function(i){var e=i.getCLS,s=i.getFID,n=i.getFCP,o=i.getLCP,r=i.getTTFB;e(t),s(t),n(t),o(t),r(t)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),W()}},[[45,1,2]]]);
//# sourceMappingURL=main.acc218de.chunk.js.map