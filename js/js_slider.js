// lets make an image slider 
var i=0; //start time
var images = [] ;  
var time = 3000;

//Image List 
images[0] = './image1.jpg';
images[1] = './image2.jpg';
images[2] = './image3.jpg';

function changeImg(){

    document.slide.src = images[i]; // images[0] : first image

    if (i<images.length -1){
          i++;  
    }

    else{
        //changing back to its original value
        i=0;
    }

    // settimeout
    setTimeout("changeImg()",time);
}


window.onload = changeImg;
console.log("js sliders  ends here");
console.log("-------- ||||||||||||||||||||| ----------");