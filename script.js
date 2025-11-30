const bg = document.querySelector('.animated-bg');

for (let i = 0; i < 40; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // random size
    let size = Math.random() * 40 + 10; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // random left position
    bubble.style.left = Math.random() * window.innerWidth + "px";

    // random animation delay
    bubble.style.animationDelay = Math.random() * 5 + "s";

    bg.appendChild(bubble);
}
