let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

// Display message
const message = `You have submitted ${reviewCount} review(s).`;
document.getElementById("review-message").textContent = message;
