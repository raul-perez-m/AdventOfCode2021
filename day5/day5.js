const { readFile } = require('fs');


async function calculate(){

    const input = await readFile('./day5/input.txt', 'utf-8', (error, data) => {

        const input = data.split('\r\n');

        const coordinates = input.map((value, index, array) => {
            const values = value.split(' -> ');
            return values.map(x => {
               return x.split(',').map(y => parseInt(y));
            });
        });

        

    });
}


calculate();