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
//         data.split('\r\n').forEach(line => {
//             var cols = line.split('');
//             // Tolerate empty lines. There may be one at the end of the input.
//             for( let i= 0; i < cols.length; i += 1){
                

//                 if(!arr[i]){
//                     arr[i] = {
//                         one: 0,
//                         zero: 0  
//                     };
//                 }

//                 if(cols[i] === '1'){

//                     arr[i] = {
//                         one: arr[i].one + 1,
//                         zero: arr[i].zero  
//                     };
//                 }else if(cols[i] === '0'){
//                     arr[i] = {
//                         one: arr[i].one,
//                         zero: arr[i].zero + 1  
//                     };
//                 }

//             }
//         });
//         console.log(arr);
//         let numberMost = '', numberLess = '';


//         for (const [key, value] of Object.entries(arr)) {
//             if(value.one > value.zero)
//             {
//                 numberMost += '1'
//                 numberLess += '0'
//             }else if(value.one < value.zero){
//                 numberMost += '0'
//                 numberLess += '1'
//             }
//           }

//         numberMost = parseInt(numberMost, 2);
//         numberLess = parseInt(numberLess, 2);
//         console.log(numberMost * numberLess);


//     });
    



// }

calculate();