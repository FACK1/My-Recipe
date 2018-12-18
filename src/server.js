const app = require('./app.js');

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Our app is running on http://localhost:${port}`);
});
