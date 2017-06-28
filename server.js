const express = require('express');
const path = require('path');

// create the App
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (Object.keys(process.env).indexOf('NODE_ENV') >= 0) {
    if (req.headers['x-forwarded-proto'] === 'http') {
      next();
    } else {
      res.redirect('http://' + req.hostname + req.url);
    }
  } else {
    next();
  }
});

app.use(express.static('public'));

app.route('/*')
  .get((req, res) => {
    res.sendFile(path.resolve(`${__dirname}/public/index.html`));
  });

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
})
