document.addEventListener('DOMContentLoaded', () => {
    // Show loading screen for 2 seconds, then hide it
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
        document.getElementById('loading-screen').style.display = 'none';
        
        // Start typewriter effect
        const words = document.querySelectorAll('.word');
        const fullText = document.querySelector('.full-text');
        let delay = 1000; // Initial delay for the first word

        // Show each word in sequence
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = '1'; // Show the word
            }, delay);
            delay += 1000; // Delay of 1 second before showing the next word
        });

        // Show the full phrase after all individual words have appeared
        setTimeout(() => {
            words.forEach(word => (word.style.opacity = '0')); // Hide individual words
            fullText.style.opacity = '1'; // Show full phrase
        }, delay + 1000);
    }, 2000); // 2 seconds delay
});
