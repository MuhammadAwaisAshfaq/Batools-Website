function changeMessageAndColor() {
    const messages = [
        "You're the love of my life, Batool.",
        "Every moment with you is magic, Batool.",
        "You complete me, Batool.",
        "I cherish every second with you, Batool.",
        "You're my everything, Batool."
    ];

    const gradients = [
        'linear-gradient(to bottom, blue, purple)',
        'linear-gradient(to bottom, pink, yellow)',
        'linear-gradient(to bottom, red, orange)',
        'linear-gradient(to bottom, green, teal)',
        'linear-gradient(to bottom, indigo, pink)'
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    document.getElementById('message').textContent = randomMessage;
    document.body.style.background = randomGradient;
}