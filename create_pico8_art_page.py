import os
import requests
import sys
from bs4 import BeautifulSoup

HOST_LOCAL_CARTS = True
DOWNLOAD_PICO8_CARTS = False
DOWNLOAD_PICO8_JS = False

# https://gist.github.com/vladignatyev/06860ec2040cb497f0f3
def progress(count, total, status=''):
    bar_len = 40
    filled_len = int(round(bar_len * count / float(total)))
    percents = round(100.0 * count / float(total), 1)
    bar = '=' * filled_len + '-' * (bar_len - filled_len)
    sys.stdout.write("\033[K" + '\r[%s] %s%s ...%s\r' % (bar, percents, '%', status))
    sys.stdout.flush()

def sterilize_readme_carts(carts):
  remove_chars = ["\n"," ", ")", "(", "#", "Oct", "Nov", "Aug", "Sep", "Aug", "July", "June", "May", "April", "Mar", "Feb", "Jan", "2021", "2022", "2023"]
  for c in remove_chars:
    carts = carts.replace(c,"")
  carts = carts.split("[]")
  return [cart for cart in carts if "https" in cart]

def download_cart_images(cart_image_urls):
  for i, cart in enumerate(cart_image_urls):
    cart_url = "{}/{}.png".format(cart,cart.split("/")[-1])
    cart_image = requests.get(cart_url).content
    cart_name = cart_url.split("/")[-1]
    progress(i, len(cart_image_urls), cart_name)
    with open("src/res/carts/images/{}".format(cart_name), 'wb') as handler:
      handler.write(cart_image)

def get_cart_image_tags(cart_image_urls, carts):
  cart_images = []
  for i, cart in enumerate(cart_image_urls):
    cart_url = "{}/{}.png".format(cart,cart.split("/")[-1])
    cart_name = cart_url.split("/")[-1]
    img_tag = "<img class=\"h-auto\" loading=\"lazy\" src=\"{}\"></img>\n".format("../res/carts/images/{}".format(cart_name)) if HOST_LOCAL_CARTS else "<img loading=\"lazy\" src=\"{}\"></img>\n".format(cart_url)
    # load github README
    # link_tag = "<a href=\"{}#readme\">{}</a>".format(carts[i], img_tag)
    link_tag = "<a href=\"../carts/{}.html\">{}</a>".format(cart_name[:cart_name.index(".")], img_tag)
    cart_images.append(link_tag)
  return cart_images

def create_cart_pages(carts, cart_image_urls):
  for i, cart in enumerate(cart_image_urls):
    cart_name = cart.split("/")[-1]
    cart_url = "{}/{}.png".format(cart,cart.split("/")[-1])
    cart_js = "{}/{}.js".format(cart,cart.split("/")[-1])
    cart_readme = "{}/README.md".format(cart)
    cart_html = "{}/index.html".format(cart)

    # download cart javascript
    if DOWNLOAD_PICO8_JS:
      progress(i*2-1, len(cart_image_urls)*2, cart_js.split("/")[-1])
      raw_cart_js = requests.get(cart_js).content
      with open("src/res/carts/html/{}".format(cart_js.split("/")[-1]), 'wb') as handler:
        handler.write(raw_cart_js)
      progress(i*2, len(cart_image_urls)*2, "{}.html".format(cart_name))
      raw_cart_html = requests.get(cart_html).content
      with open("src/res/carts/html/{}.html".format(cart_name), 'wb') as handler:
        handler.write(raw_cart_html)

    progress(i, len(cart_image_urls), "{}/README.md".format(cart_name))
    raw_cart_readme = requests.get(cart_readme).text.split("```")[-2].replace(" Lua\n", "")

    # create cart html page
    art_page = open('src/carts/{}.html'.format(cart_name), 'w')
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

      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
      <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui">
      <link href="../output.css" rel="stylesheet">
      <link rel="icon" href="../res/favicon-32.png" type="image/png">
      <title>alexthescott.""" + cart_name.replace("_", " ") + """</title>
    </head>

    <body class="mt-2 bg-black text-white font-sans">
      <div class="flex flex-row justify-left">
        <a href="../pages/art.html" class="ml-4 nav_icon" aria-label="Back to art gallery">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg></a>
        <h1 class="m-5 text-3xl">alexthescott.""" + cart_name.replace("_", " ") + """</h1>
      </div>

      <div class="sm:text-left flex flex-col m-4 sm:flex-row mt-0">
        <div class="flex items-center sm:items-start w-full sm:w-auto">
          <iframe src="../res/carts/html/""" + "{}.html".format(cart_name) + """\" class="pico_8_iframe m-5" title=\"""" + cart_name.replace("_", " ").title() + """ - Pico-8 art cart\"></iframe>
        </div>
        <div class="flex items-start overflow-x-auto">
          <pre><code class="language-lua m-4 text-sm">""" + raw_cart_readme +  """</code></pre>
        </div>
      </div>
    </body></html>
    """
      
    art_page.write(art_html)
    art_page.close()

if __name__ == "__main__":
  # create all directories
  if not os.path.exists("src"): os.mkdir("src")
  if not os.path.exists("src/pages"): os.mkdir("src/pages")
  if not os.path.exists("src/carts"): os.mkdir("src/carts")
  if not os.path.exists("src/res"): os.mkdir("src/res")
  if not os.path.exists("src/res/carts"): os.mkdir("src/res/carts")
  if not os.path.exists("src/res/carts/images"): os.mkdir("src/res/carts/images")
  if not os.path.exists("src/res/carts/js"): os.mkdir("src/res/carts/js")

  # format readme into img html element
  html_page = requests.get('https://raw.githubusercontent.com/alexthescott/Computational-Art-in-Pico-8/main/README.md') #Make a get request to retrieve the page
  soup = BeautifulSoup(html_page.content, 'html.parser')
  # regular formatting
  carts = sterilize_readme_carts(soup.text)
  cart_image_urls = [cart.replace("github","raw.githubusercontent").replace("tree/","") for cart in carts]
  if DOWNLOAD_PICO8_CARTS:
    download_cart_images(cart_image_urls)
  cart_images = "".join(get_cart_image_tags(cart_image_urls, carts))
  create_cart_pages(carts, cart_image_urls)

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
    <link rel="icon" href="../res/favicon-32.png" type="image/png">
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