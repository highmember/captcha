function Captcha(pat,op,lop,rop){
  this.gen = function(){
    let Left = new LeftOperand(pat,lop)
    let Op = new Operator(op)
    let Right = new RightOperand(pat,rop)
    if(pat === 1){
      return Left.echo()+Op.echo()+Right.echo();
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
    this.toString() =function() {return O;}
}
function LeftOperand(lop){
  var L = '';
    switch (lop) {
      case 1: L+='ONE';break;   case 2: L+='TWO';break;
      case 3: L+='THREE';break; case 4: L+='FOUR';break;
      case 5: L+='FIVE';break;  case 6: L+='SIX';break;
      case 7: L+='SEVEN';break; case 8: L+='EIGHT';break;
      case 9: L+='NINE';break;  case 0: L+='ZERO';break;
    }
  this.toString() = function() {return L;}
}
function RightOperand(rop){
  var R ='';
    swich (rop){
      case 1:  R+='0'; break;
      case 2:  R+='1'; break;
      case 3:  R+='2'; break;
      case 4:  R+='3'; break;
      case 5:  R+='4'; break;
      case 6:  R+='5'; break;
      case 7:  R+='6'; break;
      case 8:  R+='7'; break;
      case 9:  R+='8'; break;
      case 10: R+='9'; break;
    }
  this.toString = function(){return R;}
}

describe('Test Captcha App', function () {
describe('Pattern 1', function () {
  it('should return "1 + ONE" when input is 1,1,1,1', function () {
    let App = new Captcha(1,1,1,1)
    expect(App.gen).toEqual('1 + ONE');
  });


});
});
