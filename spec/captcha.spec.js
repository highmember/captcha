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
function LeftOperand(pat,lop){
  if(pat===1){
    switch (lop) {
      case 1: return '1';break;     case 2: return '2';break;
      case 3: return '3';break;     case 4: return '4';break;
      case 5: return '5';break;     case 6: return '6';break;
      case 7: return '7';break;     case 8: return '8';break;
      case 9: return '9';break;     case 0: return '0';break;
    }
  }

  else if(pat===2){
    switch (lop) {
      case 1: return 'ONE';break;   case 2: return 'TWO';break;
      case 3: return 'THREE';break; case 4: return 'FOUR';break;
      case 5: return 'FIVE';break;  case 6: return 'SIX';break;
      case 7: return 'SEVEN';break; case 8: return 'EIGHT';break;
      case 9: return 'NINE';break;  case 0: return 'ZERO';break;
    }
  }
}
function RightOperand(pat,rop){
  var R ='';
  if (pat=== 2){

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
  }

  else if (pat=== 1){

    swich (rop){

      case 1:  R+='ZERO'; break;
      case 2:  R+='ONE'; break;
      case 3:  R+='TWO'; break;
      case 4:  R+='THREE'; break;
      case 5:  R+='FOUR'; break;
      case 6:  R+='FIVE'; break;
      case 7:  R+='SIX'; break;
      case 8:  R+='SEVEN'; break;
      case 9:  R+='EIGHT'; break;
      case 10: R+='NINE'; break;

    }
  }

  this.echo = function(){return R;}
}

describe('Test Captcha App', function () {
describe('Pattern 1', function () {
  it('should return "1 + TWO" when input is 1,1,1,2', function () {
    let App = new Captcha(1,1,1,2)
    expect(App.gen).toEqual('1 + TWO');
  });


});
});
