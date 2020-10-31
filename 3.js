var kunci = prompt("Inputkan kata-kata anda : ");
var kata = prompt("Sekarang inputkan sebuah string : ");

var m1 = [];
var dataKey = [];

//string kunci dipisah dengan separatornya adalah spasi
function splitString(stringToSplit, separator){
    dataKey = stringToSplit.split(separator);
    console.log(dataKey);
    for(var i = 0; i < dataKey.length; i++){
        m1[i]= dataKey[i];
    }
}

var string = kunci;
var space = ' ';

splitString(string, space);

var m2 = [];
var grup = [];

for(var l = 0; l < m1.length; l++){
   
    m2[l] = m1[l];
    m2.push(m1[l]);
    var str = m2[l];

    var usingSplit = str.split('');
    grup.push(usingSplit);

    //console.log(usingSplit);

}
console.log(grup);

var word = kata;

var usingSplit1 = word.split('');
console.log(usingSplit1);


function check(dataSatu, dataDua){
    for(var j = 0; j < dataSatu.length; j++){
        for(var k = 0; k < dataDua.length; k++){
            for(var m = 0; m < dataSatu[j].length; m++){
                if(dataDua[k] === dataSatu[j]){
                    var ch = dataSatu[j].join("");
                    console.log(ch + " => true");
                    //console.log("True");
                }
                else{
                    var hasil = m;
                    if (hasil == dataSatu[j].length){
                        var ch = dataSatu[j].join("");
                        console.log(ch + " => false");
                        //console.log("False");
                    }
                }
            }
        }
    }
}

var key = grup;
var str = usingSplit1;

check(key, str);


