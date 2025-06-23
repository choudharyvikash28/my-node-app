#!/bin/bash

cd /home/ec2-user/my-node-app

# Set correct ownership
sudo chown -R ec2-user:ec2-user .

# Run npm install as ec2-user with environment loaded
sudo runuser -l ec2-user -c 'cd /home/ec2-user/my-node-app && source ~/.nvm/nvm.sh && nvm use 24 && npm install'
