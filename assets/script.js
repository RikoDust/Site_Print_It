// Déclaration des boutons "arrow"
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Délcaration des images de la banniere
const bannerImg = document.getElementById('banner-img');

// Déclaration des elements TagLine
const bannerTagline = document.getElementById('banner-tagline');

// Selection de l'élément avec la class .dots
const dotsContainer = document.querySelector('.dots');
let dots=[]; // Créer un tableau qui stock les données des dot

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
const totalSlides = slides.length; // Nombre total de slides

// Création des "dot" de façon dynamique
for (let i = 0; i < totalSlides; i++){
	const dot = document.createElement('div'); // Créer l'élément div
	dot.classList.add('dot'); // Ajoute la class dot à l'élément div
	dotsContainer.appendChild(dot); // Ajoute l'élément comme enfant de dotsContainer
	dots.push(dot); // Ajoute dot dans le tableau dots pour conserver les références
}


// Mise a jour des bullet points selon la slide actif
function updateDots() {
	dots.forEach((dot, index)=> {
		if (index === currentSlide) {
			dot.classList.add('dot_selected'); // Applique le style CSS "dot selected"
		} else {
			dot.classList.remove('dot_selected'); // Retire le style CSS "dot selected"
		}
	});
}

// Mise a jour de l'image et du tagline
function updateSlide(slide) {
	bannerImg.src=`./assets/images/slideshow/${slides[slide].image}`; // Met a jour l'image en allant chercher dans le dossier "slideshow"
	bannerTagline.innerHTML=slides[slide].tagLine; // Met a jour le tagline
}



// eventListener arrow left
arrowLeft.addEventListener('click', ()=> {
	console.log('fleche gauche'); // Vérification console
	currentSlide = (currentSlide-1 + totalSlides) % totalSlides; // Permet le tour infini (retour gauche) en evitant d'obtenir un index negatif (+ totalSlides)
	updateSlide(currentSlide);
	updateDots();
});

// eventListener arrow right
arrowRight.addEventListener('click', ()=> {
	console.log('fleche droite') // Vérification console
	currentSlide = (currentSlide+1) % totalSlides; // Definit le nouvel index
	updateSlide(currentSlide);
	updateDots();
});



// Ajout eventListener au click pour les dots et affichage slide selon index
dots.forEach((dot, index)=>{  // La méthode parcours chaque elements dans "dots" avec les parametres dot(element actuel) et index(sa position)
	dot.addEventListener('click', ()=>{
		currentSlide = index; // definit currentSlide égale a l'index du dot cliqué
		updateSlide(currentSlide); // Appel la fonction pour mettre a jour l'affichage
		updateDots() // Appel la fonction pour actualiser les dots (style dot seleted)
	});
});





// Initialise les bullet points et slides au chargement
updateDots();


