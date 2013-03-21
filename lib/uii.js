var request = require('request');

function usage() {
  console.log('Usage: uii 8.8.8.8');
}

function uii(d) {
  if(!d) {
    usage();
    process.exit(1);
  }
  if(d.split('.').length !== 4) {
    usage();
    process.exit(1);
  }
  var url = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=';
  var u = url + d;
  request(u, function(err, rep, body) {
    var data = body.slice(body.indexOf('{'), body.lastIndexOf('}')+1);
    var obj = JSON.parse(data);
    console.log(JSON.stringify(obj, null, 2));
  });
}
exports.uii = uii;

