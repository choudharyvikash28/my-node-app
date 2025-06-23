#!/bin/bash

# Load NVM environment
export NVM_DIR="/home/ec2-user/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 24

# Ensure ownership of directory (important)
sudo chown -R ec2-user:ec2-user /home/ec2-user/my-node-app

# Move into app directory
cd /home/ec2-user/my-node-app

# Use sudo to install dependencies safely
sudo npm install
