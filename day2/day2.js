const { Console } = require('console');
const { readFile } = require('fs');


async function calculate(){

    const input = await readFile('./day2/input.txt', 'utf-8', (error, data) => {

        const arr = { 
            h: 0,
        d: 0
    };
        data.split('\r\n').forEach(line => {
            var cols = line.split(' ');
            // Tolerate empty lines. There may be one at the end of the input.
            console.log(cols);
            console.log(arr);
            
            switch(cols[0])
            {
                case 'forward':
                    arr['h'] = arr['h'] + parseInt(cols[1]); 
                    break;
                case 'up':
                    arr['d'] = arr['d'] - parseInt(cols[1]);
                    break;
                case 'down':
                    arr['d'] = arr['d'] + parseInt(cols[1]);
                    break;

            }
        });
        console.log(arr);

        console.log(arr['h'] * arr['d']);

        const arr2 = { 
            h: 0,
        d: 0,
        a: 0
    };
        
         data.split('\r\n').forEach(line => {
            var cols = line.split(' ');
            // Tolerate empty lines. There may be one at the end of the input.
            console.log(cols);
            console.log(arr2);
            
            switch(cols[0])
            {
                case 'forward':
                    arr2['h'] = arr2['h'] + parseInt(cols[1]); 
                    arr2['d'] = arr2['d'] + arr2['a'] * parseInt(cols[1]);
                    break;
                case 'up':
                    arr2['a'] = arr2['a'] - parseInt(cols[1]);
                    break;
                case 'down':
                    arr2['a'] = arr2['a'] + parseInt(cols[1]);
                    break;


            }
        });
        console.log(arr2);

        console.log(arr2['h'] * arr2['d']);


    });
    



}

calculate();