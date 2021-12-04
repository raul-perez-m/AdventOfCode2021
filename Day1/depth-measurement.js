const { Console } = require('console');
const { readFile } = require('fs');


async function calculateDepth(){

    const input = await readFile('./Day1/input.txt', 'utf-8', (error, data) => {
        const a = data.split('\r\n').map(Number);
        let before = undefined;
        let increases = 0;
        a.forEach(x => { 
            if (x > before){
                console.log(`before: ${before} x: ${x}`)
                increases++; 
            }
            before = x;
        });
        console.log(increases);

        const b = [];
        for( let i= 2; i < a.length; i += 1){
            b.push(a[i] + a[i-1] + a[i-2]);
        }
        console.log(b);

        before = undefined;
        increases = 0;
        b.forEach(x => { 
            if (x > before){
                console.log(`before: ${before} x: ${x}`)
                increases++; 
            }
            before = x;
        });
        console.log(increases);
    });
    



}


module.exports = {
    calculateDepth,
  };
  