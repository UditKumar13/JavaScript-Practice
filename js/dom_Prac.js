
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

//change text 
const va2 = document.querySelectorAll('p');
va2.forEach((para)=>{
para.innerText += ' I hate u ';
})

const Bo = document.getElementById('boom');

Bo.innerHTML += '<h1> Go to hell </h1>'

const arr = ['uk','adi' , 'hemu'];

arr.forEach((person)=>{
Bo.innerHTML += `<p> My name is ${person} </p>`
})



