var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, ''), {
  branch: 'master',
  repo: 'https://github.com/timdoes/timdoes.git'
}, function(err) {
  if(err) {
    console.log('Error (master): ', err);
  }
});

ghpages.publish(path.join(__dirname, 'dist'), {
  branch: 'gh-pages',
  repo: 'https://github.com/timdoes/timdoes.github.io.git'
}, function(err) {
  if(err) {
    console.log('Error (gh-pages): ', err);
  }
});
