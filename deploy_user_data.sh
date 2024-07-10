#!/bin/bash
# This user data is used to immediately deploy the node-js-hello app on an ubuntu server
apt-get update
apt-get install nodejs -y
node -v
apt-get install npm -y
apt-get install git-all -y
git clone https://github.com/s-oluwade/nodejs-hello-app.git
cd nodejs-hello-app
npm install
node app.js

