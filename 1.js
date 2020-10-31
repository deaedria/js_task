var kalimat = prompt("Inputkan beberapa kata yang setiap katanya memiliki subuah angka (contoh: ib2u in1i b3udi) : ");

var m = [];

//string dipisah dengan separatornya adalah spasi
function splitString(stringToSplit, separator){
    arr = stringToSplit.split(separator);
    //console.log(arr);
    for(var i = 0; i < arr.length; i++){
        m[i]= arr[i];
    }
}

var string = kalimat;

var space = ' ';
splitString(string, space);
var arr = [];

 	if(string != ''){

        //mencari angka dalam string
        var regex = /\d+/g; 
        var matches = string.match(regex); 
        var bil = string.match(regex);  

        //tidak ada angka di setiap kata
        if (matches == null){
            alert("anda belum memasukkan angka dalam setiap kata");
        }
          
        //mengurutkan angkanya    
        function perbandingan(a,b){
            return a-b;
        }

        matches.sort(perbandingan); //terurut
        var urutKata = [];

        for(var a = 0; a < matches.length; a++){
            for(var b = 0; b < bil.length; b++){
                 if(bil[a] == matches[b]){
                     var c = bil.indexOf(bil[b]);
                     urutKata.push(m[c]);
                 }
            }
        }

        var str = urutKata.join(" ");
        console.log("urutKata : "+ str);

    }
    else{
        //tidak ada kata yang diberikan (kosong)
        var hasil = "";
      	console.log(hasil);
    } 