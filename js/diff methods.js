console.log("diff methods starts here");
console.log("call function");
// call in js 

function uk(message){
    return "mickey" + " " + message + " " +   this.name ;
}

obj = {name : "mouse"}

var pr = uk.call(obj , "loves");
// loves is transmitted as an argument to the funcntion uk 
console.log(typeof(pr))
// string 
console.log(pr)
// mickey loves mouse
console.log("diff methods ends here");
console.log("-------- ||||||||||||||||||||| ----------");