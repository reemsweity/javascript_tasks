///1
function findSmallest(a){
var s=Math.min(...a)
return s;
}
console.log(findSmallest([1,2,3,4]));
///2
function AlphabeticalOrder(b){
return [...b].sort().join("")
}
console.log(AlphabeticalOrder('hello'));
///3

function  factorial(s){
    let m=1;
if(s>1){
    for(let i=1;i<=s;i++){
        m=m*i;
    }
    return m;
}
}
console.log(factorial(8));
///4
function oddOrEven(num1){
    if(num1%2==0){
        console.log("even")  
        }
        else {
           console.log("odd");
        }
      
}
oddOrEven(9);
///5
function  removeOdd(arr){
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {

          evenNumbers.push(arr[i]);
        }
      }
      return evenNumbers;

}
console.log(removeOdd([1, 2, 3, 4, 5]));


///6
function check_datatype(arr1){
    for(let i=0;i<arr1.length;i++){
        if(typeof(arr1[i])=="string"){
            arr1.splice(i,1)
        }
    }
    return arr1;
}
console.log(check_datatype(['Ayham', 3, 7, 'Alaa', 13, 'coding'])); 

///7


function addUp(num3){
    let m=0;
for(let i=0;i<=num3;i++){
    if(i<=num3){
        m=m+i
    }
  
} console.log(m);}
addUp(6)
///8
function minMaxLengthAverage(arr3){
 let a=[]
 a.push(Math.min(...arr3))
  a.push(Math.max(...arr3)) 
  a.push(arr3.length) 
  let avg=0; 
  for(let i=0;i<arr3.length;i++){
    avg=avg+arr3[i] 
  }  
  avg=avg/arr3.length
  a.push(avg) 
 console.log(a);}
 minMaxLengthAverage([7, 13, 3, 77, 100])

///9
function romanNumbers(num) {
   
    const romanMapping = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

  
    for (let i = 0; i < romanMapping.length; i++) {
        while (num >= romanMapping[i].value) {
            result += romanMapping[i].symbol;
            num -= romanMapping[i].value;
        }
    }

    return result;
}


console.log(romanNumbers(1989))

//10
function countWords(s1){
    let s2=[]
    s2=s1.split(" ")
    console.log(s2);
   console.log(s2.length);
}
countWords('hello from CodingAcademy!');

//11
function multiplyByLength(arr4){
    let newarr=[]
    for(let i=0;i<arr4.length;i++){
        newarr.push(arr4[i]*arr4.length)
    }
    console.log(newarr);
}
multiplyByLength([4,2,5])

//12
function checkEnding(str1,str2){
        if(str1[str1.length-1]==str2[0]){
console.log(true);
        }
else{
    console.log(false);
}
}
checkEnding("CodingSchool", "AC")

//13
function doubleChar(char1){
    let char2='';
    for(let i=0;i<char1.length;i++){
       char2=char2+char1[i]+char1[i]       
        
    }
    console.log(char2);
}
doubleChar('Coding')

//14
function findIndex(arr5,str3){
for(let i=0;i<arr5.length;i++){
    if(arr5[i]==str3){
        console.log(i);
    }
}
}
findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')

//15
function getAbsSum(arr6){
    
    let sum=0
for(let i=0;i<arr6.length;i++){
   
    sum=sum+arr6[i]
}
console.log(Math.abs(sum));
   
}
getAbsSum([-1, -3, -5, -4, -10, 0])