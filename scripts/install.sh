#!/bin/bash

# Load NVM
export NVM_DIR="/home/ec2-user/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 24

# Run npm install
cd /home/ec2-user/my-node-app
npm install
