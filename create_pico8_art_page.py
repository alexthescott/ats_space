import os
import requests
import sys
from bs4 import BeautifulSoup

HOST_LOCAL_CARTS = True
DOWNLOAD_PICO8_CARTS = True

# https://gist.github.com/vladignatyev/06860ec2040cb497f0f3
def progress(count, total, status=''):
    bar_len = 40
    filled_len = int(round(bar_len * count / float(total)))
    percents = round(100.0 * count / float(total), 1)
    bar = '=' * filled_len + '-' * (bar_len - filled_len)
    sys.stdout.write("\033[K" + '\r[%s] %s%s ...%s\r' % (bar, percents, '%', status))
    sys.stdout.flush()

def download_cart_images(cart_image_urls):
  for i, cart in enumerate(cart_image_urls):
    if "https" not in cart:
      continue
    cart_url = "{}/{}.png".format(cart,cart.split("/")[-1])
    cart_image = requests.get(cart_url).content
    cart_name = cart_url.split("/")[-1]
    progress(i, len(cart_image_urls), cart_name)
    with open("src/res/carts/{}".format(cart_name), 'wb') as handler:
      handler.write(cart_image)

def get_cart_image_tags(cart_image_urls, carts):
  cart_images = []
  for i, cart in enumerate(cart_image_urls):
    if "https" not in cart:
      continue
    cart_url = "{}/{}.png".format(cart,cart.split("/")[-1])
    cart_name = cart_url.split("/")[-1]
    img_tag = "<img loading=\"lazy\" src=\"{}\"></img>\n".format("../res/carts/{}".format(cart_name)) if HOST_LOCAL_CARTS else "<img loading=\"lazy\" src=\"{}\"></img>\n".format(cart_url)
    link_tag = "<a href=\"{}#readme\">{}</a>".format(carts[i], img_tag)
    cart_images.append(link_tag)
  return cart_images

if __name__ == "__main__":
  # create all directories
  if not os.path.exists("src"): os.mkdir("src")
  if not os.path.exists("src/pages"): os.mkdir("src/pages")
  if not os.path.exists("src/res/carts"): os.mkdir("src/res/carts")

  # format readme into img html element
  html_page = requests.get('https://raw.githubusercontent.com/alexthescott/Computational-Art-in-Pico-8/main/README.md') #Make a get request to retrieve the page
  soup = BeautifulSoup(html_page.content, 'html.parser')
  # regular formatting
  remove_chars = ["\n"," ", ")", "(", "#", "Oct", "Nov", "Aug", "Sep", "Aug", "July", "June", "May", "April", "Mar", "Feb", "Jan", "2021", "2022", "2023"]
  carts = soup.text
  for c in remove_chars:
    carts = carts.replace(c,"")
  cart_image_urls = carts.replace("github","raw.githubusercontent").replace("tree/","").split("[]")
  carts = carts.split("[]")
  if DOWNLOAD_PICO8_CARTS:
    download_cart_images(cart_image_urls)
  cart_images = "".join(get_cart_image_tags(cart_image_urls, carts))

  art_page = open('src/pages/art.html', 'w')
  art_html = """<!doctype html>
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
    <title>alexthescott.art</title>
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
    
  art_page.write(art_html)
  art_page.close()