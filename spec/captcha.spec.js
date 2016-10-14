function Captcha(pat,op,lop,rop){
  this.gen = function(){
    let Left = new LeftOperand(pat,lop)
    let Op = new Operator(op)
    let Right = new RightOperand(pat,rop)
    if(pat === 1){
      return Left.echo()+;
    }
    else if(pat === 2)
    {}
  }
}
function Operator(op){
    var O = '';
    if(op === 1){O += ' + '}
    else if(op === 2){O += ' - '}
    else if(op === 3){O += ' * '}
    else if(op === 4){O += ' / '}
    this.echo =function() {return O;}
}
function LeftOperand(pat,lop){
  var L = '';
  if(pat===1){
    switch (lop) {
      case 1: L+='1';break;     case 2: L+='2';break;
      case 3: L+='3';break;     case 4: L+='4';break;
      case 5: L+='5';break;     case 6: L+='6';break;
      case 7: L+='7';break;     case 8: L+='8';break;
      case 9: L+='9';break;     case 0: L+='0';break;
    }
  }

  else if(pat===2){
    switch (lop) {
      case 1: L+='ONE';break;   case 2: L+='TWO';break;
      case 3: L+='THREE';break; case 4: L+='FOUR';break;
      case 5: L+='FIVE';break;  case 6: L+='SIX';break;
      case 7: L+='SEVEN';break; case 8: L+='EIGHT';break;
      case 9: L+='NINE';break;  case 0: L+='ZERO';break;
    }
  }
  this.echo =function() {return L;}
}
function RightOperand(pat,rop){
  if (pat=== 2){
    swich (rop){
      case 1: return '0'; break;
      case 2: return '1'; break;
      case 3: return '2'; break;
      case 4: return '3'; break;
      case 5: return '4'; break;
      case 6: return '5'; break;
      case 7: return '6'; break;
      case 8: return '7'; break;
      case 9: return '8'; break;
      case 10: return '9'; break;

    }
  }

  else if (pat=== 1){
    swich (rop){
      case 1: return 'ZERO'; break;
      case 2: return 'ONE'; break;
      case 3: return 'TWO'; break;
      case 4: return 'THREE'; break;
      case 5: return 'FOUR'; break;
      case 6: return 'FIVE'; break;
      case 7: return 'SIX'; break;
      case 8: return 'SEVEN'; break;
      case 9: return 'EIGHT'; break;
      case 10: return 'NINE'; break;

    }
  }
}

describe('Test Captcha App', function () {
describe('Pattern 1', function () {
  it('should return "1 + TWO" when input is 1,1,1,1', function () {
    let App = new Captcha(1,1,1,1)
    expect(App.gen).toEqual('1 + ONE');
  });


});
});
