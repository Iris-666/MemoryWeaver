
let slides, dots;
let slideIndex = 1;
projectCount = 5;
let slideContainer;
let dates = ["October 20, 2023", "November 12, 2023","November 14, 2023","November 15, 2023","November 16, 2023"]
let descriptions = ["Today, I found myself wrapped in the quiet embrace of serenity by the lakeside. The water was a rippling mirror, reflecting the clear skies above and the greenery that bordered it. A gentle breeze carried the scent of pine, and the distant hum of the town was a soft whisper to the quiet moment I was having. Gazing out over the water, I felt a profound connection to the landscape, as if the rhythm of the waves matched the beat of my own heart. It was a moment of peace, where the world's pace slowed just enough for me to savor its beauty."
,`Today, I was engulfed in the electric atmosphere of a live concert. Surrounded by a sea of glowing light sticks, the crowd's energy was palpable. On stage, the performers were just silhouettes against the grand backdrop with the bold words "FLY TO 2023" emblazoned across it, giving a sense of soaring into the future through music. I couldn't help but get lost in the rhythm and the collective excitement of the audience. It was a night where the music wasn't just heard, it was felt.`
,`The day's journey ended with a drive at dusk, where the horizon was a canvas painted with strokes of orange and lavender. Streetlights flickered on one by one, stars in the making against the deepening blue of the evening sky. The road ahead was a path of light, guiding me home, while the rearview mirror held onto the last glimmers of daylight. It was during this tranquil commute that I found a moment to reflect, to breathe in the transition from day to night, and to appreciate the everyday poetry of a sunset in motion.`
,`Today, I caught a quiet moment with my furry friend lounging on the sofa. The room was still, bathed in soft light, which cast a serene glow over the scene. There, amidst the comfort of grey pillows and a crumpled throw, my little companion sat, looking up with the most endearing eyes, as if pondering the day's adventures. The casual toss of a hat in the background added a touch of disarray, hinting at the relaxed pace of our Sunday afternoon together. It was one of those simple, peaceful snapshots of life that I'll cherish, a reminder of the joy and calm pets bring into our lives.`
,`In the afternoon, I found myself immersed in the creative pulse of an art exhibition. Two screens dominated the room, one showcasing a dynamic array of images, while the other awaited engagement with a paused narrative. Bean bags on the floor offered a casual vantage point, suggesting a space designed for contemplation and interaction. A lone laptop lay open, perhaps left by an artist or a visitor, contributing to the room's narrative of innovation and connectivity. This visit stirred a mix of inspiration and introspection, as I soaked in the fusion of technology and art.`];

let sectionBtn;


window.addEventListener("load", function(event) {
  slideContainer = document.getElementById("slideshow-container");
  console.log(slideContainer)
  for(let i = 0; i < projectCount; i++){

    slideContainer.innerHTML += `<div class="mySlides fade">`+`<img src="img/img${i+1}.jpg" class="img">`+`<div class="date">${dates[i]}</div>`+`<div class="text">${descriptions[i]}</div>`+`</div>`

  }
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  showSlides(slideIndex);
  sectionBtn = document.getElementById("dropdown");
});


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";

}

document.addEventListener("keydown", (event) => {
  var keyName = event.key;
  var keyCode = event.code;
  console.log(keyName);
  if(keyName == "a"){
    plusSlides(-1);
  }else if(keyName == "b"){
    plusSlides(1);
  }
})