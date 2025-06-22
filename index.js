const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => res.send('🚀 Hello from AWS CodePipeline deployed Node App!'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
