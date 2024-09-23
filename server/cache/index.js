const Redis = require('ioredis');

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
const cache = new Redis(redisUrl);

cache.on('error', (err) => {
  console.log('Error connecting to Redis:', err);
});

module.exports = cache;