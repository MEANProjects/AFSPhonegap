# AFSPhonegap
Angular full-stack with phonegap support

This project is extended from https://github.com/DaftMonk/generator-angular-fullstack

The goal of this project is to create a fullstack app with following possibilities
1. client and server can be served from same machine (IP)
2. client and server can be served from different machines (IPS)
3. client can be a phonegap app

Note: good to have python version 2.x.x.

Here are the steps to test the above possibilities

- Clone git clone https://github.com/kannach/AFSPhonegap.git
- cd AFSPhonegap
- bower install

[optional stpes]
   - sudo npm install -g grunt
   - sudo npm uninstall grunt-contrib-imagemin

- sudo npm install

building
--------
grunt build:dist

configure server IP
--------------------
- replace the IP in client/components/socket/socket.service.js with the local IP of the development PC

Testing possibility #1
----------------------
- grunt serve
- try loggin in
- add, delete things

Testing possibility #2
----------------------
- Deploy the client in the different port. I use aptana studio to create a web project -> import client code -> run index.html as javascript app
- try logging in 
- add, delete things

Testing possibility #3
----------------------
- grunt build:dist
- cd mobileapp/phonegap/afsphonegap/plaforms/android/assets/www
- edit index.html
- remove the base tag from html head
- add <script type="text/javascript" src="cordova.js"></script> as a first script tag at the end of the html
- go back to mobileapp/phonegap/afsphonegap
- cordova build android
- try installing the resulting apk in your device
- make sure server and the phonegap app connects to the same network (I use Wifi)
- login
- add, delete things

Note: socket connection is yet to be tested
