#!/bin/bash

# Load NVM environment
export NVM_DIR="/home/ec2-user/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 24

cd /home/ec2-user/my-node-app
nohup npm start > app.log 2>&1 &
