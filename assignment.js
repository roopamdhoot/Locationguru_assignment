


function datatype(){
console.log(Object.prototype.toString.call(45));
console.log(Object.prototype.toString.call([1,2,3]));

console.log(Object.prototype.toString.call(false));


console.log(Object.prototype.toString.call("foo bar"));

console.log(Object.prototype.toString.call(null));

console.log(Object.prototype.toString.call(/123/));

console.log(Object.prototype.toString.call(undefined))
}
datatype();
