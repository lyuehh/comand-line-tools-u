var should = require("should");
var uweek = require("../lib/uweek").uweek;

describe('uweek', function() {
  it('uweek', function() {
    uweek("2012.1.1").should.equal('星期天');
    uweek("1999.1.1").should.equal('星期五');
    uweek("1998.2.1").should.equal('星期天');
    uweek("1998.2.2").should.equal('星期一');
    uweek("1998.2.3").should.equal('星期二');
  });
});

