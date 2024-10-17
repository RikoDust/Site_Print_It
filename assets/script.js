// Déclaration des boutons "arrow"
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Seclection des elements avec la class .dot
const dots = document.querySelectorAll('.dot');

// Délcaration des images de la banniere
const bannerImg = document.getElementById('banner-img');

// Déclaration des elements TagLine
const bannerTagline = document.getElementById('banner-tagline');

// Déclaration des images et tagline du caroussel 
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let currentSlide = 0; // Index de la slide active
const totalSlides = 4; // Nombre total de slides
 
// Mise a jour des bullet points selon la slide active
function updateDots() {
	dots.forEach((dot, index)=> {
		if (index === currentSlide) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

// Mise a jour de l'image et du tagline
function updateSlide() {
	bannerImg.src='./assets/images/slideshow/${slides[currentSlide].image}';
	bannerTagline.innerHTML=slides[currentSlide].tagLine;
	updateDots();
}



// eventListener arrow left
arrowLeft.addEventListener('click', ()=> {
	console.log('fleche gauche');
	currentSlide = (currentSlide-1) % totalSlides;
	updateSlide()
	updateDots();
});

// eventListener arrow right
arrowRight.addEventListener('click', ()=> {
	console.log('fleche droite')
	currentSlide = (currentSlide+1) % totalSlides;
	updateSlide()
	updateDots();
});



// Initialise les bullet points au chargement
updateDots();

updateSlide();

