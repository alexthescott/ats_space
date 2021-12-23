var scriptTag = document.createElement('script')
var choices = ['boxes.js', 'carpet_noise.js', 'circle_rain_sin.js', 'pond_water.js', 'random_walk.js', 'tiny_noise.js']
var choice = choices[Math.floor(Math.random() * choices.length)]
console.log(choice)
scriptTag.src = "./res/sketches/" + choice
document.body.appendChild(scriptTag)