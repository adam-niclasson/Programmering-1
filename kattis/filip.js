var readlineSync = require('readline-sync');

var a = readlineSync.question('give me the first three digit number? ');
var b = readlineSync.question('give me the seccond three digit number? ');
var ans;

if(a < b){
    ans = reverseInt(a)
}else{
    ans = reverseInt(b)
}
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join(''); 
    return Math.sign(n) * parseInt(reversed); }
    
  console.log(ans)