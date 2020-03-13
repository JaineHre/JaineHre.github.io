;(function gallery(){
   let leftArrow = document.getElementById('leftArrow');
   let rightArrow = document.getElementById('rightArrow');

   let currentImage = 1;

   leftArrow.addEventListener('click', moveBacward);
   rightArrow.addEventListener('click', moveForward);

   function moveBacward() {
   	var image = document.getElementById('image');
       currentImage--;
       if(currentImage < 1) currentImage = 7;
       image.setAttribute('src', '../Image/1/' + currentImage + '.jpg');
   }

   function moveForward() {
       var image = document.getElementById('image');
       currentImage++;
       if(currentImage > 7) currentImage = 1;
       image.setAttribute('src', '../Image/1/' + currentImage + '.jpg');
   }

   let leftArrow2 = document.getElementById('leftArrow2');
   let rightArrow2 = document.getElementById('rightArrow2');

   let currentImage2 = 1;

   leftArrow2.addEventListener('click', moveBacward2);
   rightArrow2.addEventListener('click', moveForward2);

   function moveBacward2() {
   	var image = document.getElementById('image2');
       currentImage2--;
       if(currentImage2 < 1) currentImage2 = 5;
       image.setAttribute('src', '../Image/2/' + currentImage2 + '.jpg');
   }


   function moveForward2() {
       var image = document.getElementById('image2');
       currentImage2++;
       if(currentImage2 > 5) currentImage2 = 1;
       image.setAttribute('src', '../Image/2/' + currentImage2 + '.jpg');
   }
})()