document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const instructions = document.querySelector('.instructions');
    
    // Add click event listener to the envelope
    envelope.addEventListener('click', () => {
        // Toggle the 'open' class to trigger the animation
        envelope.classList.toggle('open');
        
        // Update instructions text based on envelope state
        if (envelope.classList.contains('open')) {
            instructions.textContent = 'Click again to close';
        } else {
            instructions.textContent = 'Click on the envelope to open';
        }
    });
    
    // Add some initial animation to draw attention
    setTimeout(() => {
        envelope.style.animation = 'shake 0.5s';
        envelope.style.animationIterationCount = '3';
    }, 1000);
});

// Add shake animation
document.head.insertAdjacentHTML('beforeend', `
<style>
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(0); }
        75% { transform: translateX(5px); }
        100% { transform: translateX(0); }
    }
</style>
`);