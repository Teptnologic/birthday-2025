document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const instructions = document.querySelector('.instructions');
    
    // Add click event listener to the envelope
    envelope.addEventListener('click', () => {
        // Toggle the 'open' class to trigger the animation
        envelope.classList.toggle('open');
        
        // Update instructions text based on envelope state
        if (envelope.classList.contains('open')) {
            instructions.textContent = '🐱：好了可以了。关上！';
        } else {
            instructions.textContent = '🐱：点开看看！啊！';
        }
    });
});