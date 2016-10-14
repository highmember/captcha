function Captcha(pat,op,lop,rop){
    var L = new LeftOperand(pat,lop);
    var O = new Operator(op);
    var R = new RightOperand(rop);
  this.gen = function(){
    if(pat === 1)       {return L.toString() + O.toString() + R.toString();}
    else if(pat === 2)  {return L.toString() + O.toString() + R.toString();}
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

function LeftOperand(patt,lope){
  l = ''
  if(patt===2){
    switch (lope) {
      case 1:l += 'ONE';break;   case 2:l += 'TWO';break;
      case 3:l += 'THREE';break; case 4:l += 'FOUR';break;
      case 5:l += 'FIVE';break;  case 6:l += 'SIX';break;
      case 7:l += 'SEVEN';break; case 8:l +=  'EIGHT';break;
      case 9:l += 'NINE';break;  case 0:l +=  'ZERO';break;
    }
  }

  else if(patt===1){
    switch (lope){
      case 0:l +=  '0'; break;     case 1:l +=  '1'; break;
      case 2:l +=  '2'; break;     case 3:l +=  '3'; break;
      case 4:l +=  '4'; break;     case 5:l +=  '5'; break;
      case 6:l +=  '6'; break;     case 7:l +=  '7'; break;
      case 8:l +=  '8'; break;     case 9:l +=  '9'; break;
    }
  }
  this.toString = function(){return l}
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
  it('should return "3 - FOUR" when input is 1,2,4,3', function () {
    var App = new Captcha(1,2,3,4)
    expect(App.gen()).toEqual('3 - FOUR');
  });
  it('should return "6 / SEVEN" when input is 1,4,6,7', function () {
    var App = new Captcha(1,4,6,7)
    expect(App.gen()).toEqual('6 / SEVEN');
  });

});
});
