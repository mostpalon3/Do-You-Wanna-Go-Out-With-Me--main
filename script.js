const nextPage = () => {
    window.location.href = "yes.html";
};

const moveButton = () => {
    const button = document.querySelector("#noButton");
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;
    
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = "fixed";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
};
