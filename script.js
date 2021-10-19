// Slider

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`;
});

let currentSlide = 0;
let autoplayId = 0;

autoplayId = setInterval(autoplay, 3000);

nextBtn.addEventListener('click', () => {
	currentSlide++;
	restartAutoplay();
});
prevBtn.addEventListener('click', () => {
	currentSlide--;
	restartAutoplay();
});

function carousel() {
	if (currentSlide === slides.length) {
		currentSlide = 0;
	}
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	slides.forEach(slide => {
		slide.style.transform = `translateX(-${currentSlide * 100}%)`;
	});
}

function autoplay() {
	currentSlide++;
	carousel();
}

function restartAutoplay() {
	carousel();
	clearInterval(autoplayId);
	autoplayId = setInterval(autoplay, 3000);
}