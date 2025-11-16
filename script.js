var pictureNumber=0;
slider();

function slider(){
 var img = document.getElementsByClassName("mySlides");
  
  for(var i=0; i < img.length; i++){
    img[i].style.display= "none";
  }
  pictureNumber++;
  if(pictureNumber > img.length){
      pictureNumber=1;
  }
  img[pictureNumber-1].style.display="block";
  setTimeout(slider,3000);
  
  var img = document.getElementsByClassName("gg");
  
  for(var i=0; i < img.length; i++){
    img[i].style.display= "none";
  }
  pictureNumber++;
  if(pictureNumber > img.length){
      pictureNumber=1;
  }
  img[pictureNumber-1].style.display="block";
  setTimeout(slider,3000);
}

