function Captcha(pat,op,lop,rop){
    var L = new LeftOperand(lop);
    var O = new Operator(op);
    var R = new RightOperand(rop);
  this.gen = function(){
    if(pat === 1){
      return R.toString() + O.toString() + L.toString();
    }
    else if(pat === 2){
      return L.toString() + O.toString() + R.toString();
    }
  }
}
function Operator(ope){
  this.toString = function() {
    if(ope === 1){return ' + '}
    else if(ope === 2){return  ' - '}
    else if(ope === 3){return ' * '}
    else if(ope === 4){return ' / '}
  }
}
function LeftOperand(lope){
  this.toString = function(){
    switch (lope) {
      case 1:return 'ONE';break;   case 2:return 'TWO';break;
      case 3:return 'THREE';break; case 4:return 'FOUR';break;
      case 5:return 'FIVE';break;  case 6:return 'SIX';break;
      case 7:return 'SEVEN';break; case 8:return 'EIGHT';break;
      case 9:return 'NINE';break;  case 0:return 'ZERO';break;
    }
  }
}
function RightOperand(rope){
  this.toString = function(){
    switch (rope){
      case 0:return '0'; break;
      case 1:return '1'; break;
      case 2:return '2'; break;
      case 3:return '3'; break;
      case 4:return '4'; break;
      case 5:return '5'; break;
      case 6:return '6'; break;
      case 7:return '7'; break;
      case 8:return '8'; break;
      case 9:return '9'; break;

    }
  }
}

describe('Test Captcha App', function () {
describe('Pattern 1', function () {
  it('should return "1 + ONE" when input is 1,1,1,1', function () {
    var App = new Captcha(1,1,1,1)
    expect(App.gen()).toEqual('1 + ONE');
  });


});
});
