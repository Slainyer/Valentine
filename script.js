function goToLovePage() {
    window.location.href = "love.html"; // Redirects to new page
}

// NO button moves away when hovered
const noBtn = document.getElementById("no-btn");
noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth * 0.6; // Random position
    const y = Math.random() * window.innerHeight * 0.6;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
