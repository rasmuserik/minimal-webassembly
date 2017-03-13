Module["asm"] = (function(global, env, buffer) {
 "almost asm";
 var STACKTOP = env.STACKTOP | 0;
 var Math_fround = global.Math.fround;
 const f0 = Math_fround(0);
 function _hello($0) {
  $0 = $0 | 0;
  var $1 = 0, label = 0, sp = 0;
  sp = STACKTOP;
  $1 = $0 + 1 | 0;
  return $1 | 0;
 }
 return {
  _hello: _hello
 };
});



