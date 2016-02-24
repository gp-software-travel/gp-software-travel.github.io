# gp-software-travel.github.io
Social Network

Development guide

1. npm install 

2.  P.S. Might need GraphicsMagick or ImageMagick. 
  
  Ubuntu: 
  
    apt-get install imagemagick
    
    apt-get install graphicsmagick

  Mac OS X:
  
    brew install imagemagick
    
    brew install graphicsmagick

3. bower install

4. Emulate REST API

  install: npm install json-server -g
  
5. run application:  
json-server db.json (it must obtain port 3000 or will fail)
gulp watch (will start browser with app)