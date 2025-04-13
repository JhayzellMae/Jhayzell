// script.js

function showMessage() {
    const messages = [
        "You're doing great!",
        "Keep pushing forward!",
        "Innovation is key!",
        "Success is near!",
        "You're on the right track!"
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    const themeStatus = document.getElementById('theme-status');
    const isDark = document.body.classList.contains('dark-mode');
    themeStatus.textContent = isDark ? "Dark Mode" : "Light Mode";
}
