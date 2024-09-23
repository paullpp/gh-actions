const cache = require('../cache');

cache.set('key', 'value');

const handleApiRequest = (req, res) => {
  cache.get('key', (err, value) => {
    if (err) {
      console.log('Error getting value from cache:', err);
      return res.status(500).send('Internal server error');
    }

    return res.status(200).send({ data: value });
  });
};

module.exports = {
  handleApiRequest,
}