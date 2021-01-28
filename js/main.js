const overlay = document.querySelector('.welcome');
const welcomeText = document.querySelector('.welcome_text');

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        overlay.classList.add('hide');
        welcomeText.classList.add('hidden');
        // alert('Page is loaded');
	}, 5000);
});