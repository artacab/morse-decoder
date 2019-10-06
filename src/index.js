const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = "";
    let output = [];
    let array = [];
    array = expr.split("**********");
    let complete=[];
    let direct=[];
    let count =0;
        for (let index = 0; index < array.length; index++) {
            complete[index]="";
           for (let i = 0; i<array[index].length; i+=2) {
               let temp = array[index].slice(i,i+2);
               if(temp=="10"){
                    complete[index]+=".";
                    count++;
               }
               else if(temp=="11"){
                    complete[index]+="-";
                    count++;
               }
               else{

                   count++;
               }
               if(count==5){
                complete[index]+=" ";
                count=0;
               }      
           }
           direct = complete[index].split(' ');

           //console.log('complete',index, complete[index]);
           //console.log(direct);
           for (let item = 0; item < direct.length-1; item++) {
               output[item]=MORSE_TABLE[direct[item]];
           }
           //console.log(output);
           let str = output.join('');
           output=[];
           //console.log(str);
           if(index==array.length-1){
           res+=str;}
           else{
            res+=str+" ";
           }
        }
        console.log(res);
      return res;
    }  




module.exports = {
    decode
}