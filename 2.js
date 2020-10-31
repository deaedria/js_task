var string = ['D','U','M','B','W','A','Y','S','I','D'];

var cetak = (n) => {
 //for(var i=0; i < string.length; i++){
     for(let row=0; row<n; row++){
        let lines = "";

        for(let col=0; col<n; col++){
            
                if((row === 0 && col === 0) || (row === 0 && col === n-1)) {
                    lines += string[n-10];
                } else if((row === n-9 && col === n-9) || (row === n-9 && col === n-2)){
                    lines += string[n-9];
                } else if((row === n-8 && col === n-8) || (row === n-8 && col === n-3)){
                    lines += string[n-8];
                } else if((row === n-7 && col === n-7) || (row === n-7 && col === n-4)){
                    lines += string[n-7];
                } else if((row === n-6 && col === n-6) || (row === n-6 && col === n-5)){
                    lines += string[n-6];
                } else if((row === n-5 && col === n-5) || (row === n-5 && col === n-6)){
                    lines += string[n-5];
                } else if((row === n-4 && col === n-4) || (row === n-4 && col === n-7)){
                    lines += string[n-4];
                } else if((row === n-3 && col === n-3) || (row === n-3 && col === n-8)){
                    lines += string[n-3];
                } else if((row === n-2 && col === n-2) || (row === n-2 && col === n-9)){
                    lines += string[n-2];
                } else if((row === n-1 && col === n-1) || (row === n-1 && col === 0)){
                    lines += string[n-1];
                }
                else{
                    lines += '=';
                }

            
        }
        console.log(lines)
    }
 //}
}




cetak(10)