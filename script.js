var currentImageIndex = 0;
var images = ["owl01.jpg", "owl02.jpg", "owl03.jpg", "owl04.jpg"];
var imageElement = document.getElementById("image");
      //https://www.pexels.com/search/owl/

const owlFacts = [
    "Owlx are almost completely silent in flight, thanks to the unique structure of their feathers. This allows them to sneak up on prey without being detected.",
    "Owls have some of the largest eyes of any bird. Their eyes are so big that they cannot move them within their sockets, so they must turn their heads to see in different directions.",
    "Owls have a unique adaptation in their digestive system called a gizzard. This muscular organ helps to break down the tough materials, such as bones and fur, that owls swallow along with their prey.",
    "Owls are found on every continent except Antarctica. They are particularly diverse in the Americas, with over 160 species found in North and South America combined.",
]

function showImage() {        
    imageElement.src = "/static/" + images[currentImageIndex];
    imageElement.alt = "Image " + (currentImageIndex + 1);
    resizeImage()
}

function resizeImage(){
    var myImg = document.getElementById('image');
    myImg.style.width = "50%";
    myImg.style.height = "50%";
}

function displayOwlFacts(){
   var myDiv = document.getElementById("funFacts");
   myDiv.innerHTML = owlFacts[currentImageIndex];
}

function imgSize(){
    let myImg = document.getElementById('image');
    let realWidth = myImg.naturalWidth;
    let realHeight = myImg.naturalHeight;
    alert("Original width=" + realWidth + ", " + "Original height=" + realHeight);
}
      
      function previousImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
          currentImageIndex = images.length - 1;
        }
        //imgSize();
        showImage();
      }
      
      function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
          currentImageIndex = 0;
        }
        //imgSize();
        showImage();
      }
      
      showImage();