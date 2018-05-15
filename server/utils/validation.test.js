const expect=require('expect');
const{isRealString}=require('./validation');

describe('isRealString',()=>{
  it('should reject non-String values',()=>{
    var res=isRealString(98);
    expect(res).toBe(false);
  });
  it('should reject String with only space',()=>{
    var res=isRealString('  ');
    expect(res).toBe(false);
  });
  it('should allow Stringwith non-space characters',()=>{
    var res=isRealString('   pavi  ');
    expect(res).toBe(true);
  });
});
