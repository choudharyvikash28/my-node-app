const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1 style="color: #2E86C1; font-family: Arial, sans-serif;">
      🚀 Deployment Successful!
    </h1>
    <p style="font-size: 18px; color: #555;">
      Your Node.js app is now live on an <strong>EC2 instance</strong>, deployed through 
      <strong>AWS CodeDeploy</strong> and <strong>CodePipeline</strong> 🎯.
    </p>
    <p style="color: green;">
      ✅ This update was triggered by a GitHub push and deployed automatically.
    </p>
    <p>
      🕒 Time: ${new Date().toLocaleString()}
    </p>
  `);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
