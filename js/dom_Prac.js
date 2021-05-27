
// dom practice 
const pa = document.querySelector('.para');
console.log(pa);
const pa2 = document.querySelector('body > div');
console.log(pa2);

const allDiv = document.querySelectorAll('div');
console.log(allDiv);

console.log(allDiv[1]);

allDiv.forEach((uk)=>{
console.log(uk);
});
// when we are using qquerySelector we get mulltiple answers in node list 
// forEach works on nodelist

console.log("-------select by id and classes------------");
    
// how to select the id and the classes
const one = document.getElementById('boom');
console.log(one);
// when we ework with getElement by className,we get HTML collection.
//forEach doesn't work on the htmlcolleection
const two = document.getElementsByClassName('para');
console.log(two);

//access by tag name 
const uk = document.getElementsByTagName('para');

//
