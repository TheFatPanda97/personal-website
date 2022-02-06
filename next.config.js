const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  images: {
    domains: ['raw.githubusercontent.com', 'localhost'],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/home/welcome',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about/who-am-i',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/projects/who-am-i',
        permanent: true,
      },
    ];
  },
};
