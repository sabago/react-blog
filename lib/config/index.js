const config = {
  app: {
    port: process.env.PORT || 5000
  },
  bucket : {
    slug: 'sabago-blog' || '15b45be0-f24b-11e7-8739-bd1a2fa1284e',
    read_key: 'PinWPdxna0GoTz0Otl5QIF9ExeuHwPzZ9CizD1BcViuDjzNd9K' || '',
    write_key: 'SnTZenhSh6CiWBd4sERPQuEH0yDoct6C3XKrdXbhaCFu8EUAEN' || '',
  }
}

module.exports = config;
