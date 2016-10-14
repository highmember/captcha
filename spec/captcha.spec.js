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

  else if (pat=== 2){

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
