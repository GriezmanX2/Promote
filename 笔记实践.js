let obj = {
  a: 1,
  b: 'bb',
  c: undefined,
  d: null,
  e: true,
  f: {
      ff: 11
  },
  g: function(){
      console.log('g');
  },
  h: Symbol('hh')

};

let cloneObj = JSON.parse(JSON.stringify(obj));

console.log(cloneObj)

console.log(obj[Symbol.toPrimitive])