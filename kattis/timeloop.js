const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('How many Abracadabras do you want? ',(answer)=>{
    for(let i=1;i<=answer;i++){
        if(i % 1==0){
            console.log(i + " Abracadabra")
rl.close();
        }
    }
});