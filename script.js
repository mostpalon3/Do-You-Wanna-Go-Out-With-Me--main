const nextPage = () => {
    window.location.href = "yes.html";
};

const moveButton = () => {
    const button = document.querySelector("#noButton");
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;
    
    // Use document.documentElement to account for mobile viewports
    const maxX = Math.max(window.innerWidth, document.documentElement.clientWidth) - buttonWidth;
    const maxY = Math.max(window.innerHeight, document.documentElement.clientHeight) - buttonHeight;
    
    // Ensure we don't go out of bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX - 10);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY - 10);
    
    button.style.position = "fixed";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    button.style.zIndex = "1000";
    button.style.pointerEvents = "auto";
};

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('#noButton');
    const yesButton = document.querySelector('#yesButton');
    
    if (noButton) {
        noButton.addEventListener('mouseover', moveButton);
        noButton.addEventListener('click', moveButton);
    }
    
    if (yesButton) {
        yesButton.addEventListener('click', nextPage);
    }
});
