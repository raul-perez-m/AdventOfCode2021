const { readFile } = require('fs');


async function calculate(){

    const input = await readFile('./day4/input.txt', 'utf-8', (error, data) => {

        const input = data.split('\r\n');
        const numbers = input.shift().split(',');
        input.shift();
        const boards = [];
        let board = new Array(5).fill(0).map(_ => new Array(5).fill(0));
        let cont = 0;
        input.forEach(line => {
            if(line != ''){
                const n = line.split(' ');
                // console.log(numbers);
                let contLine = 0;
                n.forEach(x => {
                    if(parseInt(x) >= 0){
                        board[cont][contLine] = { value: parseInt(x), checked:0}
                        contLine++;
                    }
                });
                cont++;

            }else{
                boards.push(board);
                board = new Array(5).fill(0).map(_ => new Array(5).fill(0));
                cont = 0;
            }
        });

        let winnerBoard = null
        let lastNumber = 0;
        numbers.some(number => {
            if(boards.length == 1){
                return true;
            }
            boards.some(b => 
            {
                
                b.some(line => 
                { 
                   let a = line.find(a => a.value == parseInt(number));
                    if(a){
                        a.checked = 1;
                    }
                    if(line.every(l => l.checked == 1))
                    {
                        winnerBoard = b;
                        return true;
                    }
                });
                if(winnerBoard)
                {
                    return true;
                }
                let noColumn = true;
                for( let i= 0; i <= 4; i += 1){
                    b.some(line => {
                        if(!line[i].checked){
                            noColumn = true;
                            return true;
                        }else{
                            noColumn = false;
                        }
                    });
                    if(!noColumn)
                    {
                        winnerBoard = b;
                        break;;
                    }
                }
                if(winnerBoard)
                {
                    return true;
                }            
               


            });
            if(winnerBoard)
                {
                    lastNumber = number;
                    return true;
                }            
        });


        let value = 0;
        winnerBoard.forEach(line => {
            const a = line.filter( x => x.checked == 0);
            if(a.length > 0){
                value += a.reduce( (p, c) => p + c.value, 0);
            }
        });


        console.log(value * parseInt(lastNumber));


        winnerBoard = undefined;
        let lastWinnerBoard = undefined;
        lastNumber = 0;
        // numbers.some(number => {
        //     for (let i = boards.length - 1; i >= 0; --i)  
        //     {
        //         boards[i].some(line => 
        //         { 
        //            let a = line.find(a => a.value == parseInt(number));
        //             if(a){
        //                 a.checked = 1;
        //             }
        //             if(line.every(l => l.checked == 1))
        //             {
        //                 winnerBoard = boards[i];
        //                 return true;
        //             }
        //         });
        //         if(winnerBoard)
        //         {
        //             const index = boards.indexOf(winnerBoard);
        //             boards.splice(index, 1);
        //             lastNumber = number;
        //             lastWinnerBoard = winnerBoard;
        //             if(boards.length >= 1)
        //             {
        //                 winnerBoard = null;
        //                 continue;
        //             }          
        //             if (!boards.length) break            

        //         }
        //         let noColumn = true;
        //         for( let x= 0; x <= 4; x += 1){        

        //             boards[i].some(line => {
        //                 if(!line[x].checked){
        //                     noColumn = true;
        //                     return true;
        //                 }else{
        //                     noColumn = false;
        //                 }
        //             });
        //             if(!noColumn)
        //             {
        //                 winnerBoard = boards[i];
        //                 break;
        //             }
        //         }
        //         if(winnerBoard)
        //         {
        //             const index = boards.indexOf(winnerBoard);
        //             boards.splice(index, 1);
        //             lastNumber = number;
        //             lastWinnerBoard = winnerBoard;
        //             if(boards.length >= 1)
        //             {
        //                 winnerBoard = null;
        //             }
        //             if (!boards.length) break            

        //         }         
        //     }         
        // });
        
        // console.log(lastWinnerBoard);
        // value = 0;
        // lastWinnerBoard.forEach(line => {
        //     const a = line.filter( x => x.checked == 0);
        //     if(a.length > 0){
        //         value += a.reduce( (p, c) => p + c.value, 0);
        //     }
        // });


        // console.log(value * parseInt(lastNumber));






        winnerBoard = undefined;
        lastWinnerBoard = undefined;
        lastNumber = 0;
        numbers.some(number => {
            boards.reverse().forEach(board =>   
            {
                board.some(line => 
                { 
                   let a = line.find(a => a.value == parseInt(number));
                    if(a){
                        a.checked = 1;
                    }
                    if(line.every(l => l.checked == 1))
                    {
                        winnerBoard = board;
                        return true;
                    }
                });
                if(winnerBoard)
                {
                    const index = boards.indexOf(winnerBoard);
                    boards.splice(index, 1);
                    lastNumber = number;
                    lastWinnerBoard = winnerBoard;
                    if(boards.length >= 1)
                    {
                        winnerBoard = null;
                    }                   

                }else
                {
                    let noColumn = true;
                    for( let x= 0; x <= 4; x += 1){        

                        board.some(line => {
                            if(!line[x].checked){
                                noColumn = true;
                                return true;
                            }else{
                                noColumn = false;
                            }
                        });
                        if(!noColumn)
                        {
                            winnerBoard = board;
                            break;
                        }
                    }
                    if(winnerBoard)
                    {
                        const index = boards.indexOf(winnerBoard);
                        boards.splice(index, 1);
                        lastNumber = number;
                        lastWinnerBoard = winnerBoard;
                        if(boards.length >= 1)
                        {
                            winnerBoard = null;
                        }       

                    }
                }        
            });         
        });
        
        console.log(lastWinnerBoard);
        value = 0;
        lastWinnerBoard.forEach(line => {
            const a = line.filter( x => x.checked == 0);
            if(a.length > 0){
                value += a.reduce( (p, c) => p + c.value, 0);
            }
        });


        console.log(value * parseInt(lastNumber));



    });
}


calculate();