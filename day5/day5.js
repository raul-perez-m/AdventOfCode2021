const { readFileSync } = require('fs');


async function calculate(){

    const input = readFileSync('./day5/input.txt', 'utf-8').split('\n');
    const coordinates = input.map(value => {
        const values = value.split(' -> ');
        return values.map(x => {
            return x.split(',').map(y => parseInt(y));
        });
    });
    

    const lines = {};
    const columns = {};
    const board = new Array(1000).fill(0).map(_ => new Array(1000).fill(0));

    coordinates.forEach(coord => {
        if(coord[0][0] == coord[1][0]){
            let max = Math.max(coord[0][1], coord[1][1]);
            let min = Math.min(coord[0][1], coord[1][1]);
            for(let i = min; i <= max; i++){
                board[coord[0][0]][i]++;
            }
           
        }else if(coord[0][1] == coord[1][1]){
            // console.log('Line ' + coord[0][1]);
            
            let max = Math.max(coord[0][0], coord[1][0]);
            let min = Math.min(coord[0][0], coord[1][0]);
            for(let i = min; i <= max; i++){
                board[i][coord[0][1]]++;
            }
        }else {           
            const incX = (coord[0][0] < coord[1][0]) ? 1 : -1;
            const incY = (coord[0][1] < coord[1][1]) ? 1 : -1;
            let coordX = parseInt(coord[0][0]);
            let coordY = parseInt(coord[0][1]);
            
            for(let x = coordX, y = coordY; x !== parseInt(coord[1][0]) + incX ; x += incX, y += incY){
                board[x][y]++;
            }
        }
    });

    let number = 0;
    const a = board.forEach( x =>  {
        number += x.filter(y => y > 1 ).length;
    });

    console.log(number);
    console.log(a);


}


calculate();