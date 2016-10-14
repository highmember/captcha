function Captcha(pat,op,lop,rop){
    var L = new LeftOperand(pat,lop);
    var O = new Operator(op);
    var R = new RightOperand(pat,rop);
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

function RightOperand(patt,rope){
  r = ''
  if(patt===1){
    switch (rope) {
      case 1:r += 'ONE';break;   case 2:r += 'TWO';break;
      case 3:r += 'THREE';break; case 4:r += 'FOUR';break;
      case 5:r += 'FIVE';break;  case 6:r += 'SIX';break;
      case 7:r += 'SEVEN';break; case 8:r +=  'EIGHT';break;
      case 9:r += 'NINE';break;  case 0:r +=  'ZERO';break;
    }
  }

  else if(patt===2){
    switch (rope){
      case 0:r +=  '0'; break;     case 1:r +=  '1'; break;
      case 2:r +=  '2'; break;     case 3:r +=  '3'; break;
      case 4:r +=  '4'; break;     case 5:r +=  '5'; break;
      case 6:r +=  '6'; break;     case 7:r +=  '7'; break;
      case 8:r +=  '8'; break;     case 9:r +=  '9'; break;
    }
  }
  this.toString = function(){return r}
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
  it('should return "3 / THREE" when input is 1,4,3,3', function () {
    var App = new Captcha(1,4,3,3)
    expect(App.gen()).toEqual('3 / THREE');
  });
  it('should return "5 / SEVEN" when input is 1,4,5,7', function () {
    var App = new Captcha(1,4,5,7)
    expect(App.gen()).toEqual('5 / SEVEN');
  });
  it('should return "3 * THREE" when input is 1,3,3,3', function () {
    var App = new Captcha(1,4,3,3)
    expect(App.gen()).toEqual('3 * THREE');
  });
  it('should return "SIX + 9" when input is 2,1,6,9', function () {
    let App = new Captcha(2,1,6,9)
    expect(App.gen()).toEqual('SIX + 9');
  });
  it('should return "FOUR - 8" when input is 2,2,4,8', function () {
    let App = new Captcha(2,2,4,8)
    expect(App.gen()).toEqual('FOUR - 8');
   });
   it('should return "FIVE - 9" when input is 2,2,5,9', function () {
     let App = new Captcha(2,2,5,9)
     expect(App.gen()).toEqual('FIVE - 9');
    });
    it('should return "THREE / 7" when input is 2,4,3,7', function () {
      let App = new Captcha(2,4,3,7)
      expect(App.gen()).toEqual('THREE / 7');
     });
     it('should return "SEVEN + 8" when input is 2,1,7,8', function () {
       let App = new Captcha(2,1,7,8)
       expect(App.gen()).toEqual('SEVEN + 8');
      });
      it('should return "ONE + 1" when input is 2,1,1,1', function () {
        let App = new Captcha(2,1,1,1)
        expect(App.gen()).toEqual('ONE + 1');
       });
       it('should return "FIVE / 6" when input is 2,4,5,6', function () {
         let App = new Captcha(2,4,5,6)
         expect(App.gen()).toEqual('FIVE / 6');
        });
        it('should return "FOUR * 5" when input is 2,3,4,5', function () {
          let App = new Captcha(2,3,4,5)
          expect(App.gen()).toEqual('FOUR * 5');
         });
         it('should return "TWO - 2" when input is 2,2,2,2', function () {
           let App = new Captcha(2,2,2,2)
           expect(App.gen()).toEqual('TWO - 2');
          });
          it('should return "THREE + 4" when input is 2,1,3,4', function () {
            let App = new Captcha(2,1,3,4)
            expect(App.gen()).toEqual('THREE + 4');
           });

});
});
