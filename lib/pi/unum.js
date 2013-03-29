var code = require('./all_code');

function usage() {
  console.log('Usage: unum 20');
}

function unum(s) {
  if(!s) {
    usage();
    process.exit(1);
  }
  return code[s];
}
exports.unum = unum;
