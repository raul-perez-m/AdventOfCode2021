const { Console } = require('console');
const { readFile } = require('fs');


async function calculate(){

    const input = await readFile('./day3/input.txt', 'utf-8', (error, data) => {

        const arr = { 
            
        };

        const input = data.split('\r\n');


        let solRating = input;
        let solScrubber = input;

        for( let i= 0; i <= 11; i += 1){
            let ones = [];
            let zeros = [];

            if(solRating.length > 1)
            {
                solRating.forEach( line => {
                    if(line[i] == '0'){
                        zeros.push(line);
                    }else {
                        ones.push(line);
                    }
                });
                
                if(zeros.length > ones.length){
                    solRating = zeros; 
                }else if (ones.length > zeros.length){
                    solRating = ones;
                }else{
                    solRating = ones;
                }
            }

            if(solScrubber.length > 1){
                ones = [];
                zeros = [];
                solScrubber.forEach( line => {
                    if(line[i] == '0'){
                        zeros.push(line);
                    }else {
                        ones.push(line);
                    }
                });

                if(zeros.length > ones.length){
                    solScrubber = ones; 
                }else if (ones.length > zeros.length){
                    solScrubber = zeros;
                }else{
                    solScrubber = zeros;
                }
            }

            
        }

        console.log(parseInt(solRating[0], 2));
        console.log(parseInt(solScrubber[0], 2));
        console.log(parseInt(solRating[0], 2) * parseInt(solScrubber[0], 2));
    });
}

calculate();