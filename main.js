document.addEventListener('DOMContentLoaded', function() {
    const splashTexts = [
        "Welcome to the site. lol",
        "Made by ChezStack",
        "Brainrot, Brainrot, Brainrot.",
        "Refresh to see another text.",
        "Best gaming site in 2024. I hope.",
        "Idk what to put here",
        "Sleek UI!!!!",
        "Minamalism!",
        "lol",
        "This took 1 month to make."
    ];

    const splashTextElement = document.getElementById('splashText');
    const randomIndex = Math.floor(Math.random() * splashTexts.length);
    splashTextElement.textContent = splashTexts[randomIndex];

    // Show popup
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'flex';

    // Close popup
    const closePopupButton = document.getElementById('closePopup');
    closePopupButton.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });
});
