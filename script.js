// Get the slider container and the images
const sliderContainer = document.querySelector('.slider');
const sliderImages = sliderContainer.querySelectorAll('img');

// Get the slider buttons
const prevButton = sliderContainer.querySelector('.prev-btn');
const nextButton = sliderContainer.querySelector('.next-btn');

// Set the current slide index
let currentSlide = 0;

// Function to show the current slide
function showSlide() {
  // Hide all the slides
  sliderImages.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the current slide
  sliderImages[currentSlide].style.display = 'block';
}

// Function to go to the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= sliderImages.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = sliderImages.length - 1;
    }
    showSlide();
}

// Set an interval to automatically go to the next slide every 3 seconds
setInterval(() => {
  nextSlide();
}, 9000);


// Event listeners for the buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Show the first slide
showSlide();


// Get the counter section element and visitor count span element
const counterSection = document.getElementById("counter");
const visitorCountSpan = document.getElementById("visitorCount");

// Retrieve visitor count from local storage or set to 0 if not found
let visitorCount = localStorage.getItem("visitorCount");
if (visitorCount === null) {
  visitorCount = 0;
}

// Update visitor count span element with the retrieved visitor count
visitorCountSpan.textContent = visitorCount;

// Increment visitor count and update visitor count span element and local storage on page load
visitorCount++;
visitorCountSpan.textContent = visitorCount;
localStorage.setItem("visitorCount", visitorCount.toString());

   /*
   const accessKey = "H50svsamww2J8-WILKYUXkju7k_ZtxXmyut1H4PIa6c"; // Replace with your Unsplash access key
   const query = "nature";
   const count = 5; 
   const images = [];
   fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${query}&count=${count}`)
  .then(response => response.json())
  .then(data => {
    const imgs = data.map(photo => photo.urls.regular);
    console.log(imgs); // Array of 5 random nature images
    for (let i = 0; i < imgs.length; i++) {
        const item = imgs[Math.floor(Math.random() * imgs.length)];
        images.push(item);
    }
  })
  .catch(error => console.log(error));
  */

  const images = [
      'slide1.jpg',
      'slide2.jpg',
      'slide3.jpg'
  ];
  const services = document.querySelectorAll('.service');
  
  services.forEach((service) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = `images/${ images[randomIndex] }`;
    const img = service.querySelector('img');
    img.src = randomImage;
  });
  

  
  