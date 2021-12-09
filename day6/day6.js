const { readFileSync } = require('fs');


const input = readFileSync('./day6/input.txt', 'utf-8').split(',').map(Number);
const days = 256;
const defObject = () => [...Array(10).keys()].reduce((p, j) => (p[j] = 0, p), {});


function iterate(numIter) {
    let state = input.reduce((p, c) => (p[c] = (p[c] || 0) + 1, p), defObject());
    for (let i = 0; i < numIter; i += 1) {
      state[9] = (state[0] || 0);
      state = [...Array(10).keys()].reduce((p, j) => (c = j === 0 ? 6 : j- 1, p[c] += state[j], p), defObject());
    }
    return Object.keys(state).reduce((p, c) => p + state[c], 0);
  }

async function calculate(){

    for(x = 0; x < days; x++){

        let numberOfNewFishA = 0;
        let numberOfNewFishB = 0;
       
        input2.forEach((fish,index) => {
            if(fish == 0)
            {
                numberOfNewFishB++;
                input2[index] = 6;
            }else{
                input2[index]--;
            } 
        });
        for(y = 0; y < numberOfNewFishA; y++){
            input.push(8);
        }
        for(y = 0; y < numberOfNewFishB; y++){
            input2.push(8);
        }
    }

    console.log(input.length);
}
console.log(`Number of fish: ${iterate(256)}`);