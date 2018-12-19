const app = require('./app.js');
require('env2')('config.env');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Our app is running on http://localhost:${PORT}`);
});
