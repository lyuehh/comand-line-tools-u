function usage() {
  console.log('Usage: uweek 2012.1.1');
}

function uweek(date) {
  if(!date) {
    usage();
    process.exit(0);
  }
  var arr = date.split('.');
  if(arr.length !== 3) {
    usage();
    process.exit(0);
  }
  var year = parseInt(arr[0], 10);
  var month = parseInt(arr[1], 10);
  var day = parseInt(arr[2], 10);

  if(year < 1582) {
    console.log('只能计算1582年以后的,谢谢');
    process.exit(1);
  }
  if(month < 3) {
    year -= 1;
    month = 12 + month;
  }
  var yearStr = year.toString();

  var w,c,y,m,d;
  var week;
  c = parseInt(yearStr[0] + yearStr[1], 10);
  y = parseInt(yearStr[2] + yearStr[3], 10);
  m = month;
  d = day;
  console.log(c);
  console.log(y);
  console.log(m);
  console.log(d);
  w = parseInt(y,10) + parseInt(y/4, 10) + parseInt(c/4, 10) - 2*c + parseInt(26*(m+1)/10, 10) + d -1;
  week = w % 7;
  var map = {
    0: '星期天',
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六'
  };
  console.log(map[week]);
}
exports.uweek = uweek;

