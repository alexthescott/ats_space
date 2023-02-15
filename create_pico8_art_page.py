import os
import requests
from bs4 import BeautifulSoup

# format readme into img html elmeent
html_page = requests.get('https://raw.githubusercontent.com/alexthescott/Computational-Art-in-Pico-8/main/README.md') #Make a get request to retrieve the page
soup = BeautifulSoup(html_page.content, 'html.parser')
# regular formatting
remove_chars = ["\n"," ", ")", "(", "#", "Oct", "Nov", "Aug", "Sep", "Aug", "July", "June", "May", "April", "Mar", "Feb", "Jan", "2021", "2022", "2023"]
carts = soup.text
for c in remove_chars:
    carts = carts.replace(c,"")
cart_image_urls = carts.replace("github","raw.githubusercontent").replace("tree/","").split("[]")
carts = carts.split("[]")
cart_images = []
for i,cart in enumerate(cart_image_urls):
    if "https" not in cart:
        continue
    cart_url = "{}/{}.png".format(cart,cart.split("/")[-1])
    img_tag = "<img loading=\"lazy\" src=\"{}\"></img>\n".format(cart_url)
    link_tag = "<a href=\"{}#readme\">{}</a>".format(carts[i], img_tag)
    cart_images.append(link_tag)
cart_images = "".join(cart_images)


if not os.path.exists("src"): os.mkdir("src")
if not os.path.exists("src/pages"): os.mkdir("src/pages")
f = open('src/pages/art.html', 'w')

# the html code which will go in the file GFG.html
html_template = """<!doctype html>
<html>

<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-D3GB85S48Y"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-D3GB85S48Y');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../output.css" rel="stylesheet">
  <link rel="icon" href="../res/logo192.png" rel="image/x-icon">
  <title>alexthescott.about</title>
</head>

<body class="mt-2 bg-black text-white font-sans">
  <div class="flex flex-row justify-left">
    <a href="../index.html" class="ml-4 nav_icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg></a>
    <h1 class="m-5 text-3xl">alexthescott.art</h1>
  </div>
  <div class="m-4 max-w-4xl sm:items-start items-center grid grid-cols-4 sm:grid-cols-5 gap-4 sm:flex-row mt-0 text-justify">
""" + cart_images + """
  </div>
</body>
"""
  
# writing the code into the file
f.write(html_template)
  
# close the file
f.close()