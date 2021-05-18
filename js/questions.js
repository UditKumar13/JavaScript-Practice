console.log("hi");

var a = ['dog' , 'cat' , 'boom'];
console.log(a.length);
// answer comes as 3 
a[20] = 'fox';
console.log(a.length);
// answer comes as 21

// for loop simple
for (var i=0 ; i<6 ;i++){
    console.log(i);
} 
// it will give the output in the seperated lines 

// how we can get the result in the same line 
// make a string

var str = ''

for (var i=0;i<6;i++){
    str = str +  i  + " ";
}
console.log(str);
// output : 0 1 2 3 4 5 


for (var i =1 ; i<6;i++){
    setTimeout( function (){
        console.log(i + " ");
    } , i*1000)
}

// 5 times 6 will get printed bcz var don't have the block scope