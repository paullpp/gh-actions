const express = require('express');
const router = express.Router();
const app = express();
const port = 8000;
const cors = require('cors');

const { handleApiRequest } = require('./server/data');
app.use(cors());

app.use('/', router);
router.get('/api', handleApiRequest);

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});