// Adding and remeoving classes

const uk = document.querySelector('.red');

uk.classList.add("green");

setTimeout(()=>{
uk.classList.add("red");
uk.classList.remove("green")

},2000)

/*
we can use to see if anny of these have some error or not 

uk.forEach(p=>{
    if (p.textContent.includes('error')){
        p.classList.add('error);
    }
})

*/

// how to toggle a class.

uk.classList.toggle('.green');
// adds a green class.
uk.classList.toggle('.green');
//removes a green class.