var request = require('request');

function usage() {
  console.log('Usage: uweather 101010200');
  console.log('Weather code can found here: https://gist.github.com/lyuehh/5211248');
}

function uweather(d) {
  if(!d) {
    d = '101010200';
  }
  var url = 'http://www.weather.com.cn/data/sk/' + d + '.html';
  request(url, function(err, rep, body) {
    if(body[0] !== '{') {
      usage();
      process.exit(1);
    }
    var obj = JSON.parse(body);
    console.log(JSON.stringify(obj, null, 2));
  });
}
exports.uweather = uweather;

