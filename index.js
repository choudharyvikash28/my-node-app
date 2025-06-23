const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const deployTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'long'
  });

  res.send(`
    <html>
      <head>
        <title>Deployment Confirmation - AWS EC2</title>
      </head>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; color: #333; padding: 40px;">
        <div style="max-width: 800px; margin: auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <h1 style="color: #2E86C1;">🚀 Application Deployed Successfully!</h1>
          <p style="font-size: 18px;">Hello, I am <strong style="color: #117A65;">Vikash Choudhary</strong>.</p>
          <p style="font-size: 16px; color: #555;">This application was successfully deployed to an <strong>AWS EC2</strong> instance using a fully automated CI/CD pipeline.</p>
          
          <h3 style="margin-top: 30px;">🔧 Tools & Technologies Used:</h3>
          <ul style="line-height: 1.8;">
            <li>✅ <strong>GitHub</strong> – source code repository</li>
            <li>✅ <strong>AWS CodePipeline</strong> – automates build and deploy</li>
            <li>✅ <strong>AWS CodeDeploy</strong> – handles EC2 deployment</li>
            <li>✅ <strong>Amazon EC2</strong> – host environment</li>
            <li>✅ <strong>Node.js</strong> – backend server runtime</li>
            <li>✅ <strong>NVM + npm</strong> – package manager and versioning</li>
          </ul>

          <h3 style="margin-top: 30px;">📋 Deployment Details:</h3>
          <p><strong>Deployed On:</strong> ${deployTime}</p>
          <p><strong>Deployed By:</strong> Vikash Choudhary</p>
          <p><strong>Current Branch:</strong> main (auto-triggered on push)</p>

          <h3 style="margin-top: 30px;">📘 Deployment Steps Summary:</h3>
          <ol style="line-height: 1.8;">
            <li>Pushed code to GitHub</li>
            <li>CodePipeline detected the push and started</li>
            <li>CodeDeploy deployed the app to EC2 instance</li>
            <li>Scripts (install.sh, start.sh) handled npm install and app start</li>
          </ol>

          <p style="margin-top: 40px; font-size: 14px; color: #888;">&copy; 2025 Vikash Choudhary. All rights reserved.</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`🚀 App running on port ${port}`);
});
