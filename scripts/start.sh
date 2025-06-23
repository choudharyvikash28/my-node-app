#!/bin/bash

# Load NVM for node and npm
export NVM_DIR="/home/ec2-user/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 24

# Go to app directory and start it
cd /home/ec2-user/my-node-app
nohup npm start > app.log 2>&1 &
