const path = require('path');
module.exports = {
  root: 'src',
  base: '/portfolio/',
  build: {
    outDir: '../dist'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
};
