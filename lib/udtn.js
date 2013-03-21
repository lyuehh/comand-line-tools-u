function usage() {
  console.log('Usage: udtn 2012.1.1 2013.2.2');
}

function ubtn(d) {
  var d1 = d[0];
  var d2 = d[1];
  var microSeconds = (+d2-(+d1));
  var days = microSeconds / 1000 / 60 / 60 /24;
  var years = parseInt(days / 365, 10);
  console.log('间隔年数: ' + years);
  console.log('间隔天数: ' + days);
}

function processArgv(arg1, arg2) {
  if(!arg1 || !arg2) {
    usage();
    process.exit(1);
  }
  var arrArg1 = arg1.split('.');
  var arrArg2 = arg2.split('.');

  if(arrArg1.length !== 3 || arrArg2.length !== 3) {
    usage();
    process.exit(1);
  }
  var d1 = new Date(arrArg1[0], arrArg1[1]-1, arrArg1[2]);
  var d2 = new Date(arrArg2[0], arrArg2[1]-1, arrArg2[2]);
  return [d1, d2];
}

exports.ubtn = ubtn;
exports.processArgv = processArgv;

