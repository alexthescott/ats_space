(this.webpackJsonpalex=this.webpackJsonpalex||[]).push([[0],{37:function(t,e,i){},38:function(t,e,i){},46:function(t,e,i){"use strict";i.r(e);var n=i(1),s=i.n(n),a=i(20),c=i.n(a),o=(i(37),i(38),i(21)),r=i.n(o),h=i(65),l=i(66),d=i(64),u=i(67),p=i(62),b=i.p+"static/media/github-icon.ff5b408c.svg",f=i.p+"static/media/linkedin-icon.e3403041.svg",g=i.p+"static/media/email-icon.23386db3.svg",m=i.p+"static/media/spotify-icon.261509b7.svg",j=i(2),x=Object(p.a)((function(t){return{footer:{padding:t.spacing(2),marginTop:"auto",backgroundColor:"#15283d"}}}));function v(){var t=x();return Object(j.jsx)("footer",{className:t.footer,children:Object(j.jsx)(d.a,{maxWidth:"sm",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{class:"page_icon",src:b,alt:"github icon",onClick:function(){return w("https://github.com/alexthescott")}}),Object(j.jsx)("img",{class:"page_icon",src:f,alt:"linkedin icon",onClick:function(){return w("https://www.linkedin.com/in/alex-scott-b1a591152/")}}),Object(j.jsx)("img",{class:"page_icon",src:m,alt:"spotify icon",onClick:function(){return w("https://open.spotify.com/user/bassguitar1234")}}),Object(j.jsx)("img",{class:"page_icon",src:g,alt:"email icon",onClick:function(){return w("mailto:atscott@ucsc.edu")}})]})})})}function w(t){console.log("opening ",t,"in a new tab"),window.open(t).focus()}var O=i(16),k=i.n(O);function C(t){var e,i=[["#273043","#F02D3A","#EFF6EE"],["#1E2019","#E2C044","#587B7F"],["#15A0A2","#4A8FE7","#44E5E7"],["#5C95FF","#B9E6FF","#F87575"],["#2C302E","#474A48","#909590"],["#243010","#829E2E","#AFCC66"]],n=i[Math.floor(Math.random()*i.length)],s=0;t.setup=function(){t.createCanvas(200,200),t.noiseDetail(3),t.noStroke(),e=0==(e=t.map(t.random(0,1),0,1,-1.5,1.5))?1:e},t.draw=function(){t.background(n[0]);for(var i=t.width/4,a=t.height/4,c=0;c<i;c++)for(var o=0;o<a;o++){var r=.05*c/e,h=.05*o*e,l=t.cos(s),d=t.sin(s),u=t.noise(r,h,l+d);u>=.55?(t.fill(n[1]),t.square(4*c,4*o,4)):u>.455&&(t.fill(n[2]),t.square(4*c,4*o,4))}s+=t.radians(.5)}}var F=i(27),y=i(28);function E(t){var e,i,n=[["#E63946","#4CC9F0"],["#023047","#FFB703"],["#081c15","#52b788"],["#deaaff","#c0fdff"],["#fb5607","#ff006e"],["#355070","#b56576"]],s=n[Math.floor(Math.random()*n.length)];0==Math.floor(2*Math.random())?(e=s[0],i=s[1]):(e=s[1],i=s[0]);var a=Math.floor(4*Math.random()),c=[];t.setup=function(){t.createCanvas(200,200);for(var e=0;e<4;e++)e!=a&&c.push(new o(e));t.noFill()},t.draw=function(){t.background(e),t.stroke(i),t.strokeWeight(12),t.rect(0,0,t.width,t.height),t.strokeWeight(5);for(var n=0;n<c.length;n++){c[n].draw()}};var o=function(){function e(i){Object(F.a)(this,e),this.ripples=[],this.speed=.25,this.max_size=2.25*Math.sqrt(t.width*t.width+t.height*t.height),this.spawn_rate=4;for(var n=this.speed*this.spawn_rate*60,s=1+this.max_size/n;s>0;s--)this.ripples.push(s*n);0==i?(this.x=-t.width/10,this.y=-t.height/10):1==i?(this.x=t.width+t.width/10,this.y=-t.height/10):2==i?(this.x=-t.width/10,this.y=t.height+t.height/10):(this.x=t.width+t.width/10,this.y=t.height+t.height/10)}return Object(y.a)(e,[{key:"draw",value:function(){t.frameCount%(60*this.spawn_rate)==0&&this.ripples.push(0);for(var e=0;e<this.ripples.length;e++)this.ripples[e]>=this.max_size&&this.ripples.shift(),t.circle(this.x,this.y,this.ripples[e]),this.ripples[e]+=this.speed}}]),e}()}var M=Object(p.a)((function(t){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#1b3756"},main:{padding:t.spacing(2)}}}));function _(){var t=Math.round(1*Math.random(0,1));return console.log(t),0===t?Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsx)(k.a,{sketch:C})}):Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsx)(k.a,{sketch:E})})}function A(){var t=M();return Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsx)(l.a,{}),Object(j.jsx)(d.a,{component:"main",className:t.main,maxWidth:"sm",children:Object(j.jsx)(u.a,{variant:"h6",id:"me_page_my_name",children:Object(j.jsx)(r.a,{strings:["<b>Alex Scott,</b> UCSC Grad","<b>Alex Scott, </b> Programmer","<b>Alex Scott, </b> Music Nerd","<b>Alex Scott, </b> Runner","<b>Alex Scott </b>"],typeSpeed:75,showCursor:!0,backDelay:1e3,backSpeed:60,smartBackspace:!0,loop:!0,loopCount:3,style:{color:"white",weight:"bold"}})})}),Object(j.jsx)(d.a,{maxWidth:"sm",children:Object(j.jsxs)(h.a,{container:!0,children:[_(),Object(j.jsx)(h.a,{item:!0,xs:12})]})}),Object(j.jsx)(v,{})]})}var S=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,69)).then((function(e){var i=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;i(t),n(t),s(t),a(t),c(t)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root")),S()}},[[46,1,2]]]);
//# sourceMappingURL=main.c9dd9d10.chunk.js.map