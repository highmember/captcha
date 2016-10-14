function Captcha(pat,op,lop,rop){
  this.gen = function(){
    if(pat === 1)
    {}
    else if(pat === 2)
    {}
  }
}
function Operator(op){

    if(op === 1){return ' + '}
    else if(op === 2){return ' - '}
    else if(op === 3){return ' * '}
    else if(op === 4){return ' / '}
}
function LeftOperand(){
  this.lop = function(){

  }
}
function RightOperand(){
  this.rop = function(){

  }
}

describe('Test Captcha App', function () {
describe('Pattern 1', function () {
  it('should return "1 + TWO" when input is 1,1,1,2', function () {
    let App = new Captcha(1,1,1,2)
    expect(App.gen).toEqual('1 + TWO');
  });


});
});
